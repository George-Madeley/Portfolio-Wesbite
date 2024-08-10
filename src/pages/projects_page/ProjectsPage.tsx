import React from "react";
import "./ProjectsPage.css";

import Heading from "../../components/heading/Heading";
import Description from "./description/Description";
import Projects from "./projects/Projects";

import json from "../../content/project_page.real.json";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <Heading>
        <div className="heading-content">
          <h1>Projects</h1>
        </div>
      </Heading>
      <Description content={json.introduction} />
      <Projects />
    </div>
  );
}
