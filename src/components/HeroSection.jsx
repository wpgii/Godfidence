// HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ menuOpen }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        {!menuOpen && (
          <h1 className="headline font-effect-3d">
            GODFIDENCE
          </h1>
        )}
        <div className={`subheading font-effect-3d ${menuOpen ? 'pushed-down' : ''}`}>
          <span className="black">/ˈɡɒd.fɪ.dəns/</span><br />
          <span className="black">noun</span>
        </div>
        <p className={`definition font-effect-3d ${menuOpen ? 'pushed-down' : ''}`}>
          One can do anything through Christ. 
        </p>
      </div>
    </div>
  );
};


export default HeroSection;

