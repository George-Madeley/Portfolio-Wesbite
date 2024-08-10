import React from "react";
import "./ErrorTile.css";

import thumbail from "../../../../img/code-thumbnail.png";

export default function ErrorTile(props: any) {
  return (
    <div className="error-tile">
      <div className="content-container">
        <div className="img-container">
          <img src={thumbail} alt="thumbnail" />
        </div>
        <div className="language-container"></div>
        <div className="title">
          <h5>Error Occured</h5>
        </div>
        <div className="description">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}
