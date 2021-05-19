import React from "react";
import "../assets/css/About.css";
import { about, name } from "../data";

const About = () => (
  <div className="about section " id="about">
    <h2 className="section-title">About</h2>

    <div className="about__container bd-grid">
      <div className="about__img" data-aos="fade-right">
        <img src="/assets/img/about.png" alt="" />
      </div>

      <div>
        <h2 className="about__subtitle" data-aos="fade-left" data-aos-duration="750">I'am {name}</h2>
        <p className="about__text" data-aos="fade-left">{about}</p>
      </div>
    </div>
  </div>
);

export default About;
