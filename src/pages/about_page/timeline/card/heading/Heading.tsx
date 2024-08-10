import React from "react";
import "./Heading.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Heading(props: any) {
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
