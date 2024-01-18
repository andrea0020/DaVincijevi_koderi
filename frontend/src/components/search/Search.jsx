import { useState } from "react";
import "./Search.css"
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import { Books } from "./Books";
import { Navbar } from "../navbar/Navbar";

export function Searching() {

  const [results,setResults] = useState([]);

   return (
    <div className="Search">
        <div className="search-bar-container">
            <Navbar />
            <SearchBar setResults={setResults} results = {results}/>
            <SearchResultList results={results}/>
            <Books results = {results}/>
            
        </div>
    </div>
  );

}