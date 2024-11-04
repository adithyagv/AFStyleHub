// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use useEffect to automatically change slides at the specified interval
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Clear the interval when the component is unmounted
    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="slider-container">
      <div className="slider-content">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slider-image"
        />
      </div>
    </div>
  );
};

export default Slider;
