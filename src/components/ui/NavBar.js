import React from "react";
import "./Bars.css";
import logo from "../../assets/images/perfil-coveran.png";
export const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-logo-container ">
        <img src={logo} alt="Coveran" />
        <span>Javier Robles</span>
      </div>
      <div className="nav-bar-menu-container">
        <h4>Home</h4>

        <h4>Projects</h4>

        <h4>Skills</h4>

        <h4>Contact</h4>
      </div>
    </div>
  );
};
