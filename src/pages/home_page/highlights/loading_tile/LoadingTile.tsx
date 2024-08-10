import React from "react";
import "./LoadingTile.css";

import thumbail from "../../../../img/code-thumbnail.png";

export default function LoadingTile() {
  return (
    <div className="loading-tile">
      <div className="content-container">
        <img src={thumbail} alt="thumbnail" />
        <div className="language-container loading-bar"></div>
        <div className="title loading-bar"></div>
        <div className="description loading-bar"></div>
      </div>
    </div>
  );
}
