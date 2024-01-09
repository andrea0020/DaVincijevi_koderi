package com.projektProgi.StoZelisCitati.repository;


import com.projektProgi.StoZelisCitati.models.Knjiga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Knjiga, Long> {
}
