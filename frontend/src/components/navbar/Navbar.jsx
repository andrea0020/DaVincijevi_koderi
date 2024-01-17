import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const initialLoginState = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(initialLoginState);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userType");
        localStorage.removeItem("userId");
        navigate("/");
    }

   return (
    <div className={"navbar"}>
         <img src="/images/logo.png" className="logo" alt="" style={{ marginLeft: '25px' }}/>
      <nav>
            <ul>
                
                {isLoggedIn ? (
                    <>
                    <li><Link to="/user">HOME</Link></li>
                    <li><span onClick={handleLogout} style={{cursor:"pointer"}}>Odjava</span></li>
                    </>
                ):(
                    <>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/register">REGISTER</Link></li>
                    </>
                )}
                
            </ul>
        </nav>
        <button className="hamburger " >
            <div className="bar"></div>
        </button>
   </div>
   )
}