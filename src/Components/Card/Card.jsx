

import React from 'react'
import './Card.css'

const Card = ({emoji, drname, department, details}) => {
  return (
          <div className='card'>
              <img src={emoji} alt="" />
              <span>{drname}</span>
              <span>{department}</span>
              <span>{details}</span>
              <span><a href="tel:9439868692">Book Your Appointment</a></span>
          </div>
  )
}

export default Card