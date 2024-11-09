import React from 'react';
import Navbar from './Navbar';
import "../app/styles/hero.css";

const Hero = () => {
  return (
    <div id="Hero" className="hero">
      <Navbar />
      <div className="hero-container"> 
        <div className="hero-content">
          <div>
            <p data-aos="flip-left">I 𝒶𝓂 </p>
            <p data-aos="flip-left">I𝓆𝓇𝒶 </p>
            <p data-aos="flip-left">H𝒶𝓈𝓈𝒶𝓃</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


