import React from "react";
import "../assets/css/Skills.css";
import ScrollReveal from "../utils/ScrollReveal";
import SkillCard from "./SmallComponents/SkillCard";

const Skills = () => (
  <div className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container bd-grid">
      <div>
        <ScrollReveal>
          <h2 className="skills__subtitle">Profesional Skills</h2>
        </ScrollReveal>
        <SkillCard name="HTML5" level={90} iconClass="bxl-html5" />
        <SkillCard name="CSS3" level={90} iconClass="bxl-css3" />
        <SkillCard name="JAVASCRIPT" level={90} iconClass="bxl-javascript" />
        <SkillCard name="REACT" level={70} iconClass="bxl-react" />
        <SkillCard name="REDUX" level={70} iconClass="bxl-redux" />
        <SkillCard name="FIREBASE" level={70} iconClass="bxl-firebase" />
        <SkillCard name="MERN" level={65} iconClass="bxl-nodejs" />
      </div>

      {/* <div>
        <ScrollReveal delay={600}>
          <img src="assets/img/work3.jpg" alt="" className="skills__img" />
        </ScrollReveal>
      </div> */}
    </div>
  </div>
);

export default Skills;
