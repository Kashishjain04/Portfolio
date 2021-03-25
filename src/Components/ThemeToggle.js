import React, { useEffect } from "react";
import "../assets/css/ThemeToggle.css";

const ThemeToggle = () => {
  const htmlEl = document.querySelector("html");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "0";
    console.log(localTheme);
    if (localTheme) {
      htmlEl.classList.add("theme" + localTheme);
      htmlEl.setAttribute("theme", localTheme);
    }
  }, [htmlEl]);

  const changeTheme = () => {
    const currentTheme = htmlEl.attributes.theme.nodeValue;
    const newTheme = String((Number(currentTheme) + 1) % 3);
    console.log(currentTheme);
    console.log(newTheme);
    htmlEl.classList.remove("theme" + currentTheme);
    htmlEl.classList.add("theme" + newTheme);
    htmlEl.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <>
      <div className="themeToggle">
        <div className="firstHalf"></div>
        <div className="secondHalf"></div>
      </div>
      <div onClick={changeTheme} className="themeArrow">
        {/* &#10515; */}
        <i className="bx bxs-down-arrow"></i>
      </div>
    </>
  );
};

export default ThemeToggle;
