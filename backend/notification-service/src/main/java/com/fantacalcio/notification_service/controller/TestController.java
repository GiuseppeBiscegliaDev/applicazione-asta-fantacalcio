package com.fantacalcio.notification_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/notification/ping")
    public String ping() {
        return "Notification Service OK";
    }
    
}