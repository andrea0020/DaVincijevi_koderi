import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants";

export function AddOfferPage() {

   const navigate = useNavigate()

   const { bookId } = useParams();

   const [cijena, setCijena] = useState(0);
   const [brojPrimjeraka, setBrojPrimjeraka] = useState(0);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const userId = localStorage.getItem("userId");
      const offerDto = {
         ponuditeljId: parseInt(userId),
         knjigaId: parseInt(bookId),
         brojPrimjeraka: brojPrimjeraka,
         cijena: cijena
      };

      const response = await fetch(`${VITE_API_URL}/offer`, 
         {
            method: "post",
            body: JSON.stringify(offerDto),
            headers: {
               "Content-Type": "application/json"
            }
         }
      )

      if (response.status === 201) {
         navigate("/user")
      } else {
         console.log("Failed to create an offer")
      }

   }

   return (
      <div>
         <h1>Dodaj novu ponudu</h1>
         <form onSubmit={handleSubmit}>
        <div className="input-group">
            <label htmlFor="cijena">Cijena</label>
            <input type="number" min={0} max={1000} id="cijena" name="cijena" required placeholder='Cijena' value={cijena} onChange={(e) => setCijena(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="brojPrimjeraka">Broj primjeraka</label>
            <input type="number" min={0} max={1000} id="brojPrimjeraka" name="brojPrimjeraka" required placeholder='Broj primjeraka' value={brojPrimjeraka} onChange={(e) => setBrojPrimjeraka(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <button type="submit" >Dodaj</button>
    </form>
      </div>
   )
}