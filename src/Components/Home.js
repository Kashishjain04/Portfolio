import React from "react";
import "../assets/css/Home.css";
import ScrollReveal from "../utils/ScrollReveal";

const Home = () => (
  <div className="home bd-grid" id="home">
    <div className="home__data">
      <ScrollReveal>
        <h1 className="home__title">
          Hi,
          <br />
          I'am <span className="home__title-color">Kashish Jain</span>
          <br /> Web Developer
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <a
          href="/assets/Resume.pdf"
          className="button"
          download="Kashish Jain - Resume"
        >
          Resume
        </a>
      </ScrollReveal>
    </div>

    <div className="home__social">
      <ScrollReveal interval={200}>
        <a
          href="https://www.linkedin.com/in/kashishjain04/"
          target="blank"
          className="home__social-icon"
        >
          <i className="bx bxl-linkedin" />
        </a>
      </ScrollReveal>
      <ScrollReveal interval={200}>
        <a
          href="https://github.com/Kashishjain04"
          target="blank"
          className="home__social-icon"
        >
          <i className="bx bxl-github" />
        </a>
      </ScrollReveal>
    </div>

    {/* <ScrollReveal delay={400}> */}
    <ScrollReveal delay={400} className="home__img">
      <img src="assets/img/perfil.svg" alt="" />
    </ScrollReveal>
    {/* </ScrollReveal> */}
  </div>
);

export default Home;
