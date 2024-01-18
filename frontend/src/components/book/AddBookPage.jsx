import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants";

const options = [
    { value: 'strani+nemaIzdanja', name: "strani jezik - nema izdanja na hrvatskom ili srodnom"},
    { value: 'hrv+dobavljiva', name: "hrvatski jezik - dobavljiva u RH"},
    { value: 'hrv+nijeDobavljiva', name: "hrvatski jezik - nije dobavljiva u RH"},
    { value: 'srodni+DobavljivaTamo', name: "srodni jezik - dobavljiva na tom tržištu"},
    { value: 'srodni+Dobavljiva+nemaIzdanja', name: "srodni jezik - dobavljiva u RH - nema izdanja"}
 ]

 const options1 = [
    { value: 'domaći', name: "domaći" },
    { value: 'strani', name: "strani" }
 ]

 const options2 = [
    { value: 'izvrsno', name: "izvrsno" },
    { value: 'dobro', name: "dobro" },
    { value: 'loše', name: "loše" }
 ]

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
         <h1 style={{ color: 'gray' }}>Dodaj novu knjigu</h1>
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
            <input type="text" id="izdavac" name="izdavac" required placeholder='Izdavač' value={izdavac} onChange={(e) => setIzdavac(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <div className="input-group">
            <label htmlFor="kategorija">Kategorija izdavača</label>
            <select id="kategorija" name="kategorija" value={kategorija} onChange={(e) => setKategorija(e.target.value)}>
                {options1.map(option => (
                  <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select >
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
            <select id="oznaka" name="oznaka" value={oznaka} onChange={(e) => setOznaka(e.target.value)}>
                {options.map(option => (
                  <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select >
        </div>
        <div className="input-group">
            <label htmlFor="stanjeOcuvanosti">Stanje očuvanosti</label>
            <select id="stanjeOcuvanosti" name="stanjeOcuvanosti" value={stanjeOcuvanosti} onChange={(e) => setStanjeOcuvanosti(e.target.value)}>
                {options2.map(option => (
                  <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select >
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
            <input type="text" id="isbn" name="isbn" required placeholder='ISBN' value={isbn} onChange={(e) => setIsbn(e.target.value)} style={{ fontSize: '11px' }} />
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