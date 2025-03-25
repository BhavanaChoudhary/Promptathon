import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure this is only imported once
import "./NavBarDoctor.css"; // Import the CSS for NavBarDoctor

const NavBarDoctor = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar-doctor">
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
          <div onClick={toggleDropdown} className="menu-item">
            Menu
          </div>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="https://doctorshaikshealthcare.netlify.app" target="_blank" onClick={() => setActiveMenu("prescription-printer")}>

                  Prescription Printer
                </Link>
              </li>
              <li>
                <Link to="/https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/24/23/20250324230246-RS9GKMYW.json" onClick={() => setActiveMenu("patient-data-summariser")}>
                  Patient Data Summariser
                </Link>
              </li>
            </ul>
          )}
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBarDoctor;
