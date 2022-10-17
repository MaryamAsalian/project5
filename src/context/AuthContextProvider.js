import { createContext, useEffect,useState } from "react";
import {useHistory } from 'react-router-dom';
import { auth } from "../firebase";

import React from 'react';

export const AuthContext =createContext();
const AuthContextProvider = ({children}) => {
    const[ loading ,setloading] = useState (true);
    const[user,setuser]= useState(false);
    const history =useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setuser(user);
            setloading(false);
            if (user)history.push("/Chats");
        })
    },[user,history])
    return (
       <AuthContext.Provider value={user}>
        {!loading && children}
       </AuthContext.Provider>
    );
};

export default AuthContextProvider;