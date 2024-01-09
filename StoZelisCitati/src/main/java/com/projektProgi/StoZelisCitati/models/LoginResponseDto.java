package com.projektProgi.StoZelisCitati.models;

public class LoginResponseDto {
    private String role;
    private Long korisnikId;

    public LoginResponseDto() {
    }

    public Long getKorisnikId() {
        return korisnikId;
    }

    public void setKorisnikId(Long korisnikId) {
        this.korisnikId = korisnikId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
