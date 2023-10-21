import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/Photo-CV.jpg'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <CTA/>    
        <h5>Hello I'm</h5>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <HeaderSocials/>
        

        <h1>Rade Šekularac</h1>
        <h5 className="text-light">Web Developer</h5>
    
        
        {/* <div className="me">
        <img src={ME} alt="profile picture for cv" />

      </div> */}
    
      </div>
    </header>
  )
}

export default Header