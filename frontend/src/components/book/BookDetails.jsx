import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VITE_API_URL } from "../../utils/constants"
import { Navbar } from '../navbar/Navbar'
import { SingleBook } from './SingleBook';

export function BookDetails() {
  const [podaci, setPodaci] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const currentUrl = window.location.href
    const url = new URL(currentUrl);
    const bookId = url.pathname.split('/').pop();
    
    try {
      const response = await axios.get(`${VITE_API_URL}/book/${bookId}`);
      setPodaci(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='BookDetails'>
      <Navbar />
      <SingleBook podaci = {podaci}/>
    </div>
  );
}