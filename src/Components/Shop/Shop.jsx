
import './Shop.css'
import React from 'react'
import { Shopdata } from '../../Assets/Shopdata'
import { useState } from 'react'
import { FaArrowLeft,  FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'

const Shop = () => {
  
  const transition = {type: 'spring', duration: 3};

  const[selected, setselected] = useState(0);
  const tLength = Shopdata.length;

  return (

    <div className='shop' id='shoping'>

    <div className="blurd" style={{background: "rgb(236 210 255)"}}></div>
    <div className="blur" style={{background: '#C1F5FF', top: '12rem', width: '21rem',height: '11rem', left: '15rem'}}></div>

        {/* left shop */}
        <div className="left-s">
            <span>About Our</span>
            <span>Clinic & Pharamacy</span>
            <span>
                {Shopdata[selected].review}
            </span>
            <span>
              <span style={{color: '#4D5DFB'}}>
                 {Shopdata[selected].name}
              </span>{" "}
              - {Shopdata[selected].status}
            </span>
        </div>
        {/* right shop */}
        <div className="right-s">
          <div></div>
          <div></div>
           <motion.img 
           key = {selected} 
           initial = {{opacity: 0, x: 100}} 
           animate = {{opacity: 1, x: 0}} 
           exit = {{opacity: 0, x: -100}} 
           transition = {transition}
           src={Shopdata[selected].Image} alt="" />

           <div className="shop-arrow">
            
             {/* left arrow */}
             <FaArrowLeft onClick={() =>{
              selected === tLength -1 
              ? setselected(0)
              : setselected((prev) => prev + 1)
             }}/>

            {/* right arrow */}
             <FaArrowRight onClick={() => {
              selected === 0
              ? setselected(tLength -1)
              : setselected((prev) => prev - 1)
             }}/>

           </div>
        </div>
    </div>
  )
}

export default Shop