import React from "react";
import { SkillList } from "./SkillList";
import "./Skills.css";
export const SkillsScreen = () => {
  return (
    <section id="skills" className="skills-container container">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="years-desc">
        <div className="year-img-container">
          <div>
            <span>1 - 2 years</span>
            <span className="circle-big kid"></span>
          </div>
          <div>
            <span>3 - 5 years</span>
            <span className="circle-big adult"></span>
          </div>
          <div>
            <span>6 or more years</span>
            <span className="circle-big oldman"></span>
          </div>
        </div>
      </div>
      <SkillList />
    </section>
  );
};
