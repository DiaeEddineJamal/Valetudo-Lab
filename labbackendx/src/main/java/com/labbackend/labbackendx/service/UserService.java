package com.labbackend.labbackendx.service;


import com.labbackend.labbackendx.model.Users;
import com.labbackend.labbackendx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void signUp(Users user) {
        userRepository.save(user);
    }

    public Users login(String username, String password) {
        Users user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) { // Note: You should handle password comparison securely here
            // Login successful
            return user;
        }
        // Login failed
        return null;
    }
}
