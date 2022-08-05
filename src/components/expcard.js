import React from "react";
import '../css/expcard.css'

export function Expcard({exp}) {
    return (
        <article className="expCard">
            <h4> {exp.title} </h4>
            <p> {exp.info} </p>
            <ul>
                {
                    exp.points.map((point, i) => (<li key={i}>{point}</li>))
                }
            </ul>
        
        </article>
    );
}