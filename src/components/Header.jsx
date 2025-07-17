// No 1

import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show header brdsrkn scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      // class scrolled transparan
      setIsScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  //active state menu
  return (
    <header className={`header ${isHidden ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">suitmedia</div>
          <ul className="nav-menu">
            <li><a href="#" className="nav-link">Work</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Services</a></li>
            <li><a href="#" className="nav-link active">Ideas</a></li>
            <li><a href="#" className="nav-link">Careers</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
