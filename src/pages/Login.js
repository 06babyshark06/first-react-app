import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userInfo = `${userName}: ${password}`;
    localStorage.setItem("userInfo", userInfo);
    navigate("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
        <br/>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
