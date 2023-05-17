import React, { useState } from 'react'
import '../CSS/ImageSlider.css';

export default function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const goToNext = () =>{
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    
  return (
    <div>
      <div className='carousel-container'>
        <div className='leftArrow' onClick={goToPrevious}>&#10094;</div>
        <div className='rightArrow' onClick={goToNext}>&#10095;</div>
        <img src={ slides[currentIndex].image} alt='gameimage'></img>
      </div>
      <div className='Gallery'>
        {slides.map((slide, slideIndex) =>
        (<div className='gallery-images' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
          <img src={ slides[slideIndex].image} alt='gameimages'></img>
        </div>))}
      </div>
    </div>
  )
}
