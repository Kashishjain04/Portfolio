import React from "react";

const SkillCard = ({ name, iconClass, ...other }) => {
  return (
    <div className="skills__data" {...other}>
      <i className={`bx skills__icon ${iconClass}`}></i>
      <span className="skills__name">{name}</span>
    </div>
  );
};

export default SkillCard;
