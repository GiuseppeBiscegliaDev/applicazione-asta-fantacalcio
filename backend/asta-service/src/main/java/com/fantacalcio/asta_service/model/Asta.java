package com.fantacalcio.asta_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Asta {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int numeroPartecipanti; // da 2 a 20

    @Enumerated(EnumType.STRING)
    private TipologiaAsta tipologiaAsta;

    private int numeroPortieri;
    private int numeroDifensori;
    private int numeroCentrocampisti;
    private int numeroAttaccanti;

    private int budget;
}
