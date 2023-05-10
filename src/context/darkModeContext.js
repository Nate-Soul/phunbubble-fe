'use client';

import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
    
    const [darkMode, setDarkMode] = useState(
        //localStorage.getItem("darkMode") || 
        false
    );

    const toggleThemeMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(()=>  {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode])

    return (
    <DarkModeContext.Provider value={{darkMode, toggleThemeMode}}>
        {children}
    </DarkModeContext.Provider>
    );
}