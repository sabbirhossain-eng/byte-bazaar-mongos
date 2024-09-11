import { createContext } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;