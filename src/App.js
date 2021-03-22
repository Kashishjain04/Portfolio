import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import "./assets/css/Variables.css";
import "./assets/css/Main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="l-main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
