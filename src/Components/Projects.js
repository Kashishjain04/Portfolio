import React from "react";
import ProjectCard from "./SmallComponents/ProjectCard";
import "../assets/css/Projects.css";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="work section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects__container bd-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.link}
            name={project.name}
            link={project.link}
            repo={project.repo}
            src={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
