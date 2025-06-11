import React from 'react';
import { AuthContext } from './AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const CreateUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {
    CreateUser,
    SignInUser,

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;