import React from 'react';
import girl1 from '../src/assets/images/pic1.png';
import Navigation from './Navigation';
import './Splash.css';
import Services from './Services'; // Import the new Services component
import Community from './Community';

const Splash = () => {
  return (
    <>
      {/* Use the separate Navigation Component */}
      <Navigation />

      {/* Background Container */}
      <div className="background">
        {/* Grid Effect */}
        <div className="grid-container">
          {Array.from({ length: 200 }).map((_, index) => (
            <div key={index} className="grid-item"></div>
          ))}
        </div>

        {/* Neon Light Effect */}
        <div className="neon-line" style={{ top: '15vh' }}></div>
        <div className="neon-line" style={{ top: '30vh' }}></div>
        <div className="neon-line" style={{ top: '45vh' }}></div>
        <div className="neon-line" style={{ top: '60vh' }}></div>
        <div className="neon-line" style={{ top: '75vh' }}></div>

        {/* Girl Image */}
        <img
          src={girl1}
          alt="Girl"
          className="girl-image"
        />

        {/* New Text Section */}
        <div className="new-text">
          Heal, speak, learn, grow and connect
          <br />
          All served in Shecares
        </div>

        <div className="main-title">She</div>
        <div className="sub-title">Cares</div>
      </div>

      {/* Adding a buffer space between content and services */}
      <div className="buffer-space"></div>

      {/* Services Section */}
      <Services id="services" /> {/* Add the ID here */}

    </>
  );
};

export default Splash;
