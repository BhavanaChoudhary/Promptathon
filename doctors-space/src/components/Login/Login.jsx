import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQT9GmaImyfSx1G9UgF1XNaSHCmKHbdeU",
  authDomain: "mediasphere-c5eb9.firebaseapp.com",
  projectId: "mediasphere-c5eb9",
  storageBucket: "mediasphere-c5eb9.firebasestorage.app",
  messagingSenderId: "1012115005983",
  appId: "1:1012115005983:web:ce7f2d9c41f5722baeeb2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Success! Welcome back!");
      onClose(); // Close modal on success
    } catch (error) {
      alert("Error occurred. Try again.");
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign up successful! You can now log in.");
      setIsSignUp(false); // Switch back to login mode
    } catch (error) {
      alert("Error occurred during sign up. Try again.");
    }
  };

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`login-modal ${isOpen ? "open" : ""}`} onClick={handleClose}>
      <div className="login-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>✖</button>
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <input type="text" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={isSignUp ? handleSignUp : handleLogin}>
          {isSignUp ? "Sign Up" : "Login"}
        </button>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}  
          <span onClick={() => setIsSignUp(!isSignUp)} className="switch-link">
            {isSignUp ? " Login" : " Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
