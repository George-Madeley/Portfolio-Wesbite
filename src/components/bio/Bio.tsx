import "./Bio.css";

import React from "react";

interface BioProps {
  content: string[];
}

export function Bio(props: BioProps) {
  return (
    <div className="bio">
      <span className="bio-info">
        <div className="bio-text">
          {props.content.map((paragraph: string, index: number) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </span>
    </div>
  );
}
