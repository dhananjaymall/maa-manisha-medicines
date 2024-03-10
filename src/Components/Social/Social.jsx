
import React from 'react';
import './Social.css';
import Right from "../../Image/tick.png";
import {motion} from 'framer-motion';

const Social = () => {

  return (

    <div className='Social' id='socials'>
        {/* left side */}
        <div className="awesome">
            <span>Our Services</span>
            <span>And Facility</span>
                <span>  
                <img src={ Right } alt="" />
                Clinicial Treatment (Nurology, Urology, Medicine)
                </span>
                <span>
                <img src={ Right } alt="" />
                Pharmacy
                </span>
                <span>
                <img src={ Right } alt="" />
                Day Care Services
                </span>
                <span>
                <img src={ Right } alt="" />
                In house treatment & Emergency services
                </span>
            {/* <button className='button s-button'>Know More</button> */}
            <div className='blur s-blur1 blur2' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div 
            initial = {{rotate: 80}} 
            whileInView = {{rotate: 0}} 
            viewport = {{margin: '-40px'}}
            transition = {{duration: 3.5, type: 'spring'}} 
            className="w-mainCircle">

                <span className="icon instagram">
                   <div className="tooltip">
                      Instagram
                   </div>
                   <span><i className="fab fa-instagram"></i></span>
                </span>

                <span className="icon twitter">
                   <div className="tooltip">
                      Phone Call
                   </div>
                   <span><i className="fa fa-twitter"></i></span>
                </span>

                <span className="icon facebook">
                   <div className="tooltip">
                     Facebook
                   </div>
                   <span><i className="fab fa-facebook-f"></i></span>
                </span>

                <span className="icon youtube">
                   <div className="tooltip">
                      YouTube
                   </div>
                   <span><i className="fab fa-youtube"></i></span>
                </span>

                <span className="icon whatsapp">
                   <div className="tooltip">
                      WhatsApp
                   </div>
                   <span><a href="https://wa.me/+919778472249" target={'_blank'}><i className="fab fa-whatsapp"></i></a></span>
                </span>
            </motion.div>


            {/* background circle */}
            <div className="w-backcircle blueCircle"></div>
            <div className="w-backcircle redCircle"></div>
            <div className="w-backcircle blackCircle"></div>
            <div className="w-backcircle greenCircle"></div>
            <div className="w-backcircle parpelCircle"></div>
            <div className="w-backcircle sarpeCircle"></div>
        </div>

    </div>
  );
}


export default Social;