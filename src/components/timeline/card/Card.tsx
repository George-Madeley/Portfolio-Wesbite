import "./Card.css";

import React, { PropsWithChildren } from "react";

import { Content } from "./content";
import { Footer } from "./footer";
import { Heading } from "./heading";

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
          <Heading
            position={props.position}
            company={props.company}
            companyLink={props.companyLink}
          />
          <Content id={props.id}>{props.children}</Content>
          <Footer links={props.links} languages={props.languages} />
        </div>
      </div>
    </div>
  );
}
