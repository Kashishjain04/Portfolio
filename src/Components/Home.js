import React from "react";
import "../assets/css/Home.css";

const Home = () => (
  <div className="home bd-grid" id="home">
    <div className="home__data">
      <h1 className="home__title">
        Hi,
        <br />
        I'am <span className="home__title-color">Kashish Jain</span>
        <br /> Web Developer
      </h1>

      <a
        href="/assets/Resume.pdf"
        className="button"
        download="Kashish Jain - Resume"
      >
        Resume
      </a>
    </div>

    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/kashishjain04/"
        target="blank"
        className="home__social-icon"
      >
        <i className="bx bxl-linkedin" />
      </a>
      <a
        href="https://github.com/Kashishjain04"
        target="blank"
        className="home__social-icon"
      >
        <i className="bx bxl-github" />
      </a>
    </div>

    <div className="home__img">
      <img src="assets/img/avatar.svg" alt="" />
    </div>
  </div>
);

export default Home;
