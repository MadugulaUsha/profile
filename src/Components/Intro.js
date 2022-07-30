import React from 'react'
import photo from '../assets/usha1.jpg'
import classes from '../Components/Intro.module.css'
function Intro() {
  return (
    <div className={classes.intro}>
    <img src={photo} alt='ProfilePhoto'/>
    <p>I'm Usha,<br/> An aspiring web developer passionate towards latest technologies.<br/>Experienced in working with web technologies and expertise in building <br/>beautiful and responsive websites.</p>
    </div>
  )
}

export default Intro