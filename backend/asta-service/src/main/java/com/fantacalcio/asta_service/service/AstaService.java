package com.fantacalcio.asta_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fantacalcio.asta_service.model.Asta;
import com.fantacalcio.asta_service.repository.AstaRepository;

@Service
public class AstaService {
    
    private final AstaRepository astaRepository;

    public AstaService(AstaRepository astaRepository) {
        this.astaRepository = astaRepository;
    }

    public Asta creaAsta(Asta asta) {
        return astaRepository.save(asta);
    }

    public List<Asta> getAll() {
        return astaRepository.findAll();
    }

    public Asta getById(Long id) {
        return astaRepository.findById(id).orElse(null);
    }
}
