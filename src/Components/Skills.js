import React from "react";
import "../assets/css/Skills.css";
import { skills } from "../data";
import SkillCard from "./SmallComponents/SkillCard";

const Skills = () => (
  <div className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container bd-grid">
      <h2 className="skills__subtitle" data-aos="fade-down">
        Languages
      </h2>
      <div className="skills__list bd-grid">
        {skills.languages.map((lang, index) => (
          <SkillCard
            key={lang.name}
            name={lang.name}
            iconClass={lang.iconClass}
            link={lang.link}
            data-aos="fade-down"
            data-aos-duration={400 + (1000 / skills.languages.length) * index}
          />
        ))}
      </div>
      <h2 className="skills__subtitle" data-aos="fade-down">
        Technologies
      </h2>
      <div className="skills__list bd-grid">
        {skills.technologies.map((tech, index) => (
          <SkillCard
            key={tech.name}
            name={tech.name}
            iconClass={tech.iconClass}
            link={tech.link}
            data-aos="fade-down"
            data-aos-duration={
              400 + (1000 / skills.technologies.length) * index
            }
          />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
