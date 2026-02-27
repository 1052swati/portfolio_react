// import React from 'react'
// import './Contact.css'
// import mail_icon from '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "fd980915-02fa-46ac-8228-3e4b290258b2");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       alert(res.message);
//     }
//   };






//   return (

//     <div id='contact' className='contact'>
//         <div  className="contact-title">
//             <h1><u>Get in touch</u></h1>
//          </div>
//          <div className="contact-section">
//             <div className="contact-left">
//                 <h1>Let's talk</h1>
//                 <p>I am currently open to new opportunities and excited to work in a collaborative environment that challenges me and helps me grow. you can contact anytime </p>



//                 <div className="contact-details">
//                     <div className="contact-detail">
//                       <img src={mail_icon} alt="email" />
//                       <p>vagareswati50@gmail.com</p>
//                       </div>
//                       <div className="contact-detail"> 
//                         <img src={call_icon} alt="" /> 
//                         <p>9082118485</p>                    </div>

//                       <div className="contact-detail">
//                         <img src={location_icon} alt="" />
//                         <p>panvel, navi mumbai, maharashtra 410206</p>

//                       </div>
                      

                    
//                 </div>
//             </div>
//             <form onSubmit={onSubmit}action="" className="contact-right">
//               <label htmlFor="">Your Name</label>
//               <input type='text' placeholder='Enter your name' name='name'/>
//               <label htmlFor="">Your Email</label>
//               <input type='email' placeholder='Enter your email' name='email'/>
//               <label htmlFor="">Write your message here</label>
//               <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
//               <button type='submit' className="contact-submit">Submit now</button>
//             </form>
//          </div>

//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus("")

    const formData = new FormData(event.target)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })

      const res = await response.json()

      if (res.success) {
        setStatus("Message sent successfully ✅")
        event.target.reset()
      } else {
        setStatus("Something went wrong ❌")
      }

    } catch (error) {
      setStatus("Network error ❌")
    }

    setLoading(false)
  }

  return (
    <div id='contact' className='contact'>

      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently open to new opportunities and excited to work in a collaborative environment that challenges me and helps me grow.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email icon" />
              <p>vagareswati50@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="phone icon" />
              <p>9082118485</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>Panvel, Navi Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form onSubmit={onSubmit} className="contact-right">

          <label>Your Name</label>
          <input type='text' name='name' required placeholder='Enter your name' />

          <label>Your Email</label>
          <input type='email' name='email' required placeholder='Enter your email' />

          <label>Your Message</label>
          <textarea name="message" rows="6" required placeholder='Enter your message'></textarea>

          <button type='submit' className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Now"}
          </button>

          {status && <p style={{ marginTop: "10px" }}>{status}</p>}

        </form>

      </div>
    </div>
  )
}

export default Contact