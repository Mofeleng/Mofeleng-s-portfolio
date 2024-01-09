import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/logo.svg" alt="Logo" />
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><Link to="#">My projects</Link></li>
        <li><Link to="#" className='btn btn_primary'>Hire Me.</Link></li>
      </ul>
      <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar
