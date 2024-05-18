import { useState } from "react";

const FormPassword = (props) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handlePasswordChange = (event) => {
        setError("");
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 3) {
            setError("Password must be at least 3 characters");
        } else console.log("Successfully");
    }
  return (
    <>
        <h1>Password Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
                {error && <p></p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
  );
};
export default FormPassword;
