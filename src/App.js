import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ScrollReveal from "scrollreveal";
import "./assets/css/Variables.css";
import "./assets/css/Main.css";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });

    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 400 });
    sr.reveal(".about__text", { delay: 400 });

    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", {});
    sr.reveal(".skills__data", { interval: 200 });
    sr.reveal(".skills__img", { delay: 600 });

    sr.reveal(".project__img", { interval: 200 });

    sr.reveal(".contact__card", { interval: 200 });
  }, []);

  return (
    <div className="App">
      <ThemeToggle />
      <Header />
      <div className="l-main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
