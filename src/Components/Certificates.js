import React from "react";
import "../assets/css/Certificates.css";
import { certificates } from "../data";
import CertificateCard from "./SmallComponents/CertificateCard";

const Certificates = () => (
  <div className="certificates section" id="certificates">
    <h2 className="section-title">Certificates</h2>

    <div className="certificates__container bd-grid">
      {Object.entries(certificates).map((cert, index) => (
        <CertificateCard
          key={cert[0]}
          type={cert[1].type}
          id={cert[0]}
          src={cert[1].src}
          data-aos="fade-down"
          data-aos-duration={
            400 + (2000 / Object.keys(certificates).length) * index
          }
        />
      ))}
    </div>
  </div>
);

export default Certificates;
