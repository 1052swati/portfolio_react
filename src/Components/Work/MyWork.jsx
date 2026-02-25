
import React, { useState } from 'react'
import './MyWork.css'
import Portfolio_img from '../../assets/Portfolio_img.png'
import ToDo_img from '../../assets/ToDo_img.png'
import Grocery_img from '../../assets/Grocery_img.png'

const MyWork = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1><u>My latest work</u></h1>
      </div>

      <div className="mywork-container">
        <img src={Portfolio_img} onClick={() => setSelectedImg(Portfolio_img)} />
        <img src={ToDo_img} onClick={() => setSelectedImg(ToDo_img)} />
        <img src={Grocery_img} onClick={() => setSelectedImg(Grocery_img)} />
      </div>

      {/* 🔹 IMAGE MODAL */}
     {selectedImg && (
  <div className="image-modal">
    
    <div className="modal-content">
      {/* ❌ CLOSE BUTTON (IMAGE KE ANDAR) */}
      <span className="close-btn" onClick={() => setSelectedImg(null)}>
        ✕
      </span>

      <img src={selectedImg} alt="Zoomed work" />
    </div>

  </div>
)}

    </div>
  )
}

export default MyWork
