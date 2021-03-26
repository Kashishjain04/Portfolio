import React from "react";
import "../assets/css/Skills.css";
import SkillCard from "./SmallComponents/SkillCard";

const Skills = () => (
  <div className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container bd-grid">
      <h2 className="skills__subtitle">Languages</h2>
      <div className="skills__list bd-grid">
        <SkillCard name="HTML5" iconClass="bxl-html5" />
        <SkillCard name="CSS3" iconClass="bxl-css3" />
        <SkillCard name="JAVASCRIPT" iconClass="bxl-javascript" />
        <SkillCard name="C++" iconClass="bxl-c-plus-plus" />
        <SkillCard name="PYTHON" iconClass="bxl-python" />
      </div>
      <h2 className="skills__subtitle">Technologies</h2>
      <div className="skills__list bd-grid">
        <SkillCard name="REACT" iconClass="bxl-react" />
        <SkillCard name="REDUX" iconClass="bxl-redux" />
        <SkillCard name="FIREBASE" iconClass="bxl-firebase" />
        <SkillCard name="NODE.JS" iconClass="bxl-nodejs" />
        <SkillCard name="MONGODB" iconClass="bx-data" />
        <SkillCard name="EXPRESS" iconClass="bx-server" />
      </div>
    </div>
  </div>
);

export default Skills;
