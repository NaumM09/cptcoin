import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Name Route to Home */}
        <Link to="/" className="navbar-logo">
          <img src="/assets/sa-logo.png" alt="$RSA" className="logo" />
          <span className="navbar-title">$RSA</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/whitepaper" className="whitepaper">Whitepaper</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
