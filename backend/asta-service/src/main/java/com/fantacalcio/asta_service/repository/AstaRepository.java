package com.fantacalcio.asta_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fantacalcio.asta_service.model.Asta;

public interface AstaRepository extends JpaRepository<Asta, Long> {
    
}