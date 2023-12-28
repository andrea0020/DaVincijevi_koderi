import { Link } from "react-router-dom";

export function Navbar() {
   return (
      <div className="navbar">
         <img src="/images/logo.png" className="logo" alt=""/>
      <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><Link to="/register">REGISTER</Link></li>
            </ul>
        </nav>
        <button className="hamburger " >
            <div className="bar"></div>
        </button>
   </div>
   )
}