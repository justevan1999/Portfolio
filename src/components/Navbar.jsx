import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"; // Make sure this file exists

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar-container gradient-bottom-border">
      <div className="nav-logo">
        <img
          style={{ cursor: "pointer", marginTop: "6px" }}
          src="/nav-logo.png"
          alt="Logo"
        />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes size={28} color="#fff" />
        ) : (
          <FaBars size={28} color="#fff" />
        )}
      </div>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul
          className="nav-links"
          style={{
            cursor: "pointer",
            listStyle: "none",
            display: "flex",
          }}
        >
          <li>
            <a href="#home" style={{ textDecoration: "none", color: "inherit" }}>
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CONTACT ME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
