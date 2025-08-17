package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.configuration.JWTUtil;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.EmployeeRepository;
import com.examly.springapp.repository.UserRepo;
import com.examly.springapp.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
private PasswordEncoder passwordEncoder; 

@PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User user) {
    String role = user.getRole().name().toUpperCase();

    if (role.equals("EVALUATOR") || role.equals("TERRITORY_MANAGER") || role.equals("FRANCHISE_MANAGER")) {
        boolean existsInEmployee = employeeRepository.findByEmail(user.getEmail()).isPresent();
        if (!existsInEmployee) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "❌ Your email is not in Employee records. Contact Admin."));
        }
    }

    boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();
    if (userExists && !role.equals("VENDOR")) {
        return ResponseEntity.badRequest().body(Map.of("message", "❌ User already registered. Please login."));
    }

    user.setPassword(passwordEncoder.encode(user.getPassword()));

    userRepository.save(user);

    return ResponseEntity.ok(Map.of("message", "✅ User registered successfully as " + role));
}


    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {
        User foundUser = userService.authenticate(user.getEmail(), user.getPassword());
        Map<String, Object> response = new HashMap<>();

        if (foundUser != null) {
            String token = JWTUtil.generateToken(foundUser.getEmail());
            response.put("message", "Login successful");
            response.put("token", token);
            response.put("role", foundUser.getRole().name());
            response.put("userId", foundUser.getId());
            return response;
        }

        response.put("message", "Invalid login credentials");
        return response;
    }
}
