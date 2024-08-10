import React from "react";
import "./Card.css";

import Heading from "./heading/Heading";
import Content from "./content/Content";
import Footer from "./footer/Footer";

export default function Card(props: any) {
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
