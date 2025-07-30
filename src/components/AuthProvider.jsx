
import React, {   useEffect, useState } from "react";
import {

  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
 
} from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "../pages/authentication/AuthContext";
 


const googleProvider=new GoogleAuthProvider()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  // Register new user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //goole
  const signInWithGoogle = () => {
    return signInWithPopup(auth,googleProvider)
  }

  // Login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    register,
    login,
    logout,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>
      { children}
    </AuthContext.Provider>
  );
};
