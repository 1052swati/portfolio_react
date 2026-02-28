// import React, { useState } from 'react'
// import './Navbar.css'
// import logo from '../../assets/icon_img.jpeg'
// import underline from '../../assets/nav_underline.svg'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'
// import{useRef} from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'



// const Navbar = () => {
//   const [menu,setMenu] = useState("home");
//   const menuRef = useRef();

//   const openMenu = ()=>{
//   menuRef.current.style.right="0";
  
// }

//   const closeMenu = ()=>{
//   menuRef.current.style.right="-100%";
  
// }

//   return (
//     <div className='navbar'>
//         <img src={logo}alt="" />
//         <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
//           <ul ref={menuRef} className=" nav-menu">
//           <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
//          <li> <AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p> </AnchorLink> {menu==="home"?<img src={underline} alt=''/>:<></>}</li>
//         <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p> </AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
      
//         <li> <AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={()=>setMenu("work")}>MyWork</p> </AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
//         <li> <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p> </AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
//         </ul>   
//         <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
//     </div>
//   )
// }

// export default Navbar;

import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/icon_img.jpeg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-100%"
  }

  const handleClick = (section) => {
    setMenu(section)
    closeMenu()
  }

  return (
    <div className='navbar'>

      <img src={logo} alt="logo" />

      <img
        src={menu_open}
        onClick={openMenu}
        alt="open menu"
        className='nav-mob-open'
      />

      <ul ref={menuRef} className="nav-menu">

        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu"
          className="nav-mob-close"
        />

        <li>
          <a className="anchor-link" href="#home" onClick={() => handleClick("home")}>
            Home
          </a>
          {menu === "home" && <img src={underline} alt='' />}
        </li>

        <li>
          <a className="anchor-link" href="#about" onClick={() => handleClick("about")}>
            About me
          </a>
          {menu === "about" && <img src={underline} alt='' />}
        </li>

        <li>
          <a className="anchor-link" href="#work" onClick={() => handleClick("work")}>
            My Work
          </a>
          {menu === "work" && <img src={underline} alt='' />}
        </li>

        <li>
          <a className="anchor-link" href="#contact" onClick={() => handleClick("contact")}>
            Contact
          </a>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>

      </ul>

      <div className="nav-connect">
        <a href="#contact">
          Connect with me
        </a>
      </div>

    </div>
  )
}

export default Navbar