import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // only start hiding after scrolling down a bit
          if (currentY > lastScrollY.current && currentY > 80) {
            setVisible(false);
            // if menu is open, close it to avoid overlap
            setMenuOpen(false);
          } else {
            setVisible(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu when clicking a link (mobile UX)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`navbar-container ${visible ? "visible" : "hidden"}`}
      role="banner"
    >
      <div className="nav-left">
        <img
          src="/nav-logo.png"
          alt="Logo"
          className="nav-logo-img"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      <button
        className="hamburger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((s) => !s)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav className={`navbar ${menuOpen ? "open" : ""}`} role="navigation">
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={handleNavClick}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              CONTACT ME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
