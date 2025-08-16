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
private PasswordEncoder passwordEncoder; // Add this

@PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User user) {
    // Get role name as string
    String role = user.getRole().name().toUpperCase();

    // Check email in employee table only for restricted roles
    if (role.equals("EVALUATOR") || role.equals("TERRITORY_MANAGER") || role.equals("FRANCHISE_MANAGER")) {
        boolean existsInEmployee = employeeRepository.findByEmail(user.getEmail()).isPresent();
        if (!existsInEmployee) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "❌ Your email is not in Employee records. Contact Admin."));
        }
    }

    // Prevent duplicate registration
    if (userRepository.findByEmail(user.getEmail()).isPresent()) {
        return ResponseEntity.badRequest().body(Map.of("message", "❌ User already registered. Please login."));
    }

    // Encode the password before saving
    user.setPassword(passwordEncoder.encode(user.getPassword()));

    // Save user
    userRepository.save(user);

    // Return success message
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
