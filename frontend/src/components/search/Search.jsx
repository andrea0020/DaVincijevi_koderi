import { useState } from "react";
import "./Search.css"
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import { Books } from "./Books";



export function Searching() {

  const [results,setResults] = useState([]);

   return (
    <div className="Search">
        <div className="search-bar-container">
            <SearchBar setResults={setResults} results = {results}/>
            <SearchResultList results={results}/>
            <Books results = {results}/>
            
        </div>
    </div>
  );


}
