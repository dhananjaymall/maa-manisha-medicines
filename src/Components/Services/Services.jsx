

import React from 'react'
import './Services.css'
import Nurology from "../../Image/nurology.png"
import Urology from "../../Image/urology.png"
import Card from '../Card/Card'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect';

const Services = () => {

  const transition = {type: 'spring', duration: 3};
  const transition2 = {type: 'spring', duration: 1};

  return (
    <div className='intro-page' id='services'>

      <div className='store-name'>  
        <Typewriter 
          options={{
            strings: ["Chemist and Drugist"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      {/* blur div.. */}
      <div className="blur" style={{background: "rgb(236 210 255)"}}></div>

      <div className="blur" style={{background: '#C1F5FF', top: '20rem', width: '21rem',height: '11rem', left: '2rem'}}></div>

      <div className="the-best-ad-parent">
         <div className="the-best-ad">
            <motion.div 
            initial = {{left: '13rem'}} 
            whileInView = {{left: '8px'}} 
            transition = {{...transition, type: 'tween'}}
            ></motion.div>
            <span>We are open from: 9.00 am - 9.00 pm</span>
         </div>
      </div>

      {/* button */}

      <div className="services">
        {/* left side */}
        <div className="awesome">
          <span>Our</span>
          <span>Doctors</span>
          <p id="newPara">We have the best specialists <br /> from around the globe, they <br/> bring years of experience and <br/> offer evidence based treatment <br /> to ensure the best care for you.</p>
          <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
          {/* fast card */}
          <motion.div 
          whileInView = {{left: '22rem',top: '0rem'}} 
          initial = {{top: '3rem'}} 
          transition = {{...transition2, type: 'tween'}} 
          style={{top: '0rem', left: '22rem'}}>
            <Card
              emoji = { Nurology }
              drname = {'DR. R.M. SAHOO'}
              department = {`M.B.B.S., M.D. (Medicines)`}
              details = {'DNB (Neurology)'}/>
          </motion.div>
          
          {/* 2nd card */}
          <motion.div 
          whileInView = {{left: '5rem'}} 
          initial = {{left: '-1%'}} 
          transition = {{...transition2, type: 'tween'}} 
          style={{top: '0rem', left: '5rem'}}>
            <Card
              emoji = { Urology }
              drname = {'DR. SATYAJIT SAMAL'}
              department = {`MCH (Urology)`}
              details = {' Asst. Prof. SCB Medical College & Hospital, Cuttack'}/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services;