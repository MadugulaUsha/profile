import React from 'react'
import Header from './Header'
import Intro from './Intro'
import Skills from './Skills'
import Certificates from './Certificates'
import Projects from './Projects'
import Footer from './Footer'
import '../App.css';
function Home() {
  return (
    <div className='home'>
       <Header/>
    <Intro/>
    <Skills/>
    <Certificates/>
    <Projects/>
    <Footer/></div>
  )
}

export default Home