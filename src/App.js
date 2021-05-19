import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./assets/css/Variables.css";
import "./assets/css/Main.css";
import ThemeToggle from "./Components/ThemeToggle";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });    
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
