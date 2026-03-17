import React, { useState } from 'react'
import './Footer.css'
import logo from '../../assets/icon_img.jpeg'
import ComingSoon from '../ComingSoon/ComingSoon.jsx'
import { FaPhone ,FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  const[showModal, setShowModal]=useState(false);
  const[modalTitle, setModalTitle] = useState("");

  const handleOpen = (title)=>{
      setModalTitle(title);
      setShowModal(true);
  };

  return (
    <div className='footer'>

      <div className="footer-top">

        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            I am a passionate full stack developer eager to build responsive and
            user-friendly web applications using HTML, CSS, JavaScript, and
            React.js. I love writing clean code, learning new technologies,
            and creating engaging digital experiences.
          </p>
        </div>

        {/* WhatsApp Buttons */}
        <div className="footer-top-right">

          <a
            href="https://wa.me/919082118485"
            target="_blank"
            rel="noreferrer"
            className="wp-btn"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

         <a 
             href="https://wa.me/919082118485" 
             target="_blank" 
             rel="noreferrer" 
             className="wp-btn"
>
              <FaPhone /> Call on WhatsApp
         </a>  

        </div>

      </div>

      <hr />

      <div className='footer-bottom'>
        <p className='footer-bottom-left'>
          © 2025 Swati Vagare. All rights reserved.
        </p>

        <div className="footer-bottom-right">
          <p onClick={()=> handleOpen("Terms of Service")}>📄Terms of Service</p>
          <p onClick={()=> handleOpen("Privacy Policy")}>🔐Privacy Policy</p>

          <a href="#contact" className="anchor-link">
            🌐Connect with me
          </a>
        </div>
      </div>

      {showModal && (
        <ComingSoon
          title={modalTitle}
          onClose={()=> setShowModal(false)}
        />
      )}

    </div>
  )
}

export default Footer;