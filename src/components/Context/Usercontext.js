import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
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

  const authList = { user,auth , signupemailpass, loginemaipass };
  return (
    <AuthContext.Provider value={authList}>{children}</AuthContext.Provider>
  );
};

export default Usercontext;
