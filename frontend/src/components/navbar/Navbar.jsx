import { Link } from "react-router-dom";
import SearchButton from '../SearchButton/SearchButton';
import '../SearchButton/SearchButton.css';

export function Navbar() {
   return (
      <div className="navbar">
         <img src="/images/logo.png" className="logo" alt="" style={{ marginLeft: '25px' }}/>
        <div>
            <SearchButton/>
        </div>
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