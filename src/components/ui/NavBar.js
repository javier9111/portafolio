import React from "react";
import "./Bars.css";
import logo from "../../assets/images/perfil-coveran.png";
export const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <div className="nav-bar-elements-container">
        <div className="nav-bar-logo-container ">
          <img src={logo} alt="Coveran" />
          <h4>Javier Robles</h4>
        </div>
        <div className="nav-bar-menu-container">
          <a href="#home" className="link">
            <h4>Home</h4>
          </a>
          <a href="#skills" className="link">
            <h4>Skills</h4>
          </a>
          <a href="#projects" className="link">
            <h4>Projects</h4>
          </a>
          <a href="#contact" className="link">
            <h4>Contact</h4>
          </a>
        </div>
      </div>
    </nav>
  );
};
