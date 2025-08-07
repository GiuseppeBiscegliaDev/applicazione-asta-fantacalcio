package com.fantacalcio.asta_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/asta/ping")
    public String ping() {
        return "Asta Service OK";
    }
    
}