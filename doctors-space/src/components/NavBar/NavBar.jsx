import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure this is only imported once
import "./NavBar.css"; 
import search_icon from "../../assets/search_icon.png";

const NavBar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setActiveMenu("home")}
            className={activeMenu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            onClick={() => setActiveMenu("menu")}
            className={activeMenu === "menu" ? "active" : ""}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/app"
            onClick={() => setActiveMenu("mobile-app")}
            className={activeMenu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setActiveMenu("contact-us")}
            className={activeMenu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/book-interview"
            onClick={() => setActiveMenu("book-interview")}
            className={activeMenu === "book-interview" ? "active" : ""}
          >
            Book Appointment
          </Link>
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
