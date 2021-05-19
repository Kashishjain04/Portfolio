import React from "react";

const ContactCard = ({ href, iconClass, ...other }) => (
  <div className="contact__card" {...other}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`bx ${iconClass}`} />
    </a>
  </div>
);

export default ContactCard;
