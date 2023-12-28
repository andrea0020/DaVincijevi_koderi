package com.projektProgi.StoZelisCitati.models;
import com.fasterxml.jackson.annotation.JsonSetter;

import jakarta.persistence.*;

@Entity

@Table(name = "ponuditelj")
public class Korisnik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;

    private String username ="";
    private String sifra = "";
    private String URLL = "";
    private String odobren;


    private String naziv;

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

    public String getEpošta() {
        return epošta;
    }

    public void setEpošta(String epošta) {
        this.epošta = epošta;
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

    public String getSifra() {
        return sifra;
    }

    public void setSifra(String sifra) {
        this.sifra = sifra;
    }

    public String getURLL() {
        return URLL;
    }

    public void setURLL(String URLL) {
        this.URLL = URLL;
    }

    public String getOdobren() {
        return odobren;
    }

    public void setOdobren(String odobren) {
        this.odobren = odobren;
    }

    private String adresa;
    private String epošta;
    private String telefon;
    private String tip;



}