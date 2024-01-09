package com.projektProgi.StoZelisCitati.repository;

import com.projektProgi.StoZelisCitati.models.Ponuda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfferRepository extends JpaRepository<Ponuda, Long> {
    public List<Ponuda> findOffersByKorisnikId(Long korisnikId);
}
