import "./Card.css";

import React, { PropsWithChildren } from "react";

import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeading } from "./CardHeading";

interface CardProps {
  time: string;
  position: string;
  company: string;
  companyLink?: string;
  id: number;
  links: { name: string; url: string }[];
  languages: string[];
}

export function Card(props: PropsWithChildren<CardProps>) {
  return (
    <div className="timeline-card-container">
      <div className="timeline-card">
        <aside className="date">
          <h3>{props.time}</h3>
        </aside>
        <div className="content">
          <CardHeading
            position={props.position}
            company={props.company}
            companyLink={props.companyLink}
          />
          <CardBody id={props.id}>{props.children}</CardBody>
          <CardFooter links={props.links} languages={props.languages} />
        </div>
      </div>
    </div>
  );
}
