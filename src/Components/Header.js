import React from "react";
import "../assets/css/Header.css";
import NavItem from "./SmallComponents/NavItem";
import ScrollspyNav from "react-scrollspy-nav";

const Header = () => {
  const toggleNav = () => {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("show");
  };

  return (
    <div className="l-header">
      <nav className="nav bd-grid">
        <div>
          <img src="icons/logo.png" alt="" className="nav__logo" />
        </div>
        <div className="nav__menu" id="nav-menu">
          <ScrollspyNav
            className="nav__menu"
            scrollTargetIds={[
              "home",
              "about",
              "skills",
              "projects",
              "certificates",
              "contact",
            ]}
            offset={-50}
            activeNavClass="active"
            scrollDuration="150"
          >
            <ul className="nav__list">
              <NavItem to="#home" name="Home" />
              <NavItem to="#about" name="About" />
              <NavItem to="#skills" name="Skills" />
              <NavItem to="#projects" name="Projects" />
              <NavItem to="#certificates" name="Certificates" />
              <NavItem to="#contact" name="Contact" />
            </ul>
          </ScrollspyNav>
        </div>
        <div onClick={toggleNav} className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
