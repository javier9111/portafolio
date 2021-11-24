import React from "react";
import { skillsImages } from "../../helpers/skillsImages";
export const SkillCard = ({ id, name, exp }) => {
  return (
    <div className="skill-card">
      <div className="card-top">
        <span className={`circle-small ${exp}`}></span>
      </div>
      <div className="card-body">
        <img src={skillsImages(`./${id}.png`).default} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};
