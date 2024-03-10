

import React from 'react';
import './Footer.css';
import Footers from "../../Image/footer.jpg";

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Footers} alt="" style={{width: '100%', height: '18rem'}}/>
        <div className="footer-content">
           <div className="fav-content">
               <a><i className="fa fa-location-arrow" style={{padding: '0.4rem'}} aria-hidden="true"></i>Kathagola Road</a>
               <br />
               <a><i className="fa fa-address-book-o" style={{padding: '0.4rem'}} aria-hidden="true"></i>Mangalabag</a>
               <br />
               <a><i className="fa fa-location-arrow" style={{padding: '0.4rem'}} aria-hidden="true"></i>Cuttack</a>
               <br />
               <a><i className="fa fa-phone" style={{padding: '0.4rem'}} aria-hidden="true"></i>9439868692 <span style={{color: 'blue'}}>/</span> 9938028361</a>
               <br />
               <a><i className="fa fa-envelope-o"  style={{padding: '0.4rem'}} aria-hidden="true"></i>rajkumarmall00015@gmail.com</a>
               <br />
           </div>
        </div>
    </div>
  )
}

export default Footer