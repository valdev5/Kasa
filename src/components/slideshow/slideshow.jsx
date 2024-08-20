
import React, { useState } from 'react';
import './slideshow.scss';
import leftArrowImage from '../../assets/arrow_left.png'
import rightArrowImage from '../../assets/arrow_right.png'

function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    if (images.length === 0) return null;
  
    return (
      <div className="slideshow">
        {images.length > 1 && (
          <>
            <button onClick={prevSlide} className="arrow left-arrow">
              <img className='arrowStyle'  src={leftArrowImage} alt="Previous Slide" />
            </button>
            <button onClick={nextSlide} className="arrow right-arrow">
              <img className='arrowStyle' src={rightArrowImage} alt="Next Slide" />
            </button>
          </>
        )}
        <div className="slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        {images.length > 1 && (
          <div className="slide-indicator">
            {currentIndex + 1}/{images.length}
          </div>
        )}
      </div>
    );
  }
  
  export default Slideshow;
