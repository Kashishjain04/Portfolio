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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CertificatePage from "./CertificatePage";
import Certificates from "./Components/Certificates";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const HomePage = () => (
    <>
      <Header />
      <div className="l-main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </>
  );

  return (
    <div className="App">
      <ThemeToggle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/certificate/:certId"
            exact
            component={CertificatePage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
