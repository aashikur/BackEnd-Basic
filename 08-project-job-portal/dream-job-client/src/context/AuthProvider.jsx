import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup



} from "firebase/auth";
import auth from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Check if User is Logged in -> Even after ReFresh 
    onAuthStateChanged(auth, (Current) => {
        if (Current) {
            setUser(Current)
        } else {
            setUser(null);
        }
    });

    // Create New user 
    const Register_with_email = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login user 
    const Login_with_email = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const Sign_in_with_google = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true);
        
        return signInWithPopup(auth, provider);
    }

    // Sign Out User 
    const Log_out = () => {
        signOut(auth).then(() => {
            alert('Sign Out Successfully');
        }).catch((error) => {
            alert('Sign Out Failed')
            console.log('Fail Logout : ', error);
        });
    }

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        Register_with_email,
        Log_out,
        Login_with_email,
        Sign_in_with_google,
        
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;