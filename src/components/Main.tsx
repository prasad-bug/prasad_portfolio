import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import avatarPrasad from '../assets/images/avatar_prasad.png';
import RippleGrid from './RippleGrid/RippleGrid';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="ripple-grid-background">
          <RippleGrid
            enableRainbow={false}
            gridColor="#7C3AED"
            rippleIntensity={0.1}
            gridSize={11}
            gridThickness={15}
            fadeDistance={1.5}
            vignetteStrength={1.5}
            glowIntensity={0.1}
            opacity={1}
            gridRotation={0}
            mouseInteraction
            mouseInteractionRadius={1}
          />
        </div>
        <div className="image-wrapper">
          <img src={avatarPrasad} alt="Prasad Ganesh Bhad" loading="eager" fetchPriority="high" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/prasad-bug" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/prasad-bhad-918068312/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="#/resume" target="_blank" rel="noreferrer" title="View Resume"><DescriptionOutlinedIcon /></a>
          </div>
          <h1>Prasad Ganesh Bhad</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/prasad-bug" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/prasad-bhad-918068312/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="#/resume" target="_blank" rel="noreferrer" title="View Resume"><DescriptionOutlinedIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;