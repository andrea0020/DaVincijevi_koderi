package com.projektProgi.StoZelisCitati.services;

import com.projektProgi.StoZelisCitati.models.Knjiga;
import com.projektProgi.StoZelisCitati.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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

    public List<Knjiga> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Knjiga> getBook(Long bookId){
        return bookRepository.findById(bookId);
    }

    public void deleteBook(Long bookId) {
        bookRepository.deleteById(bookId);
    }

    @Transactional
    public void incrementRequests(Long bookId){
        bookRepository.incrementRequests(bookId);
    }
}
