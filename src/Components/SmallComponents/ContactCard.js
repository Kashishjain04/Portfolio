import React from "react";

const ContactCard = ({ href, iconClass }) => (
  <div className="contact__card">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`bx ${iconClass}`} />
    </a>
  </div>
);

export default ContactCard;
