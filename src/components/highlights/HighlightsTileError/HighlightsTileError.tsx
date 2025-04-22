import "./HighlightsTileError.css";

import Image from "next/image";
import React from "react";

import thumbnail from "~/../public/thumbnail.png";

interface HighlightsTileErrorProps {
  message: string;
}

export function HighLightsTileError(props: HighlightsTileErrorProps) {
  return (
    <div className="error-tile">
      <div className="content-container">
        <div className="img-container">
          <Image src={thumbnail} alt="thumbnail" />
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
