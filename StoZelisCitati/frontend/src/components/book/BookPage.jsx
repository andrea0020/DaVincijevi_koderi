import { Navbar } from "../navbar/Navbar";
import { AddBookPage } from "./AddBookPage";
import './BookPage.css'

export function BookPage() {
   return (
      <div className="register-container">
         <Navbar/>
         <AddBookPage />
      </div>
   )
}