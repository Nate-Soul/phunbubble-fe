'use client';

import { createContext, useEffect, useState } from "react";
import profilePic1 from "../assets/images/profiles/me.png";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        //JSON.parse(localStorage.getItem("currentUser")) || 
        {});

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "Nate Soul",
            profilePic: profilePic1
        });
    }

   useEffect(()=>login(),[]);

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
    <AuthContext.Provider value={{currentUser, login}}>
        {children}
    </AuthContext.Provider>
    );
}