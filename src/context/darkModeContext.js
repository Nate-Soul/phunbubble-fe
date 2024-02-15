"use client";

import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
    
    const [darkMode, setDarkMode] = useState(
        () => {
            if(typeof window !== "undefined"){
                const storedTheme = window.localStorage.getItem("theme");
                return storedTheme !== null ? storedTheme : 
                    window.matchMedia("(prefered-color-scheme: dark)").matches ? "true" : "false";
            } else {
                return "false";
            }
        }
    );

    const toggleThemeMode = () => {
        setDarkMode((prev) => !prev);
    }

    useEffect(()=>  {
        if(typeof window !== "undefined"){
            localStorage.setItem("darkMode", darkMode);
        }
    }, [darkMode])

    return (
    <DarkModeContext.Provider value={{darkMode, toggleThemeMode}}>
        {children}
    </DarkModeContext.Provider>
    );
}