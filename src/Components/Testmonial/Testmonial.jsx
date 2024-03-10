
import './Testmonial.css';
import React from 'react';
import { TestmonialData } from './TestmonialData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testmonial = () => {

  return (
    <div className='Testmonial'>
        <div className="t-heading">

           <div className="t-blur t-blur1" style={{background : "var(--purple)"}}>
           </div>
           <div className="t-blur t-blur2" style={{background : "skyblue"}}></div>

        </div>

        {/* Slider */}
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
        >
           {TestmonialData.map((testm, index) =>{
             return(
              <SwiperSlide key={index}>
                 <div className="SlidersContent">
                    <ImQuotesLeft className='ImQuotes ImQuotes-Left' />
                    <ImQuotesRight className='ImQuotes ImQuotes-Right' />
                    <img src={testm.image} />
                    <span>{testm.names}</span>
                    <span>{testm.desc}</span>
                    <span>{testm.MobileNo}</span>
                 </div>
              </SwiperSlide>
             );
           })}
        </Swiper>
    </div>
  )
}

export default Testmonial;
