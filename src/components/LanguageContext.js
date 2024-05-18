import { createContext, useState } from "react";

export const LanguageContext = createContext('en');
const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en');
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage); 
    }
    return (
        <LanguageContext.Provider value={{language,changeLanguage}}>{children}</LanguageContext.Provider>
    )
}
export default LanguageProvider;