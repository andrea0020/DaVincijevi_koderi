package com.projektProgi.StoZelisCitati.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import jakarta.persistence.*;

import java.util.List;

@Entity

@Table(name = "ponuditelj")
public class Korisnik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;

    private String username ="";
    private String password = "";
    private String URLL = "";
    private boolean odobren;
    private String naziv, adresa, email, telefon, tip;

    @JsonIgnore
    @OneToMany(mappedBy = "korisnik")
    private List<Ponuda> ponude;

    public List<Ponuda> getPonude() {
        return ponude;
    }

    public void setPonude(List<Ponuda> ponude) {
        this.ponude = ponude;
    }

    public boolean isOdobren() {
        return odobren;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getURLL() {
        return URLL;
    }

    public void setURLL(String URLL) {
        this.URLL = URLL;
    }

    public boolean getOdobren() {
        return odobren;
    }

    public void setOdobren(boolean odobren) {
        this.odobren = odobren;
    }
}