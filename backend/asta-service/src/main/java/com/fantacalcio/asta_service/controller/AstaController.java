package com.fantacalcio.asta_service.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fantacalcio.asta_service.model.Asta;
import com.fantacalcio.asta_service.service.AstaService;

@RestController
@RequestMapping("/asta")
public class AstaController {
    
    private final AstaService astaService;

    public AstaController(AstaService astaService) {
        this.astaService = astaService;
    }

    @PostMapping 
    public Asta creaAsta(@RequestBody Asta asta) {
        return astaService.creaAsta(asta);
    }

    @GetMapping
    public List<Asta> getAll() {
        return astaService.getAll();
    }

    @GetMapping
    public Asta getById(@PathVariable Long id) {
        return astaService.getById(id);
    }
}
