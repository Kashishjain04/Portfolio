import React from "react";

const SkillCard = ({ name, iconClass, link, ...other }) => {
  return (
    // <div className="skills__data" {...other}>
    link ? (
      <a
        className="skills__data"
        {...other}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`bx skills__icon ${iconClass}`}></i>
        <span className="skills__name">{name}</span>
      </a>
    ) : (
      <div className="skills__data" {...other}>
        <i className={`bx skills__icon ${iconClass}`}></i>
        <span className="skills__name">{name}</span>
      </div>
    )
    // </div>
  );
};

export default SkillCard;
