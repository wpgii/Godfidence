import React, { useState, useEffect } from 'react';
import './index.css'; 
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Commitment from './components/Commitment';
import WhyUs from './components/WhyUs';
import Verse from './components/Verse';
import Resources from './components/Resources';
import Footer from './components/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Effect to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      // Check if the screen is wider than 768px
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close the menu on wider screens
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <HeroSection menuOpen={menuOpen} />
      <Commitment />
      <WhyUs />
      <Verse />
      <Resources />
      <Footer />
      {/* You can add other components here in the future */}
    </div>
  );
};

export default App;
