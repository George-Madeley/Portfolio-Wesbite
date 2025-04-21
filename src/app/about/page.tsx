import "./page.module.css";

import React from "react";
import { AboutDescription, Heading, Timeline } from "~/components";

import json from "./content.json";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Heading>
        <div className="heading-content">
          <h1>About Me</h1>
        </div>
      </Heading>
      <AboutDescription content={json.introduction} />
      <Timeline content={json.experiences} />
    </div>
  );
}
