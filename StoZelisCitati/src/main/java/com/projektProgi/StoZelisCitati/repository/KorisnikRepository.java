package com.projektProgi.StoZelisCitati.repository;

import com.projektProgi.StoZelisCitati.models.Korisnik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik,Long> {
}
