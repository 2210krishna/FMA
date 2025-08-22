package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.configuration.JWTUtil;
import com.examly.springapp.controller.UserController.PasswordResetRequest;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.EmployeeRepository;
import com.examly.springapp.repository.UserRepo;
import com.examly.springapp.service.SpiceMerchantService;
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

@Autowired
private SpiceMerchantService spiceMerchantService;

@PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User user) {
    String role = user.getRole().name().toUpperCase();

    if (role.equals("ADMIN")) {
        if (!user.getEmail().equalsIgnoreCase("admin@gmail.com") || 
            !user.getPassword().equals("123")) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "❌ Register as a Guest "));
        }
    }
    if (role.equals("EVALUATOR") || role.equals("TERRITORY_MANAGER") || role.equals("FRANCHISE_MANAGER")) {
        boolean existsInEmployee = employeeRepository.findByEmail(user.getEmail()).isPresent();
        if (!existsInEmployee) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "❌ Your email is not in Employee records. Contact Admin."));
        }
    }

    if (role.equals("VENDOR")) {
        boolean existsInSpiceMerchant = spiceMerchantService.vendorExistsByEmail(user.getEmail());
        if (!existsInSpiceMerchant) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "❌ Your email is not in SpiceMerchant records. Contact Admin."));
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
        Map<String, Object> response = new HashMap<>();
        
        User foundUser = userService.authenticate(user.getEmail(), user.getPassword());

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
    
    public static class PasswordResetRequest {
        private String email;
        private String newPassword;

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getNewPassword() { return newPassword; }
        public void setNewPassword(String newPassword) { this.newPassword = newPassword; }
    }

    @PutMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody PasswordResetRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "User with this email does not exist"));
        }
        User user = userOptional.get();

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Password reset successful"));
    }
}

