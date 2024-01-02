import { useEffect, useState } from "react";
import { VITE_API_URL } from "../../utils/constants"

export function AdminForm() {
   const [users, setUsers] = useState([]);
   const [showUsers, setShowUsers] = useState(false);

   useEffect(() => {
      if (showUsers) {
         fetchUsers();
      }
   }, [showUsers]);

   const fetchUsers = async () => {
      const response = await fetch(VITE_API_URL + "/users");
      const data = await response.json();
      console.log(data)
      setUsers(data);
   }

   const handleApprove = async (userId) => {
      const response = await fetch(`${VITE_API_URL}/users/${userId}/approve`, {
         method: "post"
      });
      if (response.ok) {
         fetchUsers();
      } else {
         console.error("Failed to approve a user")
      }
   };

   /*
   const handleDelete = async (userId) => {
      const response = await fetch(`${VITE_API_URL}/users/${userId}`, 
      {
         method: "delete"
      });
      if (response.ok) {
         fetchUsers();
       } else {
         console.error("Failed to delete user");
       }
   }*/

   const handleToggleUsers = () => {
      setShowUsers((prevShowUsers) => !prevShowUsers);
    };

   return (
      <div>
         <button onClick={handleToggleUsers} style={{marginBottom: '10px', marginTop: '20px'}}>
            {showUsers ? "Sakrij registrirane korisnike" : "Prikaži registrirane korisnike"}
         </button>
         {showUsers && (
            <>
               <h2 style={{marginTop: '10px', marginLeft: '10px'}} >Registrirani korisnici</h2>
               <ul style={{ marginTop: '10px', marginLeft: '20px'}}>
                  {users.map((user) => (
                     <div key={user.id}>
                        <span>
                           {user.naziv} -
                        </span>
                        { user.odobren === false ? (
                           <button key={user.id} onClick={() => handleApprove(user.id)} style={{ marginTop: '20px' }} >Odobri</button> ) : 
                           <span style={{ border: '1px solid #ccc', padding: '1px', borderRadius: '1px', marginLeft: '10px', borderColor: 'gray', fontSize: '13px' }} >odobren</span> 
                        }
                     </div>
                  ))}
               </ul>
            </>
         )}
      </div>
   )
}

