import React from "react";
import "./ErrorTile.css";

export default function ErrorTile(props: any) {
  return (
    <div className="projects-error-tile">
      <div></div>
      <div className="title">
        <h5>Error Occured</h5>
      </div>
      <div className="message">
        <p>{props.message}</p>
      </div>
    </div>
  );
}
