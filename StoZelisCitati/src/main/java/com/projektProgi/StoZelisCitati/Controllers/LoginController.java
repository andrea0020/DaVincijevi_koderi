package com.projektProgi.StoZelisCitati.Controllers;

import com.projektProgi.StoZelisCitati.models.Korisnik;
import com.projektProgi.StoZelisCitati.services.KorisnikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class LoginController {
    private final KorisnikService korisnikService;

    @Autowired
    public LoginController(KorisnikService korisnikService) {
        this.korisnikService = korisnikService;
    }


    @PostMapping("/login")
    public String processLoginData(@RequestParam("username") String username,
                                   @RequestParam("password") String password) {

        List<Korisnik> korisnici = korisnikService.GetSviKorisnici();
        String rez = "";
        for (int i = 0; i < korisnici.size(); i++) {
            if (username.equals("AdminStranice") && password.equals("adminovasifra")) {
                rez = "redirect:/adminovHome";
            } else if (username.equals(korisnici.get(i).getUsername()) &&  password.equals(korisnici.get(i).getSifra())){
                rez = "redirect:/home";
            } else {
                rez = "redirect:/login";
            }
        }

        return  rez;
    }


}
