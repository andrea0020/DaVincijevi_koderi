import { Navbar } from "../navbar/Navbar";
import { AddOfferPage } from "./AddOfferPage";
import './OfferPage.css'

export function OfferPage() {
   return (
      <div className="login-container">
         <Navbar/>
         <AddOfferPage />
      </div>
   )
}