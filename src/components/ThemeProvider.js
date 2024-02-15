"use client";

import { useEffect, useState } from "react";

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme !== null ? storedTheme : 
            window.matchMedia("(prefered-color-scheme: dark)").matches ? 'dark' : 'light';
    });

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme])


  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
        {children}
    </div>
  )
}

export default ThemeProvider
