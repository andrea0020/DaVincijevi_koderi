import { Navbar } from "../navbar/Navbar";
import { LoginForm } from "./LoginForm";
import './Login.css'

export function LoginPage() {
   return (
   <div className="login-container">
      <Navbar />
      <LoginForm />
   </div>
   )
}