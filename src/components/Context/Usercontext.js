import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase";
export const AuthContext = createContext();

const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [user, setUser] = useState("Rahul");

  // email and password auth

  const signupemailpass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginemaipass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out

  const signoutfunc =()=>{
    return signOut(auth)
  }

  // google sign up
  const provider = new GoogleAuthProvider();
  const googlesignup =()=>{
    return signInWithPopup(auth ,provider)
  }

  //  get user information 
  useEffect(()=>{

    const unsubscrib = onAuthStateChanged(auth , (loguser)=>{
      setUser(loguser);
    })
    return ()=>{
      unsubscrib()
    }

  } , [])


  
  const authList = { user,auth , googlesignup , signupemailpass, loginemaipass , signoutfunc};
  return (
    <AuthContext.Provider value={authList}>{children}</AuthContext.Provider>
  );
};

export default Usercontext;
