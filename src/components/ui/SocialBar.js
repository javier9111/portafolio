import React from "react";
import linkedin from "../../assets/images/linkedin.png";
import githubImage from "../../assets/images/github.png";
import "./Bars.css";

export const SocialBar = () => {
  return (
    <div className="social-bar-container">
      <a href="#">
        <img src={linkedin} alt="LinkedIn" className="social-icons" />
      </a>
      <a href="#">
        <img src={githubImage} alt="github" className="social-icons" />
      </a>
    </div>
  );
};
