import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ menuOpen, toggleMenu }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        toggleMenu(); // Close the menu if it's open and screen width exceeds 768px
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen, toggleMenu]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#" onClick={scrollToTop}>
          <img 
            src="src/assets/cross1.png" 
            alt="Cross Logo" 
            className={menuOpen ? 'hidden' : ''} 
          />
        </a>
        <h1 className={`navbar-title font-effect-3d ${menuOpen ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
          GODFIDENCE
        </h1>
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#commitment" className="font-effect-outline">Commitment</a>
        <a href="#why-us" className="font-effect-outline">Spirit Spaces</a>
        <a href="#why-us" className="font-effect-outline">Fellowship</a>
        <a href="#resources" className="font-effect-outline">Resources</a>
        <Link to="/login" className="button font-effect-outline">Grow Your Spirit</Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;

