import "./LoadingTile.css";

import Image from "next/image";
import React from "react";

import thumbail from "~/../public/code-thumbnail.png";

export function LoadingTile() {
  return (
    <div className="loading-tile">
      <div className="content-container">
        <Image src={thumbail} alt="thumbnail" />
        <div className="language-container loading-bar"></div>
        <div className="title loading-bar"></div>
        <div className="description loading-bar"></div>
      </div>
    </div>
  );
}
