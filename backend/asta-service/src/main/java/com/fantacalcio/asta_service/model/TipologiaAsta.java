package com.fantacalcio.asta_service.model;

public enum TipologiaAsta {
    CHIAMATA,
    ALFABETICA,
    RANDOM;

    public static TipologiaAsta fromString(String value) {
        return TipologiaAsta.valueOf(value.toUpperCase());
    }
}
