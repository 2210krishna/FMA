package com.examly.springapp.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepo userRepo;

    public String register(User user) {
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists!";
        }
        user.setPassword(encoder.encode(user.getPassword()));
        userRepo.save(user);
        return "User Registered Successfully";
    }

    public User authenticate(String email, String password) {
        Optional<User> latestUser = userRepo.findTopByEmailOrderByIdDesc(email);
        if (latestUser.isPresent() && encoder.matches(password, latestUser.get().getPassword())) {
            return latestUser.get();
        }
        return null;
    }
}
