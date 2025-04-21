import "./ProjectTileError.css";

import React from "react";

interface ProjectTileErrorProps {
  message: string;
}

export function ProjectTileError(props: ProjectTileErrorProps) {
  return (
    <div className="projects-error-tile">
      <div></div>
      <div className="title">
        <h5>Error Occurred</h5>
      </div>
      <div className="message">
        <p>{props.message}</p>
      </div>
    </div>
  );
}
