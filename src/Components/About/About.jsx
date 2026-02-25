import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpeg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1><u>About me</u></h1>
            
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={about_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p> 🚀 As a Frontend Developer fresher, I focus on building responsive, accessible, and user-centric web applications with attention to clean design and usability.</p>

<p>💻 I have a strong foundation in HTML, CSS, JavaScript, and React.js, and I enjoy creating interactive interfaces by transforming ideas into real, functional web experiences.</p>

<p>🎓 I am a Certified Full Stack Web Developer from Edureka, with practical experience gained through projects,UI development, and collaborative learning environments.</p>

<p>🌟 Driven by design precision, performance, and continuous learning, I am eager to grow as a developer and contribute to meaningful projects. </p>
            </div>
           


           <div className="about-skills">

  <h2 className="skill-title">Frontend</h2>

  <div className="skill-card">
    <div className="skill-header">
      <span> 🧱 HTML & CSS</span>
      <span>80%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "80%" }}></div>
    </div>
  </div>

  <div className="skill-card">
    <div className="skill-header">
      <span>⚡ JavaScript</span>
      <span>70%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "70%" }}></div>
    </div>
  </div>

  <div className="skill-card">
    <div className="skill-header">
      <span>⚛️ React JS</span>
      <span>60%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "60%" }}></div>
    </div>
  </div>

  <h2 className="skill-title">Back-End</h2>

  <div className="skill-card">
    <div className="skill-header">
      <span>🚀 Express JS</span>
      <span>50%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "50%" }}></div>
    </div>
  </div>

  <div className="skill-card">
    <div className="skill-header">
      <span>🌿 Node JS</span>
      <span>50%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "50%" }}></div>
    </div>
  </div>

  <div className="skill-card">
    <div className="skill-header">
      <span>🍃 MongoDB</span>
      <span>50%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "50%" }}></div>
    </div>
  </div>

</div>

            
          </div>
        </div>
    </div>
  )
}

export default About



