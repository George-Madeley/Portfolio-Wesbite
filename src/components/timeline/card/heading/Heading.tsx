import "./Heading.css";

import React from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeadingProps {
  position: string;
  company: string;
  companyLink?: string;
}

export function Heading(props: HeadingProps) {
  return (
    <div className="card-heading">
      <h2>{props.position}</h2>
      {props.companyLink ? (
        <a className="company-name" href={props.companyLink}>
          <h3>{props.company}</h3>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      ) : (
        <div className="company-name">
          <h3>{props.company}</h3>
        </div>
      )}
    </div>
  );
}
