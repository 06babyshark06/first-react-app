import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Footer = () => {
    const {language, changeLanguage} = useContext(LanguageContext);
    const handleChange = (e) => {
        const newLanguage = e.target.value;
        changeLanguage(newLanguage);
    }
    return (
        <footer className="footer">
            <select
                value={language}
                onChange={handleChange}
            >
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
            </select>
        </footer>
    )
}

export default Footer