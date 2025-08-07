package com.fantacalcio.asta_service.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Asta {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TipologiaAsta tipologia;

    private int numeroPortieri;
    private int numeroDifensori;
    private int numeroCentrocampisti;
    private int numeroAttaccanti;

    private int budget;

    private LocalDateTime dataCreazione = LocalDateTime.now();


}
