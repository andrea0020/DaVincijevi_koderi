import { Navbar } from "../navbar/Navbar";
import { AdminForm } from "./AdminForm";

export function AdminPage() {
   return (
      <div className="container">
         <Navbar />
         <AdminForm />
   </div>
   )
}