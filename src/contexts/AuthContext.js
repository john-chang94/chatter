import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const useGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((res) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;

        // The signed-in user info.
        // console.log(res.user);
        // console.log(token);
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
        navigate("/chats");
      } else {
        setIsLoading(false);
        navigate("/");
      }
    });
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={{ user, useGoogle }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
