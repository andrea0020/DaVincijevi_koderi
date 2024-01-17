import React from "react";
import { useEffect } from "react";
import "./SingleBook.css";
export const SingleBook = ({podaci}) => {
    
    useEffect(() => {
        console.log(podaci)
      }, []);
    
    return (
        <div className="main-Div">
            <img src={podaci.slikaURL} alt="" className="slika"/>
            <h1>{podaci.naziv}</h1>
            <p className="autor">Autor: {podaci.autor}</p>
            <p className="godina">Godina Izdanja: {podaci.godIzdanja}</p>
            <p className="opis">{podaci.opis}</p>
            if({podaci.o})
        
        </div>
    )
}