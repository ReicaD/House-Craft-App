import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick = async () => {
    //authenicating the user if their signed in or out
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //checking if the user already exist by passing in the user-id and docRef
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //if User, doesnt exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("404 could not authorise with goolge");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign{location.pathname === "sign-up" ? "up" : "in"}with</p>
      <button className="socialIconDiv " onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="goolge" />
      </button>
    </div>
  );
}

export default OAuth;
