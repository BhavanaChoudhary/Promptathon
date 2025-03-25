import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import "./Login.css";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQT9GmaImyfSx1G9UgF1XNaSHCmKHbdeU",
  authDomain: "mediasphere-c5eb9.firebaseapp.com",
  projectId: "mediasphere-c5eb9",
  storageBucket: "mediasphere-c5eb9.firebasestorage.app",
  messagingSenderId: "1012115005983",
  appId: "1:1012115005983:web:ce7f2d9c41f5722baeeb2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const Login = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          role: "Patient", // Default role for signup
        });

        alert("Sign up successful! You can now log in.");
        setIsSignUp(false);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Success! Welcome back!");
        onClose();
      }
    } catch (error) {
      alert(`Error occurred: ${error.message}. Please try again.`);

    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal" onClick={onClose}>
      <div className="login-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{isSignUp ? "Patient Sign Up" : "Sign In"}</h2>

        <div className="signup-container">
          <div className="signup-form">
            <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
            <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="6" />

            <button className="auth-btn" onClick={handleAuth}>{isSignUp ? "Create Account" : "Login"}</button>
          </div>
        </div>

        <p className="switch-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}  
          <span onClick={() => setIsSignUp(!isSignUp)} className="switch-link">
            {isSignUp ? " Login here" : " Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
