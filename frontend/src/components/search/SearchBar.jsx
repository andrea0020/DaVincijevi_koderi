import React ,{useState} from "react";
import "./Search.css";
import { VITE_API_URL } from "../../utils/constants";


export const SearchBar = ({setResults}, {results}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(`${VITE_API_URL}/book`).then((response) =>response.json()).then((json) => {
            const results = json.filter((knjiga) => {
                return value && knjiga.naziv.toLowerCase().includes(value)
            });
            setResults(results);
            console.log(results);
        });       
        };

    const handlechange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const showBooks = (value) => {
        const books = fetchData(value);
        console.log(books)
    }
   
    return(
        <div className="input-wrapper">
        <button onClick={showBooks}>Search</button>
        <input placeholder="Type to Search..." value={input} onChange={(e) =>handlechange(e.target.value)}></input>  
        </div>  
    );
    
};