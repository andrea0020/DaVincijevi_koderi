import React from "react";
import { DisplayBook } from "./DisplayBooks";
import "./DisplayBooks.css"

export const Books = ({results}) => {
if(results){
    return(
    <div className="search-result1">
            {results.map((result,id) =>{
                return <DisplayBook result = {result} key={id}/>
            })}
        
        </div>
)}else{
    return null
}
}