import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import '../OnClassLogin.css';

const OnClassLogin = () => {
    return (
        <div className="LoginScreen">
            <Navbar/>
            <Welcome/>
            <Footer/>
        </div>
    )
}

export default OnClassLogin