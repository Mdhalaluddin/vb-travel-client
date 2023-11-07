import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // google sing in
    const googleSingIn =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, createUser=>{
            console.log('cre', createUser);
            setUser(createUser)
            setLoading(false);
        })
        return () =>{  
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        loading,
        user,
        singIn,
        logOut,
        googleSingIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children: PropTypes.node
}


export default AuthProvider;