import { Navbar } from "../navbar/Navbar";
import { UserForm } from "./UserForm";

export function UserPage() {
   return (
      <div className="container">
         <Navbar />
         <UserForm />
   </div>
   )
}