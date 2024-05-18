import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { LanguageContext } from "./LanguageContext";

const Welcome = () => {
  const { username: authUserName, login } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const [username, setUsername] = useState("");
  const isLoggedIn = authUserName !== null;
  const handleChange = (e) => {
    const currentInputValue = e.target.value;
    setUsername(currentInputValue);
  };
  const handleClick = () => {
    login(username);
  };
  const getWelcomeMessage=()=>{
    if (language==='en') return "Welcome";
    else if (language==='vi') return "Xin chào";
    else if (language==='fr') return "Bonjour";
    else if (language==='es') return "Hola";
  }
  return (
    <>
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Login Form</h2>
          <input
            type="text"
            placeholder="Username. . ."
            value={username}
            onChange={handleChange}
          />
          <button className="login-btn" onClick={handleClick}>
            Submit
          </button>
        </div>
      ) : (
        <h1>{getWelcomeMessage()} {authUserName}</h1>
      )}
    </>
  );
};

export default Welcome;
