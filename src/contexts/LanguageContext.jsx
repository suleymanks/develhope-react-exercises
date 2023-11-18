import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    
    const handleLanguageChange = (e) => setLanguage(e.target.value)

    return (
        <LanguageContext.Provider value={{language, setLanguage, handleLanguageChange}}>
            {children}
        </LanguageContext.Provider>
    )
}