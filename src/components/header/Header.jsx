import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Photo-CV.jpg'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rade Šekularac</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>    
        <HeaderSocials/>
        
        <div className="me">
        <img src={ME} alt="profile picture for cv" />

      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header