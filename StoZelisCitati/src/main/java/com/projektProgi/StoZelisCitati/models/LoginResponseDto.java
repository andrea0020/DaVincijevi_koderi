package com.projektProgi.StoZelisCitati.models;

public class LoginResponseDto {
    private String role;
    private Long korisnikId;
    private boolean odobren;

    public LoginResponseDto() {
    }

    public boolean isOdobren() {
        return odobren;
    }

    public void setOdobren(boolean odobren) {
        this.odobren = odobren;
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
