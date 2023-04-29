/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            console.log('logged in user inside auth state observer', loggedUser);
            setLoading(false)
        })
        return () => {
            unSubscribe() 
        }
    },[])

    const authInfo = {
        user,
        createUser,
        login,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;