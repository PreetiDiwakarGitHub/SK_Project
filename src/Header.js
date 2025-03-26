import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../src/image/Logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo-container">
          <img src={logo} alt="SK Enterprises Logo" className="logo-img" />
          <span className="logo-text">SK Enterprises</span>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={isMenuOpen ? "show-menu" : ""}>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="hover:underline" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/services" className="hover:underline" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/gallery" className="hover:underline" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline" onClick={toggleMenu}>Contact Us</Link></li>
            <button className="login-btn">Login</button>
            <button className="login-btn">Sign Up</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
