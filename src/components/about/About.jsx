import React from 'react'
import "./about.css"
import ME from "../../assets/Photo-CV.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
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
           I am a self-taught front-end developer, I have followed The Odin Project as a course program to learn HTML, CSS, JS and RUBY. During the course I've completed a number of study projects which you can see on thsi sebsite on the Portfolio section below. My work experience consists of mostly project management in construction projects, I  have a Bachelor's degree in real estate economy and a Masters in Project Management.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About