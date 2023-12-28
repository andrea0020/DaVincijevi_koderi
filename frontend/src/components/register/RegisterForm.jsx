import { useState } from "react"
import { useNavigate } from "react-router-dom";

const options = [
   { value: 'antikvarijat', name: "Antikvarijat"},
   { value: 'preprodavac', name: "Preprodavač"},
   { value: 'izdavac', name: "Izdavač"}
]

export function RegisterForm() {

    const navigate = useNavigate()

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const [address, setAddress] = useState('');
   const [telephone, setTelephone] = useState('');
   const [email, setEmail] = useState('');
   const [type, setType] = useState(options[0].value);

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Submitted")
      console.log(name, address, telephone, email, type)

    const registerDto = {
        sifra: password,
        username: username,
        naziv: name, 
        adresa: address, 
        epošta: email,
        telefon: telephone,
        tip: type
    }

    const response = await fetch("http://localhost:8080/register", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerDto)
    })

    if (response.status === 201) {
        navigate("/login")
    } else {
        console.log("Failed to register")
    }

   }

   return (
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="input-group">
            <label htmlFor="username">username</label>
            <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-group">
            <label htmlFor="password">šifra</label>
            <input type="text" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
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