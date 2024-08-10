import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Footer(props: any) {
  return (
    <div className="card-footer">
      <ul className="project-links">
        {props.links.map((link: any, index: number) => {
          return (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} />
                <p>{link.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="language-list">
        {props.languages.map((language: any, index: number) => {
          return <li key={index}>{language}</li>;
        })}
      </ul>
    </div>
  );
}
