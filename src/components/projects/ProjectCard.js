import React from "react";
import { projectImages } from "../../helpers/projectImages";
export const ProjectCard = ({ id, name, url }) => {
  return (
    <div className="project-card" href={url}>
      <div className="project-card-body">
        <img src={projectImages(`./${id}.png`).default} alt={name} />
      </div>
      <div className="project-card-bottom">
        <h4>{name}</h4>
      </div>
    </div>
  );
};
