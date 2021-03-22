import React from "react";
import ProjectCard from "./SmallComponents/ProjectCard";
import "../assets/css/Projects.css";

const Projects = () => {
  return (
    <div className="work section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects__container bd-grid">
        <ProjectCard
          name="Covid-19 Dashboard"
          link="https://cov19india.live"
          repo="https://github.com/Kashishjain04/covid-19"
          src="assets/img/covid.png"
        />
        <ProjectCard
          name="Bahi-Book"
          link="https://bahi-book.web.app"
          repo="https://github.com/Kashishjain04/bahi-book"
          src="https://firebasestorage.googleapis.com/v0/b/bahi-book.appspot.com/o/icon.png?alt=media&token=13344b24-3410-4047-957a-e6447432c4e7"
        />
        <ProjectCard
          name="WhatsApp Clone"
          link="https://webwhatsapp.netlify.app"
          repo="https://github.com/Kashishjain04/Whatsapp-Clone-client"
          src="assets/img/whatsapp.png"
        />
        <ProjectCard
          name="Instagram Clone"
          link="http://instagram-4.herokuapp.com/"
          repo="https://github.com/Kashishjain04/Instagram-clone"
          src="assets/img/instagram.png"
        />
        <ProjectCard
          name="Mummy Da Dhaba"
          repo="https://github.com/Kashishjain04/momkitchen_react"
          src="assets/img/Mymmydadhaba.png"
        />
      </div>
    </div>
  );
};

export default Projects;
