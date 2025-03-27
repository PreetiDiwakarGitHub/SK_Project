import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../src/image/Logo.jpg"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="SK Enterprises Logo" className="logo-img" />
          <span className="logo-text">SK Enterprises</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
