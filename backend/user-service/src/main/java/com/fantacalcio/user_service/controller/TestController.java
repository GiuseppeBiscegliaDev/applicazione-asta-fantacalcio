package com.fantacalcio.user_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/user/ping")
    public String ping() {
        return "User Service OK";
    }

}
