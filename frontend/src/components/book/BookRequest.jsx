import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants"
import '../../index.css'
import './BookReq.css'

export function BookRequest(){

   const navigate = useNavigate()

    const [naziv, setNaziv] = useState("")
    const [knjige, setKnjige] = useState([])
    const firstTime = useRef(0)
    const requests = useRef([])

    const requestTranslation = async (e) => {
        e.preventDefault();

        const response = await fetch(`${VITE_API_URL}/book/request/${naziv}`)
            .then(response => response.json())
            .then(data => setKnjige(data))

         if (knjige.length > 0) {
            navigate("/")
         }
    }

    useEffect(() => {
        if (requests.current.includes(naziv)){
            console.log('Prijevod ovog naslova već je zatražen.')
        }else if (firstTime.current<2){
            firstTime.current = firstTime.current+1;
        }else if (firstTime.current==2){
            if (knjige.length===0){
                console.log('U bazi nema tog naslova.')
            }else{
                fetch(`${VITE_API_URL}/book/${knjige[0].id}`, {method:'PUT'});
                console.log('Zahtjev dodan.');
                requests.current.push(naziv);
            }
        }
    }, [knjige])

    return (
        <div className="container" >
            <div className="login-container">
               <h1 style={{ color: 'gray' }}>Zatraži prijevod </h1>
                <form onSubmit={requestTranslation}>
                    <div className="input-group">
                        <label htmlFor="naziv">Naziv knjige</label>
                        <input type="text" id="naziv" name="naziv" required placeholder='Naziv' value={naziv} onChange={(e) => setNaziv(e.target.value)} style={{ fontSize: '11px' }}/>
                    </div>
                    <button type="submit">Zatraži</button>
                </form>            
            </div>
        </div>
    )
}