import React from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
