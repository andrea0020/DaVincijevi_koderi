import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants";

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

   const showAlert = () => {
    window.alert('Zahtjev za obradu registracije je uspješno poslan adminu');
  };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Submitted")
      console.log(name, address, telephone, email, type)

    const registerDto = {
        password: password,
        username: username,
        naziv: name, 
        adresa: address, 
        email: email,
        telefon: telephone,
        tip: type
    }

    const response = await fetch(VITE_API_URL + "/register", {
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
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="naziv">Naziv</label>
            <input type="text" id="naziv" name="naziv" required placeholder='Naziv' value={name} onChange={(e) => setName(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="adresa">Adresa</label>
            <input type="text" id="adresa" name="adresa" required placeholder='Adresa' value={address} onChange={(e) => setAddress(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="telefon">Telefon</label>
            <input type="text" id="telefon" name="telefon" required placeholder='Telefon' value={telephone} onChange={(e) => setTelephone(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="tip">Odaberi tip ponuditelja</label>
            <select id="tip" name="tip" value={type} onChange={(e) => setType(e.target.value)}>
                {options.map(option => (
                  <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select >
        </div>

        <button type="submit" onClick={showAlert}>Register</button>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
    </form>
   )
}