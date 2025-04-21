import "./Footer.css";

import React from "react";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterProps {
  links?: { name: string; url: string }[];
  languages?: string[];
}

export function Footer(props: FooterProps) {
  console.debug("Links type:", typeof props.links);

  return (
    <div className="card-footer">
      <ul className="project-links">
        {props.links &&
          props.links.map((link: any, index: number) => {
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
        {props.languages &&
          props.languages.map((language: any, index: number) => {
            return <li key={index}>{language}</li>;
          })}
      </ul>
    </div>
  );
}
