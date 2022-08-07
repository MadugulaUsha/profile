import React from 'react'
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
import classes from './Footer.module.css';



function Footer() {
  return (
    <div className={classes.contactDetails}>
      <hr/>
<div className={classes.contact}> 
<div>Made by me <SentimentVerySatisfiedTwoToneIcon/></div>
<div><CopyrightTwoToneIcon/>Copy Right 2022<br/></div> 
<div><CallTwoToneIcon/>6281124881</div>
<div><MailOutlineTwoToneIcon/>  madugulau@gmail.com</div>
</div>
<div className={classes.icon}>
<a href= "https://github.com/MadugulaUsha" target="_blank" rel="noreferrer"><GitHubIcon/></a>
<a href="https://www.linkedin.com/in/usha-madugula-64288a1ba/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
{/* <a herf="https://www.facebook.com/people/Usha-Madugula/100084079875558/" target="_blank" rel="noopener"><FacebookIcon/></a> */}
</div>
</div>
  )
}

export default Footer