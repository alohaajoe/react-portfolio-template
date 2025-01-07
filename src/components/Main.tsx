import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePicture from '../assets/images/Joe.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePicture} alt="Joelina Haseloh" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a className="no-icon" href="https://www.linkedin.com/in/joelina-haseloh-540698269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Joe</h1>
          <p>Moin und Willkommen auf meinem Portfolio</p>

          <div className="mobile_social_icons">
            <a className="no-icon" href="https://www.linkedin.com/in/joelina-haseloh-540698269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;