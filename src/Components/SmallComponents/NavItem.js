import React from "react";

const NavItem = ({ to, name }) => {
  const navLinkAction = () => {
    document.getElementById("nav-menu").classList.remove("show");
  };
  return (
    <li className="nav__item">
      <a href={to} className="nav__link" onClick={navLinkAction}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
