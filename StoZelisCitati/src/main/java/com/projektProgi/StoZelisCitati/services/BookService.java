package com.projektProgi.StoZelisCitati.services;

import com.projektProgi.StoZelisCitati.models.Knjiga;
import com.projektProgi.StoZelisCitati.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public void deleteBook(Long bookId) {
        bookRepository.deleteById(bookId);
    }


}
