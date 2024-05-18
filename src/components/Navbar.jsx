import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const NavBar = () => {
    const {username} = useContext(AuthContext);
    const isLoggedIn=username!==null;
    return (
        <nav className="navbar">
            <div className="mindx-label">Mindx</div>
            {!isLoggedIn&&<button className="login-btn">Login</button>}
        </nav>
    )
}

export default NavBar