
import React, { useState, useEffect } from 'react'
import './Hero.css'

import profile1 from '../../assets/profile_img1.png'
import profile2 from '../../assets/profile_img2.png'
import profile3 from '../../assets/profile_img3.png'
import profile4 from '../../assets/profile_img4.png'

const Hero = () => {

  const images = [profile1, profile2, profile3, profile4]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 2500)   // 2.5 sec me image change hogi

    return () => clearInterval(interval)
  }, [])

  return (
    <div id='home' className='hero'>

      {/* Profile Image Slider */}
      <div className="profile-wrapper">
        <img
          src={images[currentIndex]}
          alt="profile"
          className="profile-img"
        />
      </div>

      <h2>
        Hi, I’m <span>Swati Vagare</span>
      </h2>

      <h3>
        Frontend Developer | React Enthusiast
      </h3>

      <p>
        I am a B.Sc. IT graduate from the University of Mumbai, Maharashtra,
        passionate about building modern, responsive, and user-friendly web applications using React.
      </p>

      <div className="hero-action">
        <a
          href="https://www.linkedin.com/in/swativagare"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-connect"
        >
          🌐 Connect with me
        </a>

        <a
          href="/swati_vagare_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          📄 My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
