import React from 'react'
import "./about.css"
import ME from "../../assets/Photo-CV.jpg"

import {VscFolder} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="photo for cv" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <a href="#portfolio">
            <article className='about_card'>
              <VscFolder className='about_icon'/>
              <h5>Projects</h5>
             
            </article>
            </a>
          </div>
          <p>
           I am a self-taught full-stack developer, with working experience in front-end, helping build websites with unique designs and upload them in WordPress for clients use as CRM. You can see those websites in the Portfolio section below, as well as some study projects that I completed while following The Odin Project as a course program to learn HTML, CSS, JS and RUBY. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About