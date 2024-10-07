import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Commitment from './components/Commitment';
import WhyUs from './components/WhyUs';
import Verse from './components/Verse';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Login from './components/Login'; // Ensure this component exists

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((p) => !p);

  // Effect to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close the menu on wider screens
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom hook to get current location
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' && (
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection menuOpen={menuOpen} />
            <Commitment />
            <WhyUs />
            <Verse />
            <Resources />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

