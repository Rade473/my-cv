import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (

    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience_container ">
        <Fade bottom>
        <div  className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>CSS</h4>
              
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>JavaScript</h4>
       
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
    
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Ruby on Rails</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Ruby</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              </div>
            </article>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  )
}


 
export default Experience