import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header({ toggleTheme, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">Pravallika Karanam</h1>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#skills" onClick={toggleMenu}>
          Skills
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </nav>
      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;
