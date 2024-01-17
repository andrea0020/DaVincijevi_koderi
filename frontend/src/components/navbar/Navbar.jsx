import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../../utils/constants"

export function Navbar() {

    const navigate = useNavigate()

    const [user, setUser] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        const userId = localStorage.getItem("userId")
        const response = await fetch(`${VITE_API_URL}/users/${userId}`);
        const data = await response.json();
        console.log(data);
        setIsLoggedIn(data.prijavljen);
        setUser(data);
     }

     const handleLogout = async () => {
        const userId = localStorage.getItem("userId");
        const response = await fetch(`${VITE_API_URL}/logout`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userId),
        });

        if (response.ok) {
            setIsLoggedIn(false);
            fetchUser();
            console.log("Logout successful");
            navigate("/")
        } else {
            console.error("Logout failed");
            alert('Logout failed')
        }
    };

    const buttonStyle = {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "rgb(240, 190, 160)",
        padding: "0",
        fontSize: "1.3em",
      };
    

   return (
    <div className={"navbar"}>
         <img src="/images/logo.png" className="logo" alt="" style={{ marginLeft: '25px' }}/>
      <nav>
            <ul>
                { isLoggedIn ? (
                    //<li><Link to="/" onClick={handleLogout}>LOGOUT</Link></li>
                    <button style={buttonStyle} onClick={handleLogout}> LOGOUT </button>
                ) : (
                    <>
                    <li><Link to="/search">SEARCH</Link></li>
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