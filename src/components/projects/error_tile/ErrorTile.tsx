import "./ErrorTile.css";

import React from "react";

interface ErrorTileProps {
  message: string;
}

export function ErrorTile(props: ErrorTileProps) {
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
