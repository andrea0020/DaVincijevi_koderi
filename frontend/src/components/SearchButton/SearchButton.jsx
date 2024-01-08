// SearchButton.js
import React, { useState } from 'react';
import './SearchButton.css'; // Import the CSS file

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for: ${searchTerm}`);
    // You can perform other actions like fetching data from an API or updating state
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Unesite naziv željene knjige"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchButton;
