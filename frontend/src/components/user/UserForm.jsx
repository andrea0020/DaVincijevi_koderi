import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants"

export function UserForm() {

   const navigate = useNavigate()

   const [user, setUser] = useState([]);
   const [showUser, setShowUser] = useState(false);
   const [books, setBooks] = useState([]);
   const [showBook, setShowBook] = useState(false);
   const [offers, setOffers] = useState([]);
   const [showOffers, setShowOffers] = useState(false);

   const buttonStyle = {
      position: 'fixed',
      top: '70px',
      right: '40px',
      margin: '10px', // Adjust margin as needed
      borderRadius: '8px'
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

   const handleDeleteBook = async (bookId) => {
      const response = await fetch(`${VITE_API_URL}/book/${bookId}`, 
      {
         method: "delete"
      });
      if (response.ok) {
         await fetchBooks();
       } else {
         console.error("Failed to delete a book");
       }
   }

   const fetchOffersByUser = async () => {
      const userId = localStorage.getItem("userId");
      const response = await fetch(`${VITE_API_URL}/offer/users/${userId}`);
      const data = await response.json();
      console.log(data)
      setOffers(data);
   }


   const handleDeleteOffer = async (bookId, offerId) => {
      const response = await fetch(`${VITE_API_URL}/book/${bookId}/offer/${offerId}`, 
      {
         method: "delete"
      });
      if (response.ok) {
         fetchOffersByUser();
       } else {
         console.error("Failed to delete an offer");
       }
   }


   const handleToggleUser = () => {
      setShowUser((prevShowUser) => !prevShowUser);
   };

   const handleToggleBook = () => {
      setShowBook((prevShowBook) => !prevShowBook);
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
         <button onClick={handleToggleUser} style={{marginBottom: '10px', marginTop: '10px', marginLeft: '10px', borderRadius: '8px'}}>
            {showUser ? "Sakrij moje podatke" : "Prikaži moje podatke"}
         </button>
         </h2>
         {showUser && (
            <div>
               <ul style={{ marginTop: '10px', marginLeft: '20px'}} >
               <span>
                  <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                     Naziv: 
                     </span>{" "}
                     {user.naziv}
               </span>
               <span>
                  <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                     Korisničko ime: 
                     </span>{" "}
                     {user.username}
               </span>
               <span>
                  <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                     Adresa: 
                     </span>{" "}
                     {user.adresa}
               </span>
               <span>
                  <span style={{fontWeight: 'bold',  marginLeft: '10px', textDecoration: 'underline'}}>
                     Email: 
                     </span>{" "}
                     {user.email}
               </span>
               <span>
                  <span style={{fontWeight: 'bold',  marginLeft: '10px', textDecoration: 'underline'}}>
                     Telefon: 
                     </span>{" "}
                     {user.telefon}
               </span>
               </ul>
            </div>
         )}

         <h2 style={{marginTop: '10px', marginLeft: '10px'}} >Sve knjige
            <button onClick={handleToggleBook} style={{marginBottom: '10px', marginTop: '10px', marginLeft: '10px', backgroundColor: 'rgba(180, 140, 180, 1)', borderRadius: '8px'}}>
            {showBook ? "Sakrij sve podatke" : "Prikaži sve podatke"}
            </button>
         </h2>
         <ul style={{ marginTop: '10px', marginLeft: '20px'}} >
            {books.map((book) => (
               <div key={book.id}>
                     <img
                        src={book.slikaURL}
                        style={{ maxWidth: "60px", maxHeight: "60px", marginRight: '10px'}}
                     />
                  <span>
                     <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                        Naziv: 
                     </span>{" "}
                     {book.naziv}
                     {showBook && (
                        <>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Autor: 
                           </span>{" "}
                           {book.autor}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Izdavač: 
                           </span>{" "}
                           {book.izdavac}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Kategorija izdavača: 
                           </span>{" "}
                           {book.kategorija}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Žanr: 
                           </span>{" "}
                           {book.zanr}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Opis: 
                           </span>{" "}
                           {book.opis}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Oznaka: 
                           </span>{" "}
                           {book.oznaka}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Stanje očuvanosti: 
                           </span>{" "}
                           {book.stanjeOcuvanosti}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Godina izdanja:
                           </span>{" "}
                           {book.godIzdanja}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Broj izdanja: 
                           </span>{" "}
                           {book.brojIzdanja}
                        </span>
                        <span>
                           <span style={{fontWeight: 'bold', marginLeft: '10px', textDecoration: 'underline'}}>
                              Broj zahtjeva za prijevod: 
                           </span>{" "}
                           {book.zahtjevi}
                        </span>
                        </>
                     )}
                     <span>
                        <button type="button" style={{backgroundColor: 'rgba(150, 150, 200, 1)', borderRadius: '8px', marginLeft: '10px', marginBottom: '10px'}} onClick={() => navigate(`/book/${book.id}/offer`)}>
                           Dodaj ponudu
                        </button>
                     </span>
                  </span>
               </div>
            ))}
         </ul>

         <h2 style={{marginTop: '10px', marginLeft: '10px'}} >Moje ponude 
         <button onClick={handleToggleOffers} style={{marginBottom: '10px', marginTop: '20px', marginLeft: '10px', borderRadius: '8px'}}>
            {showOffers ? "Sakrij moje ponude" : "Prikaži moje ponude"}
         </button></h2>
         
         {showOffers && (
            <>
         <ul style={{ marginTop: '10px', marginLeft: '20px'}}>
            {offers.map((offer) => (
               <div key={offer.id} style={{ marginBottom: '10px'}}>
                  <span>
                     <span style={{fontWeight: 'bold',textDecoration: 'underline'}}>
                        Naziv knjige:
                     </span>{" "}
                     {offer.knjiga.naziv}
                  </span>
                  <span style={{ marginLeft: '10px' }}>
                     <span style={{fontWeight: 'bold', textDecoration: 'underline' }}>
                           Cijena:
                        </span>{" "}
                        {offer.cijena}
                  </span>
                  <span style={{ marginLeft: '10px'}}>
                     <span style={{fontWeight: 'bold',textDecoration: 'underline'}}>
                        Broj primjeraka:
                     </span>{" "}
                     {offer.brojPrimjeraka}
                  </span>
               </div>
            ))}
         </ul>
         </>
         )}

      </div>
   )
}

