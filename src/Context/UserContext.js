import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const authContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  // sign in with google
  const googleSign = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // sign In with Email and Password

  const makePeople = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Log In

  const handleLog = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // verifyEmail

  const varifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  // update USer Data

  const updatePeople = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // get user data

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleSign,
    handleSignOut,
    makePeople,
    handleLog,
    varifyEmail,
    loading,
    updatePeople,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default UserContext;
