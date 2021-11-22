import React from "react";
import perfil from "../../assets/images/perfil.jpg";
import "./Home.css";
export const HomeScreen = () => {
  return (
    <div className="home-container">
      <div className="picture-container">
        <img src={perfil} alt="" className="profile-picture" />
      </div>
    </div>
  );
};
