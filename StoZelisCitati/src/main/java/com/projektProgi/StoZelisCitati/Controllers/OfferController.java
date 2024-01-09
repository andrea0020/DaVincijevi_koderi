package com.projektProgi.StoZelisCitati.Controllers;

import com.projektProgi.StoZelisCitati.models.Ponuda;
import com.projektProgi.StoZelisCitati.models.PonudaDto;
import com.projektProgi.StoZelisCitati.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RequestMapping("/offer")
@RestController
public class OfferController {
    @Autowired
    private OfferService offerService;

    @PostMapping
    public ResponseEntity<Void> addOffer(@RequestBody PonudaDto ponudaDto) throws URISyntaxException {
        Ponuda ponuda = offerService.saveOffer(ponudaDto);

        return ResponseEntity.created(new URI("/offer/" + ponuda.getId())).build();
    }

    @DeleteMapping("/{offerId}")
    public ResponseEntity<?> deleteOffer(@PathVariable Long offerId) {
        offerService.deleteOffer(offerId);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public List<Ponuda> getOffers() {
        return offerService.getOffers();
    }

    @GetMapping("/users/{korisnikId}")
    public List<Ponuda> getOffersByKorisnikId(@PathVariable Long korisnikId) {
        return offerService.findOffersByKorisnikId(korisnikId);
    }

}
