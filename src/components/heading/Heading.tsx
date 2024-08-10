import React from "react";
import "./Heading.css";

export default function Heading(props: any) {
  return (
    <div className="heading-container">
      <div className="heading-bg">
        <div className="heading-visible heading-split">{props.children}</div>
      </div>
      <div className="heading-visible heading-burn">{props.children}</div>
      <div className="heading-visible heading-overlay">{props.children}</div>
      <div className="heading-invisible">{props.children}</div>
    </div>
  );
}
