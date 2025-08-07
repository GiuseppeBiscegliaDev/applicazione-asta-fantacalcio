package com.fantacalcio.asta_service.service;

import org.springframework.stereotype.Service;

import com.fantacalcio.asta_service.dto.AstaRequest;
import com.fantacalcio.asta_service.model.Asta;
import com.fantacalcio.asta_service.model.TipologiaAsta;
import com.fantacalcio.asta_service.repository.AstaRepository;

@Service
public class AstaService {
    
    private final AstaRepository astaRepository;

    public AstaService(AstaRepository astaRepository) {
        this.astaRepository = astaRepository;
    }

    public Asta creaAsta(AstaRequest request) {
        
        Asta asta = Asta.builder()
            .numeroPartecipanti(request.getNumeroPartecipanti())
            .tipologiaAsta(TipologiaAsta.fromString(request.getTipologiaAsta()))
            .numeroPortieri(request.getNumeroPortieri())
            .numeroDifensori(request.getNumeroDifensori())
            .numeroCentrocampisti(request.getNumeroCentrocampisti())
            .numeroAttaccanti(request.getNumeroAttaccanti())
            .budget(request.getBudget())
            .build();

        return astaRepository.save(asta);
    }
}
