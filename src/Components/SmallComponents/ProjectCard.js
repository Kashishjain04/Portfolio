import React from "react";

const ProjectCard = ({ name, link, repo, src }) => (
  <div className="project__img">
    <img src={src} alt="" />
    <div className="project__overlay">
      <h2 className="project__name">{name}</h2>
      <div className="project__overlayDetails">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i className="bx bx-link"></i>
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
