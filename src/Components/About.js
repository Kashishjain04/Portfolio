import React from "react";
import "../assets/css/About.css";
import { about, name } from "../data";

const About = () => (
  <div className="about section " id="about">
    <h2 className="section-title">About</h2>

    <div className="about__container bd-grid">
      <div className="about__img">
        <img src="/assets/img/about.png" alt="" />
      </div>

      <div>
        <h2 className="about__subtitle">I'am {name}</h2>
        <p className="about__text">{about}</p>
      </div>
    </div>
  </div>
);

export default About;
