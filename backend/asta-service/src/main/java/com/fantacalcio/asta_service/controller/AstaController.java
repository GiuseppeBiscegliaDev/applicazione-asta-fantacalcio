package com.fantacalcio.asta_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fantacalcio.asta_service.dto.AstaRequest;
import com.fantacalcio.asta_service.model.Asta;
import com.fantacalcio.asta_service.service.AstaService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/asta")
@RequiredArgsConstructor
public class AstaController {
    
    private final AstaService astaService;

    @PostMapping
    public ResponseEntity<Asta> creaAsta(@RequestBody AstaRequest request) {
        Asta nuovaAsta = astaService.creaAsta(request);
        return ResponseEntity.ok(nuovaAsta);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Asta> getAstaById(@PathVariable Long id) {
        Asta asta = astaService.trovaAstaPerId(id);
        if(asta != null) {
            return ResponseEntity.ok(asta);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
