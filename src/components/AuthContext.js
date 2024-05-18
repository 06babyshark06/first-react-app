import { createContext, useState } from "react";

const defaultValues = {
  username: null,
};
export const AuthContext = createContext(defaultValues);
const AuthProvider = ({children}) => {
    const [username, setUsername] = useState(null);
    const login= (username)=> {
        setUsername(username);
    }
    return (
        <AuthContext.Provider value={{username,login}}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;