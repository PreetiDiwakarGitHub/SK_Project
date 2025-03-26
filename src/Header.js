import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../src/image/Logo.jpg"; // Make sure the path is correct

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo with Text */}
        <div className="logo-container">
          <img src={logo} alt="SK Enterprises Logo" className="logo-img" />
          <span className="logo-text">SK Enterprises</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <button className="login-btn">Login</button>
            <button className="login-btn">Sign Up</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
