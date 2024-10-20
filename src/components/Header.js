import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header neumorphism">
      <nav className="navbar">
        <h1 className="navbar-logo">My Portfolio</h1>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" className="nav-item" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="nav-item" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="nav-item" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#achievements" className="nav-item" onClick={toggleMenu}>Achievements</a></li>
            <li><a href="#contact" className="nav-item" onClick={toggleMenu}>Contact</a></li> {/* Updated link to point to #contact */}
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;