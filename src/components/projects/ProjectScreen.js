import React from "react";
import { ProjectList } from "./ProjectList";
import "./Projects.css";
export const ProjectScreen = () => {
  return (
    <section id="#projects" className="projects-main container">
      <div className="title">
        <h1>Public Projects</h1>
      </div>
      <ProjectList />
    </section>
  );
};
