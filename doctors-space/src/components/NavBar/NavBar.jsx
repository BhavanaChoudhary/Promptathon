import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import "./NavBar.css"; 
import search_icon from "../../assets/search_icon.png";

const NavBar = ({ setShowLogin, isLoggedIn, onLogout }) => {
  const [activeMenu, setActiveMenu] = useState("home");

  const scrollToFooter = () => {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <RouterLink
            to="/"
            onClick={() => setActiveMenu("home")}
            className={activeMenu === "home" ? "active" : ""}
          >
            Home
          </RouterLink>
        </li>

        <li>
          <a
            href="#app-download" // Link to navigate to AppDownload section
            onClick={() => setActiveMenu("mobile-app")}
            className={activeMenu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer" // Change to scroll to footer
            onClick={() => {
              scrollToFooter();
              setActiveMenu("contact-us");
            }}
            className={activeMenu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
        <li>
          <RouterLink
            to="/book-interview"
            onClick={() => setActiveMenu("book-interview")}
            className={activeMenu === "book-interview" ? "active" : ""}
          >
            Book Appointment
          </RouterLink>
        </li>
        <li>
  <RouterLink
    to="/reach-doctor"
    onClick={() => setActiveMenu("reach-doctor")}
    className={activeMenu === "reach-doctor" ? "active" : ""}
  >
    Reach Doctor
  </RouterLink>
</li>
        <li>
          <RouterLink
            to="/doctors-page" // Link to the doctor's page
            onClick={() => setActiveMenu("doctors-page")}
            className={activeMenu === "doctors-page" ? "active" : ""}
            style={{ color: 'tomato' }} // Apply tomato color
          >
            Doctor's Page
          </RouterLink>
        </li>
        <li>
          <a
            href="http://127.0.0.1:5000/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActiveMenu("know-your-body")}
            className={activeMenu === "know-your-body" ? "active" : ""}
          >
            Know Your Body
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={search_icon} alt="search" className="search-icon" />
        {isLoggedIn ? (
          <button className="profile-btn" onClick={onLogout}>
            Profile
          </button>
        ) : (
          <button className="sign-in-btn" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        )}
      </div>
      <div className="nav-button-container">
    <button
      className="nav-btn"
      onClick={() =>
        window.open("https://d2f5-2409-40f2-9-6172-c99d-e8f7-50a9-c6d2.ngrok-free.app", "_blank")
      }
    >
      Scanalyze
  </button>
</div>

    </nav>
  );
};

export default NavBar;
