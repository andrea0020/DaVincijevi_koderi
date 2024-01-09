package com.projektProgi.StoZelisCitati.services;

import com.projektProgi.StoZelisCitati.models.Knjiga;
import com.projektProgi.StoZelisCitati.models.Korisnik;
import com.projektProgi.StoZelisCitati.models.Ponuda;
import com.projektProgi.StoZelisCitati.models.PonudaDto;
import com.projektProgi.StoZelisCitati.repository.BookRepository;
import com.projektProgi.StoZelisCitati.repository.KorisnikRepository;
import com.projektProgi.StoZelisCitati.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class OfferService {
    private final OfferRepository offerRepository;
    private final KorisnikRepository korisnikRepository;
    private final BookRepository bookRepository;

    @Autowired
    public OfferService(OfferRepository offerRepository, KorisnikRepository korisnikRepository, BookRepository bookRepository) {
        this.offerRepository = offerRepository;
        this.korisnikRepository = korisnikRepository;
        this.bookRepository = bookRepository;
    }

    public Ponuda saveOffer(PonudaDto ponudaDto) {
        Korisnik korisnik = korisnikRepository.findById(ponudaDto.getPonuditeljId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Korisnik not found"));
        Knjiga knjiga = bookRepository.findById(ponudaDto.getKnjigaId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Knjiga not found"));

        Ponuda ponuda = new Ponuda();

        ponuda.setCijena(ponudaDto.getCijena());
        ponuda.setBrojPrimjeraka(ponudaDto.getBrojPrimjeraka());
        ponuda.setKorisnik(korisnik);
        ponuda.setKnjiga(knjiga);

        return offerRepository.save(ponuda);
    }

    public void deleteOffer(Long offerId) {
        offerRepository.deleteById(offerId);
    }

    public List<Ponuda> getOffers() {
        return offerRepository.findAll();
    }

    public List<Ponuda> findOffersByKorisnikId(Long korisnikId) {
        return offerRepository.findOffersByKorisnikId(korisnikId);
    }

}
