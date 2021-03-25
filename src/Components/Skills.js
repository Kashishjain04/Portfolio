import React from "react";
import "../assets/css/Skills.css";
import SkillCard from "./SmallComponents/SkillCard";

const Skills = () => (
  <div className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container bd-grid">
      <div>
        <SkillCard name="HTML5" level={90} iconClass="bxl-html5" />
        <SkillCard name="CSS3" level={90} iconClass="bxl-css3" />
        <SkillCard name="JAVASCRIPT" level={90} iconClass="bxl-javascript" />
        <SkillCard name="REACT" level={70} iconClass="bxl-react" />
        <SkillCard name="REDUX" level={70} iconClass="bxl-redux" />
        <SkillCard name="FIREBASE" level={70} iconClass="bxl-firebase" />
        <SkillCard name="MERN" level={65} iconClass="bxl-nodejs" />
      </div>
    </div>
  </div>
);

export default Skills;
