
import React from 'react'
import './Navbar.css'
import Titellogo from "../../Image/titellogo.png"

const Navbar = () => {
  return (
    <div className="navbar" id='headNavbar'>
      {/* top navbar */}
    <div className='n-wrapper'>
        <div className="n-left">
        <div className="n-name">
          <span>
             <img src={Titellogo} alt="" />
          </span>
          <span>MAA </span> 
          <span>MANISHA </span> 
          <span>MEDICINES</span>
        </div>
        {/* <Toggle /> */}
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li><a href="#Services">HOME</a></li>
              <li><a href="#socials">SOCIALS</a></li>
              <li><a href="#About">ABOUT</a></li>
            </ul>
          </div>
          <a href="https://goo.gl/maps/nFvbNmvd27CcVKtx9" className='button n-button' target={'_blank'}>Locate Us</a>
        </div>
    </div>
    {/* top navbar end */}

    {/* bootem navbar start */}
    <div className="bootem-nav">
              <a href="#headNavbar" className="fa fa-user-md"> </a>
              <a href="#shoping" className="fa fa-hospital-o"> </a>
              <a href="#socials" className="fa fa-mobile"> </a>
              <a href="#About" className="fa fa-comments"> </a>
              <a href="https://goo.gl/maps/nFvbNmvd27CcVKtx9" className="fa fa-map-marker" target={'_blank'}> </a>
    </div>
    {/* bootom navbar end */}
    </div>
  )
}

export default Navbar;