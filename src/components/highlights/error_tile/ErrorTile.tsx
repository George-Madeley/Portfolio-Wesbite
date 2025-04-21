import "./ErrorTile.css";

import Image from "next/image";
import React from "react";

import thumbail from "~/../public/thumbnail.png";

interface ErrorTileProps {
  message: string;
}

export function ErrorTile(props: ErrorTileProps) {
  return (
    <div className="error-tile">
      <div className="content-container">
        <div className="img-container">
          <Image src={thumbail} alt="thumbnail" />
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
