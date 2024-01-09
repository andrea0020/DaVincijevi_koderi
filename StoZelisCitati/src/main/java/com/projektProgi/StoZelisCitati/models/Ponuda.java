package com.projektProgi.StoZelisCitati.models;

import jakarta.persistence.*;

@Entity
public class Ponuda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int brojPrimjeraka, cijena;

    @ManyToOne
    @JoinColumn(name = "knjiga_id", nullable = false)
    private Knjiga knjiga;

    @ManyToOne
    @JoinColumn(name = "korisnik_id", nullable = false)
    private Korisnik korisnik;

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }

    public Knjiga getKnjiga() {
        return knjiga;
    }

    public void setKnjiga(Knjiga knjiga) {
        this.knjiga = knjiga;
    }

    public Ponuda() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getBrojPrimjeraka() {
        return brojPrimjeraka;
    }

    public void setBrojPrimjeraka(int brojPrimjeraka) {
        this.brojPrimjeraka = brojPrimjeraka;
    }

    public int getCijena() {
        return cijena;
    }

    public void setCijena(int cijena) {
        this.cijena = cijena;
    }
}
