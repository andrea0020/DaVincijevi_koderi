import React, { useEffect, useState } from "react";
import { VITE_API_URL } from "../../utils/constants"
 

export function FetchDataBooks(){

const [data,setData] = useState([]);
 
    const APIGet = () => {
        fetch(`${VITE_API_URL}/book`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        })
    };

    useEffect(() => {
        APIGet();
    },[]);
    
    return (
        <div>
            my API 
            <button onClick={APIGet}>FetchAPI</button>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>

    )
}