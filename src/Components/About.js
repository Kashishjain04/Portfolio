import React from "react";
import "../assets/css/About.css";

const About = () => (
  <div className="about section " id="about">
    <h2 className="section-title">About</h2>

    <div className="about__container bd-grid">
      <div className="about__img">
        <img src="/assets/img/about.png" alt="" />
      </div>

      <div>
        <h2 className="about__subtitle">I'am Kashish</h2>
        <p className="about__text">
          Enthusiastic <b>Web Developer, Freelancer</b> eager to contribute to
          team success through hard work, attention to detail and excellent
          organizational skills. Clear understanding of Javascript, React, Redux
          and MERN. Motivated to learn, grow and excel in the Dev industry.
        </p>
      </div>
    </div>
  </div>
);

export default About;
