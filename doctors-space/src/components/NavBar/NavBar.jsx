import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import "./NavBar.css"; 
import search_icon from "../../assets/search_icon.png";

const NavBar = ({ setShowLogin }) => {
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
            to="/doctors-page" // Link to the doctor's page
            onClick={() => setActiveMenu("doctors-page")}
            className={activeMenu === "doctors-page" ? "active" : ""}
            style={{ color: 'tomato' }} // Apply tomato color
          >
            Doctor's Page
          </RouterLink>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={search_icon} alt="search" className="search-icon" />
        <button className="sign-in-btn" onClick={() => setShowLogin(true)}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
