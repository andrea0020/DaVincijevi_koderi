//import { Link } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'

//export function HomePage() {
 // return (
   // <div className='container'>
     //   <Navbar />
    //</div>
  //)
//}

import React from 'react';
//import { Navbar } from '../navbar/Navbar';
import { Navbar as MyNavbar } from '../navbar/Navbar';
import SearchButton from '../SearchButton/SearchButton';
import '../SearchButton/SearchButton.css'; // Import the CSS file

export function HomePage() {
  return (
    <div className='container'>
       <MyNavbar /> {/* Use the alias MyNavbar */}
       <SearchButton />
      <h1>Welcome to the Home Page</h1>
      <div>

      </div>
      
      {/* Additional content for your home page */}
    </div>
  );
}

