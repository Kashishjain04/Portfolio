import React from "react";
import "../assets/css/Skills.css";
import { skills } from "../data";
import SkillCard from "./SmallComponents/SkillCard";

const Skills = () => (
  <div className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container bd-grid">
      <h2 className="skills__subtitle">Languages</h2>
      <div className="skills__list bd-grid">
        {skills.languages.map((lang) => (
          <SkillCard
            key={lang.name}
            name={lang.name}
            iconClass={lang.iconClass}
          />
        ))}
      </div>
      <h2 className="skills__subtitle">Technologies</h2>
      <div className="skills__list bd-grid">
        {skills.technologies.map((tech) => (
          <SkillCard
            key={tech.name}
            name={tech.name}
            iconClass={tech.iconClass}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
