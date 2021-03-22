import React from "react";
import ScrollReveal from "../../utils/ScrollReveal";

const ContactCard = ({ href, iconClass }) => (
  <ScrollReveal interval={200}>
    <div className="contact__card">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i className={`bx ${iconClass}`} />
      </a>
    </div>
  </ScrollReveal>
);

export default ContactCard;
