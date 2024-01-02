import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name) => {
        const profile = {
            displayName: name
        }
        return updateProfile(auth.currentUser, profile)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
            if (currentUser && currentUser?.email) {
                const loggedUser = {
                    email: currentUser.email
                }
                fetch('https://genius-car-server-lilac-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //warning: local storage is not best to store access token
                        localStorage.setItem('car-access-token', data.token);

                    })
            }
            else {

                localStorage.removeItem('car-access-token')
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        updateName,
        googleSignIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;