import React from "react";
import { skills } from "../../data/skills";
import { SkillCard } from "./SkillCard";
export const SkillList = () => {
  return (
    <div className="skill-wrapper">
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};
