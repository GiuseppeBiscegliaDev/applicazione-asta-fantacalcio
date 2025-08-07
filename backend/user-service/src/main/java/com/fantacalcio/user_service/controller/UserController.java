package com.fantacalcio.user_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fantacalcio.user_service.dto.UserRegistrationRequest;
import com.fantacalcio.user_service.model.User;
import com.fantacalcio.user_service.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/utenti")
@RequiredArgsConstructor
public class UserController {
    
    private final UserService userService;

    @PostMapping
    public ResponseEntity<User> registraUtente(@RequestBody UserRegistrationRequest request) {
        User nuovoUtente = userService.registra(request);
        return ResponseEntity.ok(nuovoUtente);
    }
}
