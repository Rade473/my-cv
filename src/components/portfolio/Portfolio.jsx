import React from 'react'
// import Swiper core and required modules
import {  Pagination, Zoom } from 'swiper/modules';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './portfolio.css'
import 'swiper/css/zoom';
import TODOIMG from '../../assets/to-do-app.png'
import TODOIMG2 from '../../assets/to-do-app2.png'
import TODOIMG3 from '../../assets/to-do-app3.png'
import RESTAURANTIMG from '../../assets/restaurant.png'
import RESTAURANTIMG2 from '../../assets/restaurant2.png'
import RESTAURANTIMG3 from '../../assets/restaurant3.png'
import DASHBOARDIMG from '../../assets/dashboard.png'
import SOCIALMEDIAIMG from '../../assets/social-media.png'
import SOCIALMEDIAIMG2 from '../../assets/social-media2.png'
import CHESSIMG from '../../assets/chess.png'
import CHESSIMG2 from '../../assets/chess2.png'
import ETCHIMG from '../../assets/etch-a-sketch.png'
import FLIGHTIMG from '../../assets/flight-booker.png'
import TICTACIMG from '../../assets/tic-tac-toe.png'
import MAXIMG1 from '../../assets/maximg1.png'
import MAXIMG2 from '../../assets/maximg2.png'
import MAXIMG3 from '../../assets/maximg3.png'
import VETIMG1 from '../../assets/vetimg1.png'
import VETIMG2 from '../../assets/vetimg2.png'
import VETIMG3 from '../../assets/vetimg3.png'
import LUXORIAIMG1 from '../../assets/luxoriaimg1.png'
import LUXORIAIMG2 from '../../assets/luxoriaimg2.png'
import LUXORIAIMG3 from '../../assets/luxoriaimg3.png'



const data = [
  {
    id:1,
    image: [MAXIMG1,MAXIMG2, MAXIMG3],
    title: "Max Fiduciaire",
    languages: "JS CSS Wordpress",
    github:null,
    demo: 'https://maxfid.mc/'
  },
  {
    id:2,
    image: [VETIMG1,VETIMG2, VETIMG3],
    title: "Private Veterinarian",
    languages: "JS CSS Wordpress",
    github:null,
    demo: 'https://www.coutantprivatevet.com/'
  },
  {
    id:3,
    image: [LUXORIAIMG1,LUXORIAIMG2, LUXORIAIMG3],
    title: "Luxury Interiros",
    languages: "JS CSS Wordpress",
    github:null,
    demo: 'https://www.luxoria.fr/'
  },

  {
    id:4,
    image: [TODOIMG,TODOIMG2, TODOIMG3],
    title: "To Do Application",
    languages: "JS CSS",
    github: "https://github.com/Rade473/todo-app",
    demo: "https://rade473.github.io/todo-app/"
  },

  {
    id:5,
    image: [RESTAURANTIMG, RESTAURANTIMG2, RESTAURANTIMG3],
    title: "Restaurant website",
    languages: "JS HTML CSS",
    github: "https://github.com/Rade473/restaurant_page",
    demo: "https://rade473.github.io/restaurant_page/"
  },

  {
    id:6,
    image: [SOCIALMEDIAIMG, SOCIALMEDIAIMG2],
    title: "Social network website",
    languages: "RUBY JS HTML CSS",
    github: "https://github.com/Rade473/social-network",
    demo: null
  },
  {
    id:7,
    image: [DASHBOARDIMG],
    title: "Dashboard concept",
    languages: "HTML CSS",
    github: "https://github.com/Rade473/dashboard_project",
    demo: "https://rade473.github.io/dashboard_project/"
  },
  {
    id:8,
    image: [CHESSIMG, CHESSIMG2],
    title: "Chess in terminal",
    languages: "RUBY",
    github: "https://github.com/Rade473/chess",
    demo:null
  },
  {
    id:9,
    image: [ETCHIMG],
    title: "Etch-a-Sketch",
    languages: "JS HTML CSS",
    github: "https://github.com/Rade473/etch_a_sketch",
    demo:'https://rade473.github.io/etch_a_sketch/'
  },
  {
    id:10,
    image: [FLIGHTIMG],
    title: "Flight Booker",
    languages: "RUBY JS HTML CSS",
    github: "https://github.com/Rade473/flight-booker",
    demo:null
  },
  {
    id:11,
    image: [TICTACIMG],
    title: "Tic-Tac-Toe",
    languages: "JS HTML CSS",
    github: "https://github.com/Rade473/tic-tac-toe",
    demo:'https://rade473.github.io/tic-tac-toe/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id, image, title, languages, github, demo}) => {
          return(
            <article key = {id} className='portfolio_item'>
            <Swiper className="portfolio_item-image"
            modules={[Zoom, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            zoom={true}
            pagination={{ clickable: true }}
          >
              {image.map(function(object, i){

                return <>
                <SwiperSlide className='swiper-zoom-container' key={i}>
                  <div className="swiper-zoom-container">
                < img src={object} alt={title}/></div></SwiperSlide>
                </>
              }
              )}
            </Swiper>
              <h3>{title}</h3>
              <p> {languages} </p>
              <div className="portfolio_item-cta">
              {github === null ? null : <a href={github}className='btn'  rel='noreferrer' target='_blank'>Github</a>}
              {demo === null ? null : <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a> }
              </div>
          </article>
          )
        })
      }
    
      </div>
    </section>
  )
}

export default portfolio
