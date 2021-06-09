import React from "react";
import "../assets/css/Skills.css";
import { skills } from "../data";
import SkillCard from "./SmallComponents/SkillCard";

const Skills = () => (
  <div className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container bd-grid">
      <div className="skills__list bd-grid">
        {skills.map((lang, index) => (
          <SkillCard
            key={lang.name}
            name={lang.name}
            iconClass={lang.iconClass}
            link={lang.link}
            data-aos="fade-down"
            data-aos-duration={400 + (1000 / skills.length) * index}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
