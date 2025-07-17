// No 2

import React, { useEffect } from 'react';
import '../styles/Banner.css';

const Banner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bannerImage = document.querySelector('.banner-image');

      //parallax
      if (bannerImage) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        bannerImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="banner">
      <div className="banner-image-container">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop" 
          alt="Banner" 
          className="banner-image"
        />
      </div>
      <div className="banner-content">
        <h1 className="banner-title">Ideas</h1>
        <p className="banner-subtitle">Where insights meet inspiration</p>
      </div>
      <div className="banner-angle"></div>
    </section>
  );
};

export default Banner;