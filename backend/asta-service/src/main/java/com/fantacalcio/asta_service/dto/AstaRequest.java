package com.fantacalcio.asta_service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AstaRequest {
    private int numeroPartecipanti;
    private String tipologiaAsta;
    private int numeroPortieri;
    private int numeroDifensori;
    private int numeroCentrocampisti;
    private int numeroAttaccanti;
    private int budget;
}