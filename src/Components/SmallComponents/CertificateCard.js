import React from "react";

const CertificateCard = ({ type, id, src, ...other }) => (
  <div className="certificate__img" {...other}>
    <img src={src} alt="" />
    <a href={`/certificate/${id}`} className="certificate__overlay">
      <h2 className="certificate__type">{type}</h2>
    </a>
  </div>
);

export default CertificateCard;
