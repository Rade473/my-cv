import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'


function App() {
  return (
    <>
     <Header/>
     <Nav />
     <About/>
     <Experience/>
     <Portfolio />
     <Contact />
    </>
  )
}

export default App
