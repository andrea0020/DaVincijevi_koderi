package com.projektProgi.StoZelisCitati.repository;


import com.projektProgi.StoZelisCitati.models.Knjiga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Knjiga, Long> {
    
    @Modifying
    @Query(value="UPDATE Knjiga SET zahtjevi = zahtjevi+1 WHERE id = ?", nativeQuery=true)
    int incrementRequests(Long id);
    
    List<Knjiga> findByNaziv(String naziv);
}
