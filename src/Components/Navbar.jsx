import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <div className="navigation">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="logo.svg" alt="Logo" />
            </Link>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <li><Link to="/projects">My projects</Link></li>
            <li><a href="/#contact" className='btn btn_primary'>Get in touch.</a></li>
          </ul>
          <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          </div>
        </nav>
      </div>
    </div>
    
  );
};

export default Navbar
