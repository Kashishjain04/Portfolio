import React from "react";
import { useParams } from "react-router";
import "./assets/css/CertificatePage.css";
import { certificates } from "./data";
import ReactHtmlParser from "react-html-parser";

const CertificatePage = () => {
	const params = useParams(),
		{ certId } = params;
	const data = certificates[certId];
	return (
		<div className="certificatePage">
			<img className="certificatePage__img" src={data.src} alt="certificate" />
			<div className="certificatePage__details">
				<h1 className="certificatePage__title">{data.title}</h1>
				<p className="certificatePage_desc">{ReactHtmlParser(data.description)}</p>
				<div className="certificatePage_view">
					<a href={data.certificateLink} target="_blank" rel="noopenner noreferrer">View Asset</a>
				</div>
			</div>
		</div>
	);
};

export default CertificatePage;
