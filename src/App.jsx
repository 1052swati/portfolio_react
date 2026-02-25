import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import MyWork from './Components/Work/MyWork'


const App = () => {
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <About/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App;