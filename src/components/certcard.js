import React from "react";
import "../css/certcard.css"

export function Certcard({ cert }) {
    return (
        <article className="certCard">
            <h3 id="cert-name">{cert.title}</h3>
            <p id="auth">Issuing Authority: {cert.auth}</p>
            <p id="date">Date issued: {cert.date}</p>
            <p id="cert_url"><a target='_blank' href={cert.url}>View Credential</a></p>
        </article>
    )
}