package com.labbackend.labbackendx.controller;

import com.labbackend.labbackendx.model.Users;
import com.labbackend.labbackendx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping ("/signuptest")
    public String signuptest(){
        return "okkkkkkkkkkkkkkkk" ;
    }

    @PostMapping("/signup")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> signUp(@RequestBody Users user) {
        userService.signUp(user);
        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
    }
    @GetMapping ("/test")
    public String test(){
        return "ok" ;
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users user) {
        Users loggedInUser = userService.login(user.getUsername(), user.getPassword());
        if (loggedInUser != null) {
            return new ResponseEntity<>("Login successful!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }
    }
}
