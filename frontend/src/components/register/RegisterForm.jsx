import { useState } from "react"

const options = [
   { value: 'antikvarijat', name: "Antikvarijat"},
   { value: 'preprodavac', name: "Preprodavač"},
   { value: 'izdavac', name: "Izdavač"}
]

export function RegisterForm() {

   const [name, setName] = useState('');
   const [address, setAddress] = useState('');
   const [telephone, setTelephone] = useState('');
   const [email, setEmail] = useState('');
   const [type, setType] = useState(options[0].value);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted")
      console.log(name, address, telephone, email, type)
   }

   return (
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="input-group">
            <label htmlFor="naziv">naziv</label>
            <input type="text" id="naziv" name="naziv" required value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="input-group">
            <label htmlFor="adresa">adresa</label>
            <input type="text" id="adresa" name="adresa" required value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="input-group">
            <label htmlFor="telefon">telefon</label>
            <input type="text" id="telefon" name="telefon" required value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
        </div>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-group">
            <label htmlFor="tip">Odaberi tip ponuditelja</label>
            <select id="tip" name="tip" value={type} onChange={(e) => setType(e.target.value)}>
                {options.map(option => (
                  <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select >
        </div>

        <button type="submit">Register</button>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
    </form>
   )
}