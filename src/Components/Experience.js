import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Experience.css'

function Experience() {
  return (
    <div>
    <div className='headingg' >
        <h1>Experience</h1>
        <h6>Me started working as JUNIOR FRONT END DEVELOPER</h6>
        <p><button>HCL Technologies</button></p>
        <p><CalendarMonthIcon/>21 Oct,2020-Present</p>
        <p><LocationOnIcon/>Noida</p>
        </div>
      
        <div className='projects'>
     <h1>Projects</h1>
     <hr/>
     <div>
        <h5>Name:LULULEMON</h5>
        <h6>Responsibility</h6>
       <ul>
        <li>Developed a custom application using ReactJs</li>
        <li>Understanding and implementing required changes</li>
        <li>Implementation of unit Testing for all components </li>
       </ul>
       <h6>Technologies</h6>
       <div>
       <button>HTML</button>  <button>CSS</button>  <button>JS</button>  <button>REACTJS</button>
       </div>
       </div>
       <hr/>
       <div>
        <h5>Name:RETAILER PORTAL</h5>
        <h6>Responsibility</h6>
       <ul>
        <li>UI development</li>
        <li>Understanding and implementing required changes</li>
       </ul>
       <h6>Technologies</h6>
       <div>
       <button>HTML</button>  <button>CSS</button>  <button>JS</button>  <button>REACTJS</button> <button>BOOTSTRAP</button>
       </div>
       </div>
        </div>
        </div>
  )
}

export default Experience