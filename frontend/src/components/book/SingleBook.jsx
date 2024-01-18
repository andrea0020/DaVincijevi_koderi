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
            <h2 style={{marginBottom: '20px'}}>{podaci.naziv}</h2>
            <p style={{marginBottom: '10px'}} className="autor">Autor: {podaci.autor} </p>
            <p style={{marginLeft: '1px'}} className="godina">Godina Izdanja: {podaci.godIzdanja}</p>
            <p style={{fontSize: '25px'}} className="opis">° {podaci.opis}</p>
        
        </div>
    )
}