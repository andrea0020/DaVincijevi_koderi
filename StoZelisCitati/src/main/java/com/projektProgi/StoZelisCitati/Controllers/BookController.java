package com.projektProgi.StoZelisCitati.Controllers;

import com.projektProgi.StoZelisCitati.models.Knjiga;
import com.projektProgi.StoZelisCitati.models.KnjigaDto;
import com.projektProgi.StoZelisCitati.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RequestMapping("/book")
@RestController
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public ResponseEntity<Void> addBook(@RequestBody KnjigaDto knjigaDto) throws URISyntaxException {
        Knjiga knjiga = new Knjiga();

        knjiga.setNaziv(knjigaDto.getNaziv());
        knjiga.setAutor(knjigaDto.getAutor());
        knjiga.setIzdavac(knjigaDto.getIzdavac());
        knjiga.setIsbn(knjigaDto.getIsbn());
        knjiga.setKategorija(knjigaDto.getKategorija());
        knjiga.setOpis(knjigaDto.getOpis());
        knjiga.setZanr(knjigaDto.getZanr());
        knjiga.setOznaka(knjigaDto.getOznaka());
        knjiga.setGodIzdanja(knjigaDto.getGodIzdanja());
        knjiga.setBrojIzdanja(knjigaDto.getBrojIzdanja());
        knjiga.setStanjeOcuvanosti(knjigaDto.getStanjeOcuvanosti());

        knjiga = bookService.saveBook(knjiga);

        return ResponseEntity.created(new URI("/book/" + knjiga.getId())).build();
    }

    @GetMapping
    public List<Knjiga> getAllBooks() {
        return this.bookService.getAllBooks();
    }

    @DeleteMapping("/{bookId}")
    public ResponseEntity<?> deleteBook(@PathVariable Long bookId) {
        bookService.deleteBook(bookId);
        return ResponseEntity.ok().build();
    }

}
