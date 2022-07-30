//import React, { useState } from "react";
import pdf from "../assets/Usha_Resume.pdf";
//import photo from '../assets/usha1.jpg'
import "../Components/Header.css";
// import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
// import FeedTwoToneIcon from '@mui/icons-material/FeedTwoTone';
// import AutoAwesomeMotionTwoToneIcon from '@mui/icons-material/AutoAwesomeMotionTwoTone';
//import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="heading">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark heading">
        <h3 class="navbar-brand">Usha Madugula</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div class="navbar-nav">
            
            <Link class="nav-item nav-link" to="/experience">
              Experience
            </Link>
            <Link class="nav-item nav-link" to={pdf} target="_blank">
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
