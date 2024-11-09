import React, { useState } from 'react';
import { BiFoodMenu, BiX } from 'react-icons/bi';
import "../app/styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='logo' data-aos="flip-left">𝑰𝒒𝓻𝒶</div>
        <ul className='nav-links'>
          <li className='menu-link'><a href='#home'>HOME</a></li>
          <li className='menu-link'><a href='#about'>ABOUT</a></li>
          <li className='menu-link'><a href='#skills'>SKILLS</a></li>
          <li className='menu-link'><a href='#contact'>CONTACT</a></li>
        </ul>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <BiX size={30}/> : <BiFoodMenu size={30}/>}
        </div>
      </div>
      {isMenuOpen && (
        <ul className='mobile-menu'>
          <li className='menu-link'>
            <a href="#home" onClick={toggleMenu}>HOME</a>
          </li>
          <li className='menu-link'>
            <a href="#about" onClick={toggleMenu}>ABOUT</a>
          </li>
          <li className='menu-link'>
            <a href="#skills" onClick={toggleMenu}>SKILLS</a>
          </li>
          <li className='menu-link'>
            <a href="#contact" onClick={toggleMenu}>CONTACT</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
