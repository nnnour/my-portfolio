import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import NourImage from '../assets/images/Nour.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={NourImage} alt="Avatar" style={{ width: "400px", height: "400px", objectFit: "cover" }} />


        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nnnour" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nour-elaifia-82886a163/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nour Elaifia</h1>
          <p style={{ fontSize: "20px" }}> Computer Science and Business Double Major Student </p>
          <p style={{ fontSize: "20px" }}> Software Engineer | Aspiring Product Manager </p>


          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;