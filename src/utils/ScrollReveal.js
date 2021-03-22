import React, { useEffect, useRef } from "react";

const ScrollReveal = ({ children, className, interval, delay }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      window.ScrollReveal().reveal(sectionRef.current, {
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
        interval,
        delay,
      });
    }
  }, [delay, interval]);

  return (
    <div className={className} ref={sectionRef}>
      {children}
    </div>
  );
};

export default ScrollReveal;
