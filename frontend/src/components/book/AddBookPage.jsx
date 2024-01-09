import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants";

export function AddBookPage() {

   const navigate = useNavigate()

   const { bookId } = useParams();

   const [naziv, setNaziv] = useState("");
   const [autor, setAutor] = useState("");
   const [izdavac, setIzdavac] = useState("");
   const [kategorija, setKategorija] = useState("");
   const [zanr, setZanr] = useState("");
   const [opis, setOpis] = useState("");
   const [oznaka, setOznaka] = useState("");
   const [stanjeOcuvanosti, setStanjeOcuvanosti] = useState("");
   const [slikaURL, setSlikaURL] = useState("");
   const [godIzdanja, setGodIzdanja] = useState(0);
   const [isbn, setIsbn] = useState(0);
   const [brojIzdanja, setBrojIzdanja] = useState(0);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const bookDto = {
         naziv: naziv,
         autor: autor, 
         izdavac: izdavac, 
         kategorija: kategorija, 
         zanr: zanr, 
         opis: opis, 
         oznaka: oznaka, 
         stanjeOcuvanosti: stanjeOcuvanosti, 
         slikaURL: slikaURL,
         godIzdanja: godIzdanja, 
         isbn: isbn, 
         brojIzdanja: brojIzdanja
      }

      const response = await fetch(VITE_API_URL + "/book", {
         method: "post",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(bookDto)
     })
 
     if (response.status === 201) {
         navigate("/user")
     } else {
         console.log("Failed to add a book")
     }

   }

   return (
      <div>
         <h1>Dodaj novu knjigu</h1>
         <form onSubmit={handleSubmit}>
        <div className="input-group">
            <label htmlFor="naziv">Naziv</label>
            <input type="text" id="naziv" name="naziv" required placeholder='Naziv' value={naziv} onChange={(e) => setNaziv(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="autor">Autor</label>
            <input type="text" id="autor" name="autor" required placeholder='Autor' value={autor} onChange={(e) => setAutor(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="izdavac">Izdavač</label>
            <input type="text" id="izdavac" name="izdavac" required placeholder='Izdavac' value={izdavac} onChange={(e) => setIzdavac(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="kategorija">Kategorija</label>
            <input type="text" id="kategorija" name="kategorija" required placeholder='Kategorija' value={kategorija} onChange={(e) => setKategorija(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="zanr">Žanr</label>
            <input type="text" id="zanr" name="zanr" required placeholder='Žanr' value={zanr} onChange={(e) => setZanr(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="opis">Opis</label>
            <input type="text" id="opis" name="opis" required placeholder='Opis' value={opis} onChange={(e) => setOpis(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="oznaka">Oznaka</label>
            <input type="text" id="oznaka" name="oznaka" required placeholder='Oznaka' value={oznaka} onChange={(e) => setOznaka(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="stanjeOcuvanosti">Stanje očuvanosti</label>
            <input type="text" id="stanjeOcuvanosti" name="stanjeOcuvanosti" required placeholder='Stanje očuvanosti' value={stanjeOcuvanosti} onChange={(e) => setStanjeOcuvanosti(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="slikaURL">Slika</label>
            <input type="text" id="slikaURL" name="slikaURL" required placeholder='Slika (URL)' value={slikaURL} onChange={(e) => setSlikaURL(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="godIzdanja">Godina izdanja</label>
            <input type="text" id="godIzdanja" name="godIzdanja" required placeholder='Godina izdanja' value={godIzdanja} onChange={(e) => setGodIzdanja(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="isbn">ISBN</label>
            <input type="text" id="isbn" name="isbn" required placeholder='ISBN' value={isbn} onChange={(e) => setOznaka(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="brojIzdanja">Broj izdanja</label>
            <input type="text" id="brojIzdanja" name="brojIzdanja" required placeholder='Broj izdanja' value={brojIzdanja} onChange={(e) => setBrojIzdanja(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <button type="submit" >Dodaj</button>
    </form>
      </div>
   )
}