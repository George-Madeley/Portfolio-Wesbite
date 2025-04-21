import "./CardHeading.css";

import React from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardHeadingProps {
  position: string;
  company: string;
  companyLink?: string;
}

export function CardHeading(props: CardHeadingProps) {
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
