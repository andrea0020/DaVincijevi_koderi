import { useState } from 'react';


export function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", username, password)
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
    </form>

      </div>
  )
}
