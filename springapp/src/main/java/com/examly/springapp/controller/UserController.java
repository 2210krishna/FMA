package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.configuration.JWTUtil;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {
        User foundUser = userService.authenticate(user.getEmail(), user.getPassword());
        Map<String, Object> response = new HashMap<>();
    
        if (foundUser != null) {
            String token = JWTUtil.generateToken(foundUser.getEmail());
            response.put("message", "Login successful");
            response.put("token", token);
            response.put("role", foundUser.getRole());     // Add role
            response.put("userId", foundUser.getId());     // Add userId
            return response;
        }
    
        response.put("message", "Invalid login credentials");
        return response;
    }
    

}
