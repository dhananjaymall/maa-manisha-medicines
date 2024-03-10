
import './Slider.css';
import { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Sliderdata } from './Sliderdata';

const Slider = () => {

  const [curentSlider, setCurentSlider] = useState(0);
  const slideLength = Sliderdata.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurentSlider(curentSlider === slideLength - 1 ? 0 : curentSlider + 1);
  };

  const prevSlide = () => {
    setCurentSlider(curentSlider === 0 ? slideLength -1 : curentSlider - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide,intervalTime)
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [curentSlider]);

  useEffect(() => {
    setCurentSlider(0)
  }, [])

  return (
    <div className="slider">

      <h1 className="slide-titel">We always ensure our customer gets best treatment & Pharma from us.</h1>

       <FaArrowLeft className="arrow left" onClick={prevSlide} />
       <FaArrowRight className="arrow right" onClick={nextSlide} />

       {Sliderdata.map((slide, index) => {

        return (

          <div className= { index === curentSlider ? "slide current" : "slide"} key={index}>
             {index === curentSlider && (
               <div>
                  <img src={slide.image} alt='slide' className='slideImages' />
                  <div className="content">
                     <span>{slide.heading}</span>
                     <br />
                     <span>{slide.desc}</span>
                     <br />
                     <hr />
                     <a href="tel:+918249055908" className='button slide-button'>Contact Us</a>
                  </div>
               </div>
             )}
          </div>
        )

       })}

    </div>
  )
}

export default Slider;