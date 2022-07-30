import React from 'react'
import classes from './Projects.module.css'
import todo from '../assets/todo.png'
import book from '../assets/bookl.png'
import food from '../assets/image1.png'
import login from '../assets/login.png'
import { Link } from 'react-router-dom'
const projects=[
  {id:1,Name:'Books Library',Dis:'It shows all the books in Library with status of read or not read.Developed using ReactJS,JS,CSS,Bootstrap,ReactPagination',img:book},
  {id:2,Name:'Food App',Dis:'It shows all the available meals tha can be added to cart.Developed using ReactJs,CSS,ReactRouting',img:food},
  {id:3,Name:'ToDo List',Dis:"Here we cann write all the list of TODO's.Develpoed using ReactJS,CSS,JS",img:todo},
  {id:4,Name:'Form validations',Dis:'Login Form with validations.Developed using ReactJS,CSS,JS',img:login}
]

function Projects() {
  return (
    <div className={classes.pro}>
      <h3><Link to='/projects'>Projects</Link></h3>
    <div className={classes.Project}>  
    {projects.map((details)=>{
      return <ul className={classes.card}>
        {/* <li><img src={details.img} alt='name'/></li> */}
        <li><h2>{details.Name}</h2></li>
        <li>{details.Dis}</li>
        
      </ul>
    })}
    </div>
    </div>
  )
}

export default Projects