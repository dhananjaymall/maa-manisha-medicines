

import React from 'react'
import './About.css'
import Nurology from "../../Image/nuro.jpeg"
import Srolo from "../../Image/Urolo.jpg"

const About = () => {
  return (
    <div className='About-doct' id='About'>

    <div className="blur-about" style={{background: "rgb(236 210 255)"}}></div>

    <div className="blur-about" style={{background: '#C1F5FF', top: '20rem', width: '21rem',height: '11rem', left: '2rem'}}></div>
        
        <div className="right-side aa">
            <div className='aboute-nuro'>
            <span className='nuro-h1'>NEUROLOGY?</span><br /><br />
            Neurology is a branch of medicine which deals    with the diseases of brain and its connections.
            <br />
            Brain is the master mind of the body and it controls many functions which we perform. The nervous system consists of brain and its connections,namely spinal cord,peripheral nerves and muscles.
            <br />
            It has many functions ranging from the maintenance of consciousness, thought process, judgement and memory to other basic functions such as muscle power,sensations, coordination and gait. Special senses like vision, hearing and taste are also controlled by brain. Diseases which affects any part of the nervous system can affect the different functions of nervous system.
            </div>
            <div className="imge">    
               <img src={ Nurology } alt="" />
            </div>
        </div>


        <div className="right-side bb">
            <div className="about-uro">
            <span className='uro-h1'>UROLOGY?</span><br /><br />
                Urology is a part of health care that deals with diseases of the male and female urinary tract (kidneys, ureters, bladder and urethra). It also deals with the male organs that are able to make babies (penis, testes, scrotum, prostate, etc.). Since health problems in these body parts can happen to everyone, urologic health is important.
                <br />
                Urology is known as a surgical specialty. Besides surgery, a urologist is a doctor with wisdom of internal medicine, pediatrics, gynecology and other parts of health care. This is because a urologist encounters a wide range of clinical problems.
            </div>
            <div className="right-imge">
                <img src={Srolo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About