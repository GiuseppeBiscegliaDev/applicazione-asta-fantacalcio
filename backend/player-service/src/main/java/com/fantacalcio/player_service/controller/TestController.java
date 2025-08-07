package com.fantacalcio.player_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    
    @GetMapping("/player/ping")
    public String ping() {
        return "Player Service OK";
    }
}
