import React from "react";
import "../css/educard.css";

export function Educard({edu}) {
    return (
        <article className="eduCard">
            <h4>{ edu.title }</h4>
            <p>{ edu.institute }</p>
            <p id="date">{ edu.date }</p>
        </article>
    );
}