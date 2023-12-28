import { Navbar } from "../navbar/Navbar";
import { RegisterForm } from "./RegisterForm";
import './Register.css'

export function RegisterPage() {
   return (
      <div className="register-container">
         <Navbar/>
         <RegisterForm/>
      </div>
   )
}