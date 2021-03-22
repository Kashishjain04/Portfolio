import React from "react";
import "../assets/css/Header.css";

const Header = () => {
  const toggleNav = () => {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("show");
  };
  const navLinkAction = (e) => {
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((n) => n.classList.remove("active"));
    e.target.classList.add("active");

    document.getElementById("nav-menu").classList.remove("show");
  };

  return (
    <div className="l-header">
      <nav className="nav bd-grid">
        <div>
          <img src="icons/logo.png" alt="" className="nav__logo" />
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active"
                onClick={navLinkAction}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={navLinkAction}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={navLinkAction}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={navLinkAction}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={navLinkAction}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div onClick={toggleNav} className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
