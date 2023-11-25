package com.projektProgi.StoZelisCitati.repository;

import com.projektProgi.StoZelisCitati.models.Korisnik;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class KorisnikRepositoryTest {
    @Autowired
    private KorisnikRepository korisnikRepository;

    @Test
    void saveMethod(){
        Korisnik korisnik = new Korisnik();
        korisnik.setId(1l);
        korisnik.setTip("preprodavac");
        korisnik.setEpošta("stevo@mail.com");
        korisnik.setTelefon("063450521");
        korisnik.setNaziv("Stevo&co");
        korisnik.setAdresa("pod bedemom 2");

        Korisnik sacuvaniKorisnik = korisnikRepository.save(korisnik);

        System.out.println(sacuvaniKorisnik);
    }


}