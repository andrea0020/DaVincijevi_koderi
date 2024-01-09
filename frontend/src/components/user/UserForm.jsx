import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants"

export function UserForm() {

   const navigate = useNavigate()

   const [user, setUser] = useState([]);
   const [showUser, setShowUser] = useState(false);
   const [books, setBooks] = useState([]);
   const [offers, setOffers] = useState([]);
   const [showOffers, setShowOffers] = useState(false);

   const buttonStyle = {
      position: 'fixed',
      top: '70px',
      right: '40px',
      margin: '10px', // Adjust margin as needed
    };

   useEffect(() => {
      fetchUser();
      fetchBooks();
      fetchOffersByUser();
   }, []);

   
   const fetchUser = async () => {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`${VITE_API_URL}/users/${userId}`);
      const data = await response.json();
      console.log(data)
      setUser(data);
   }

   const fetchBooks = async () => {
      const response = await fetch(`${VITE_API_URL}/book`);
      const data = await response.json();
      console.log(data);
      setBooks(data);
   }

/*
   const handleDeleteBook = async (bookId) => {
      const response = await fetch(`${VITE_API_URL}/book/${bookId}`, 
      {
         method: "delete"
      });
      if (response.ok) {
         fetchBooks();
       } else {
         console.error("Failed to delete a book");
       }
   }*/

   const fetchOffersByUser = async () => {
      const userId = localStorage.getItem("userId");
      const response = await fetch(`${VITE_API_URL}/offer/users/${userId}`);
      const data = await response.json();
      console.log(data)
      setOffers(data);
   }

/*
   const handleDeleteOffer = async (bookId, offerId) => {
      const response = await fetch(`${VITE_API_URL}/book/${bookId}/offer/${offerId}`, 
      {
         method: "delete"
      });
      if (response.ok) {
         fetchOffersForBook(bookId);
       } else {
         console.error("Failed to delete an offer");
       }
   }*/



   const handleToggleUser = () => {
      setShowUser((prevShowUser) => !prevShowUser);
   };

   const handleToggleOffers = () => {
      setShowOffers((prevShowOffers) => !prevShowOffers);
    };

   return(
      <div>
         <button type="button" onClick={() => navigate("/book")} style={buttonStyle} >
            Dodaj novu knjigu
         </button>

         <h2 style={{ marginLeft: '10px'}} >Moji podaci 
         <button onClick={handleToggleUser} style={{marginBottom: '10px', marginTop: '10px', marginLeft: '10px'}}>
            {showUser ? "Sakrij moje podatke" : "Prikaži moje podatke"}
         </button>
         </h2>
         {showUser && (
            <div>
               Naziv: {user.naziv} 
            </div>
         )}


         <h2 style={{marginTop: '10px', marginLeft: '10px'}} >Sve knjige</h2>
         <ul style={{ marginTop: '10px', marginLeft: '20px'}}>
            {books.map((book) => (
               <div key={book.id}>
                  <span>
                     Naziv: {book.naziv}
                  </span>
                  <span>
                     <button type="button" onClick={() => navigate(`/book/${book.id}/offer`)}>
                        Dodaj ponudu
                     </button>
                  </span>
               </div>
            ))}
         </ul>

         <h2 style={{marginTop: '10px', marginLeft: '10px'}} >Moje ponude 
         <button onClick={handleToggleOffers} style={{marginBottom: '10px', marginTop: '20px', marginLeft: '10px'}}>
            {showOffers ? "Sakrij moje ponude" : "Prikaži moje ponude"}
         </button></h2>
         
         {showOffers && (
            <>
         <ul style={{ marginTop: '10px', marginLeft: '20px'}}>
            {offers.map((offer) => (
               <div key={offer.id}>
                  <span>
                     Naziv knjige: {offer.knjiga.naziv}
                  </span>
                  <span>
                     Cijena : {offer.cijena}
                  </span>
                  <span>
                     Broj primjeraka : {offer.brojPrimjeraka}
                  </span>
               </div>
            ))}
         </ul>
         </>
         )}

      </div>
   )
}

