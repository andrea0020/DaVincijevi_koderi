package com.projektProgi.StoZelisCitati.Controllers;

import com.projektProgi.StoZelisCitati.models.Korisnik;
import com.projektProgi.StoZelisCitati.services.KorisnikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class KorisnikController {
    private final KorisnikService korisnikService;

    @Autowired
    public KorisnikController(KorisnikService korisnikService) {
        this.korisnikService = korisnikService;
    }



    @PostMapping("/register")
    public String processData(@RequestParam("naziv") String naziv,
                              @RequestParam("adresa") String adresa,
                              @RequestParam("telefon") String telefon,
                              @RequestParam("email") String email,
                              @RequestParam("tip") String tip){



        Korisnik korisnik = new Korisnik();
        korisnik.setNaziv(naziv);
        korisnik.setAdresa(adresa);
        korisnik.setTelefon(telefon);
        korisnik.setEpošta(email);
        korisnik.setTip(tip);
        korisnik.setId(korisnik.getId());
        korisnik.setOdobren("True");
        korisnik.setSifra("sifraod" + korisnik.getNaziv());
        korisnik.setUsername("usernameOd" + korisnik.getNaziv());
        korisnik.setURLL("/korisnik" + korisnik.getId());

        korisnikService.saveKorisnik(korisnik);
        return "redirect:/login";
    }


    /*@PostMapping("/login")
    public String processLogin(@RequestParam("username") String username,
                                   @RequestParam("sifra") String sifra){
    String pomocni = "login";
        List<Korisnik> listaKorisnika = korisnikService.GetSviKorisnici();
        for(int i = 0; i < listaKorisnika.size();i++){
            if(username.equals(listaKorisnika.get(i).getUsername()) && username.equals((listaKorisnika.get(i).getUsername()))){
                pomocni = "redirect:/home";
            } else {
                pomocni = "login";
            }
        }
        return  pomocni;
        }*/



}
