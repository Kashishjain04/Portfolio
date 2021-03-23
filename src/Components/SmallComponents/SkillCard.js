import React from "react";

const SkillCard = ({ name, level, iconClass }) => {
  return (
    <div className="skills__data">
      <div className="skills__names">
        <i className={`bx skills__icon ${iconClass}`}></i>
        <span className="skills__name">{name}</span>
      </div>
      <div className="skills__bar" style={{ width: `${level}%` }}></div>
      <div>
        <span className="skills__percentage">{level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;
