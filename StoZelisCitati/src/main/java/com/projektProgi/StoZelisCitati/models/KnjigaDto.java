package com.projektProgi.StoZelisCitati.models;

public class KnjigaDto {
    private String naziv, autor, izdavac, kategorija, zanr, opis, oznaka, stanjeOcuvanosti, slikaURL;
    private int godIzdanja, isbn, brojIzdanja;

    public KnjigaDto() {
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getIzdavac() {
        return izdavac;
    }

    public void setIzdavac(String izdavac) {
        this.izdavac = izdavac;
    }

    public String getKategorija() {
        return kategorija;
    }

    public void setKategorija(String kategorija) {
        this.kategorija = kategorija;
    }

    public String getZanr() {
        return zanr;
    }

    public void setZanr(String zanr) {
        this.zanr = zanr;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getOznaka() {
        return oznaka;
    }

    public void setOznaka(String oznaka) {
        this.oznaka = oznaka;
    }

    public String getStanjeOcuvanosti() {
        return stanjeOcuvanosti;
    }

    public void setStanjeOcuvanosti(String stanjeOcuvanosti) {
        this.stanjeOcuvanosti = stanjeOcuvanosti;
    }

    public String getSlikaURL() {
        return slikaURL;
    }

    public void setSlikaURL(String slikaURL) {
        this.slikaURL = slikaURL;
    }

    public int getGodIzdanja() {
        return godIzdanja;
    }

    public void setGodIzdanja(int godIzdanja) {
        this.godIzdanja = godIzdanja;
    }

    public int getIsbn() {
        return isbn;
    }

    public void setIsbn(int isbn) {
        this.isbn = isbn;
    }

    public int getBrojIzdanja() {
        return brojIzdanja;
    }

    public void setBrojIzdanja(int brojIzdanja) {
        this.brojIzdanja = brojIzdanja;
    }
}

