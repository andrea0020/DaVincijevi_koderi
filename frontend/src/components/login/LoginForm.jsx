import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants"
import { Link } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted", username, password)

    const loginDto = {
      username: username,
      password: password
    }

    const response = await fetch(VITE_API_URL + "/login", {
      method: "post",
      body: JSON.stringify(loginDto),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
      const role = data.role; // "Admin" or "User"
      if (role === "Admin") {
        localStorage.setItem("userType", "admin");
        localStorage.setItem("isLoggedIn", true); 
        navigate("/admin")
      } else {
        const userId = data.korisnikId;
        console.log(userId)
        localStorage.setItem("userId", userId);
        if (data.odobren === true) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userType", role);
          navigate("/user")
        } else {
          alert('Potrebno je sačekati odobrenje registracije od strane admina');
        }
      }
    } else {
      alert('Niste se registrirali ili su podaci netočni.');
      console.log("Invalid username or password")
    }
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} style={{ fontSize: '11px' }}/>
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ fontSize: '11px' }} />
        </div>
        <button type="submit" >Login</button>
        <p className="signup-link">Don't have an account? <Link to="/register">Sign up</Link></p>
    </form>

      </div>
  )
}
