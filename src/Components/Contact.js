import React from "react";
import "../assets/css/Contact.css";
import ContactCard from "./SmallComponents/ContactCard";

const Contact = () => (
  <div className="contact section" id="contact">
    <h2 className="section-title">Contact</h2>
    <div className="contact__container bd-grid">
      <ContactCard
        href="mailto:jainabhishek7204@gmail.com"
        iconClass="bx-mail-send"
        data-aos="fade-down"
        data-aos-duration="600"
      />
      <ContactCard
        href="https://www.linkedin.com/in/kashishjain04/"
        iconClass="bxl-linkedin"
        data-aos="fade-down"
        data-aos-duration="1000"
      />
      <ContactCard
        href="https://github.com/Kashishjain04"
        iconClass="bxl-github"
        data-aos="fade-down"
        data-aos-duration="1400"
      />
    </div>
  </div>
);

export default Contact;
