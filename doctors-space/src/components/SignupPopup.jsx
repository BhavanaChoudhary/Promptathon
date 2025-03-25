import React, { useState } from 'react';
import './SignupPopup.css'; // Create a CSS file for styling

const SignupPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle signup logic here (e.g., save to local state or send to an API)
    alert(`Signup successful for ${name}`);
    onClose(); // Close the popup after signup
  };

  if (!isOpen) return null;

  return (
    <div className="signup-modal" onClick={onClose}>
      <div className="signup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="signup-btn" onClick={handleSignup}>Create Account</button>
      </div>
    </div>
  );
};

export default SignupPopup;
