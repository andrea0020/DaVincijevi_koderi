package com.projektProgi.StoZelisCitati.Controllers;

import com.projektProgi.StoZelisCitati.models.Korisnik;
import com.projektProgi.StoZelisCitati.models.KorisnikDto;
import com.projektProgi.StoZelisCitati.models.LoginDto;
import com.projektProgi.StoZelisCitati.models.LoginResponseDto;
import com.projektProgi.StoZelisCitati.services.KorisnikService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class KorisnikController {
    private final KorisnikService korisnikService;

    @Autowired
    public KorisnikController(KorisnikService korisnikService) {
        this.korisnikService = korisnikService;
    }

    @PostMapping("/register")
    public ResponseEntity<Void> registerUser(@RequestBody KorisnikDto korisnikDto) throws URISyntaxException {
        Korisnik korisnik = new Korisnik();

        korisnik.setNaziv(korisnikDto.getNaziv());
        korisnik.setAdresa(korisnikDto.getAdresa());
        korisnik.setTelefon(korisnikDto.getTelefon());
        korisnik.setEmail(korisnikDto.getEmail());
        korisnik.setTip(korisnikDto.getTip());
        korisnik.setOdobren(false);
        korisnik.setPassword(korisnikDto.getPassword()); // we should encrypt this
        korisnik.setUsername(korisnikDto.getUsername());

        korisnik = korisnikService.saveKorisnik(korisnik);

        return ResponseEntity.created(new URI("/user/" + korisnik.getId())).build();
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> loginUser(@RequestBody LoginDto loginDto)  {
        LoginResponseDto dto = new LoginResponseDto();
        List<Korisnik> korisnici = korisnikService.GetSviKorisnici();

        if (loginDto.getUsername().equals("AdminStranice") && loginDto.getPassword().equals("adminovasifra")) {
            dto.setRole("Admin");
            return ResponseEntity.ok(dto);
        }

        for (int i = 0; i < korisnici.size(); i++) {
            if (loginDto.getUsername().equals(korisnici.get(i).getUsername()) && loginDto.getPassword().equals(korisnici.get(i).getPassword())) {
                dto.setRole("User"); // change this to all 3 roles
                dto.setKorisnikId(korisnici.get(i).getId());
                return ResponseEntity.ok(dto);
            }
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/users")
    public List<Korisnik> getUsers() {
        return this.korisnikService.GetSviKorisnici();
    }

    @GetMapping("/users/{userId}")
    public Korisnik getUserById(@PathVariable Long userId) {
        return korisnikService.getUserById(userId);
    }

    @PostMapping("/users/{userId}/approve")
    public ResponseEntity<String> approveUser(@PathVariable Long userId) {
        korisnikService.approveUser(userId);
        return ResponseEntity.ok("User approved");
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        korisnikService.deleteUser(userId);
        return ResponseEntity.ok().build();
    }

}
