
// import React, { useState } from 'react'
// import './MyWork.css'
// import Portfolio_img from '../../assets/Portfolio_img.png'
// import ToDo_img from '../../assets/ToDo_img.png'
// import Grocery_img from '../../assets/Grocery_img.png'

// const MyWork = () => {
//   const [selectedImg, setSelectedImg] = useState(null)

//   return (
//     <div id='work' className='mywork'>
//       <div className="mywork-title">
//         <h1><u>My latest work</u></h1>
//       </div>

//       <div className="mywork-container">
//         <img src={Portfolio_img} onClick={() => setSelectedImg(Portfolio_img)} />
//         <img src={ToDo_img} onClick={() => setSelectedImg(ToDo_img)} />
//         <img src={Grocery_img} onClick={() => setSelectedImg(Grocery_img)} />
//       </div>

//       {/* 🔹 IMAGE MODAL */}
//      {selectedImg && (
//   <div className="image-modal">
    
//     <div className="modal-content">
//       {/* ❌ CLOSE BUTTON (IMAGE KE ANDAR) */}
//       <span className="close-btn" onClick={() => setSelectedImg(null)}>
//         ✕
//       </span>

//       <img src={selectedImg} alt="Zoomed work" />
//     </div>

//   </div>
// )}

//     </div>
//   )
// }

// export default MyWork


import React, { useState, useEffect } from 'react'
import './MyWork.css'
import Portfolio_img from '../../assets/Portfolio_img.png'
import ToDo_img from '../../assets/ToDo_img.png'
import Grocery_img from '../../assets/Grocery_img.png'

const MyWork = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  // 🔒 Lock scroll when modal open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [selectedImg])

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        <img src={Portfolio_img} alt="Portfolio Project" onClick={() => setSelectedImg(Portfolio_img)} />
        <img src={ToDo_img} alt="Todo App" onClick={() => setSelectedImg(ToDo_img)} />
        <img src={Grocery_img} alt="Grocery App" onClick={() => setSelectedImg(Grocery_img)} />
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedImg(null)}>✕</span>
            <img src={selectedImg} alt="Zoomed work" />
          </div>
        </div>
      )}
    </div>
  )
}

export default MyWork