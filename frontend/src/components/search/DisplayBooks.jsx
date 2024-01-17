import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./DisplayBooks.css"


export const DisplayBook = ({result}) =>{
    
    


     
    
    return (
        <div className="search-result1">
        <div className="flex-item">
            <Link to={`/book/${result.id}`} className="currentLink"><img src={result.slikaURL} alt="" /></Link>
            <Link to={`/book/${result.id}`} className="currentLink"><p className="ime-Knjige">{result.naziv}</p></Link>
            <p className="autor-Knjige">{result.autor}</p>

        </div>
        </div>
        
        )
}


