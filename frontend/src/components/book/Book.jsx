import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookPage.css'

export function Book(){
    const [isbn, setIsbn] = useState('0');
    const [zahtjevi, setZahtjevi] = useState(0);
    const { bookId } = useParams();
    fetch(`http://localhost:8080/book/${bookId}`, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
                setIsbn(data.isbn);
                setZahtjevi(data.zahtjevi)
            }
        )

    return (
        <div>
            <p>{isbn}</p>
            <p>{zahtjevi}</p>
            <button onClick={
                (e) => {
                    e.currentTarget.disabled = true;
                    fetch(`http://localhost:8080/book/${bookId}`, {method:'PUT'})
                    fetch(`http://localhost:8080/book/${bookId}`, {method: 'GET'})
                        .then(response => response.json())
                        .then(data => {
                                setIsbn(data.isbn);
                                setZahtjevi(data.zahtjevi)
                            }
                        )   
                }
            }>
                GumbGumb.
            </button>
        </div>
    )

}