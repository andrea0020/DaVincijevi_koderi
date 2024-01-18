package com.projektProgi.StoZelisCitati.services;

import com.projektProgi.StoZelisCitati.models.Knjiga;
import com.projektProgi.StoZelisCitati.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Knjiga saveBook(Knjiga knjiga) {
        return bookRepository.save(knjiga);
    }

    public Optional<Knjiga> getBook(Long bookId){
        return bookRepository.findById(bookId);
    }

    public List<Knjiga> getAllBooks() {
        return bookRepository.findAll();
    }

    public void deleteBook(Long bookId) {
        bookRepository.deleteById(bookId);
    }

    @Transactional
    public void incrementRequests(Long bookId){
        bookRepository.incrementRequests(bookId);
    }

    public List<Knjiga> findByName(String naziv){
        return bookRepository.findByNaziv(naziv);
    }

}
