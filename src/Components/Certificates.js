import React from 'react'
import classes from '../Components/Certificates.module.css'
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import {Link} from 'react-router-dom'
import pdf from "../assets/udemycertificate.pdf";
import hack from '../assets/haker.png'

function Certificates() {
  return (
    <div className={classes.heading}>
        <h3>Certificates</h3>
        <ul>
            <li><LabelImportantTwoToneIcon/><Link to={pdf} target='_blank'>React-complete guide from UDEMY</Link> </li>
            <li><LabelImportantTwoToneIcon/><Link to={hack} target='_blank'>React(basic) from HakerRank</Link></li>
        </ul>

    </div>
  )
}

export default Certificates