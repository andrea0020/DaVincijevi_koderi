package com.projektProgi.StoZelisCitati.services;

import com.projektProgi.StoZelisCitati.models.Korisnik;
import com.projektProgi.StoZelisCitati.repository.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisnikService {
    private final KorisnikRepository korisnikRepository;

    @Autowired
    public KorisnikService(KorisnikRepository korisnikRepository) {
        this.korisnikRepository = korisnikRepository;
    }

    public void saveKorisnik(Korisnik korisnik){
        korisnikRepository.save(korisnik);
    }

    public List<Korisnik> GetSviKorisnici(){
        return korisnikRepository.findAll();
    }


    public void updateOdobrenje(){
        List<Korisnik> listaKorisnika = korisnikRepository.findAll();
        for(int i = 0; i < listaKorisnika.size(); i++){
            listaKorisnika.get(i).setOdobren("True");
        }
    }


}

