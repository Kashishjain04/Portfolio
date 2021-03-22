import React from "react";
import ScrollReveal from "../../utils/ScrollReveal";

const ProjectCard = ({ name, link, repo, src }) => (
  <ScrollReveal interval={200} className="project__img">
    <img src={src} alt="" />
    <div className="project__overlay">
      <h2 className="project__name">{name}</h2>
      <div className="project__overlayDetails">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i class="bx bx-link"></i>
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-github"></i>
          </a>
        )}
      </div>
    </div>
  </ScrollReveal>
);

export default ProjectCard;
