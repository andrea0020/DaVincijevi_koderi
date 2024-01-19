import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookReq.css'
import { VITE_API_URL } from '../../utils/constants';

export function Book(){
    const [isbn, setIsbn] = useState('0');
    const [zahtjevi, setZahtjevi] = useState(0);
    const { bookId } = useParams();
    fetch(`${VITE_API_URL}/book/${bookId}`, {method: 'GET'})
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
                    fetch(`${VITE_API_URL}/book/${bookId}`, {method:'PUT'})
                    fetch(`${VITE_API_URL}/book/${bookId}`, {method: 'GET'})
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