import React from "react";
import "../css/skillcard.css"

export function Skillcard({ skill }) {
    return (
        <article className="skillcard">
            <h3 className="skill-title">{skill.title}</h3>
            {
                skill.logo?
                <img className="skill-image" src={skill.logo} />
                :null
            }
        </article>
    );
}