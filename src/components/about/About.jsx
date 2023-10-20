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
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>300+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iusto libero nobis animi, tempora ipsum minus modi repellat omnis aliquam distinctio ullam. 
            Architecto, blanditiis eligendi assumenda velit mollitia adipisci. Eius, eum.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About