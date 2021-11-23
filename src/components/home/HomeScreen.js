import React from "react";
import perfil from "../../assets/images/perfil.jpg";
import "./Home.css";
export const HomeScreen = () => {
  return (
    <section id="home" className="home-container container">
      <div className="picture-container">
        <img src={perfil} alt="" className="profile-picture" />
      </div>
      <div className="sum-prof-container">
        <h1> Hola, Soy Javier Robles</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          in egestas erat imperdiet sed euismod nisi. Tempus imperdiet nulla
          malesuada pellentesque elit eget. Auctor augue mauris augue neque
          gravida in. A cras semper auctor neque.
        </p>
      </div>
    </section>
  );
};
