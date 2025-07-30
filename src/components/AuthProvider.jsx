// src/contexts/AuthProvider.jsx
import React, {   useEffect, useState } from "react";
import {

  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
 
} from "firebase/auth";
 // তোমার firebase config ফাইল থেকে
import { AuthContext } from "../pages/authentication/AuthContext";
import { auth } from "../firebase.init";





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
  };

  return (
    <AuthContext.Provider value={authInfo}>
      { children}
    </AuthContext.Provider>
  );
};
