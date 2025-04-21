import "./page.module.css";

import React from "react";
import { AboutDescription, Heading, Projects } from "~/components";

import json from "./content.json";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <Heading>
        <div className="heading-content">
          <h1>Projects</h1>
        </div>
      </Heading>
      <AboutDescription content={json.introduction} />
      <Projects />
    </div>
  );
}
