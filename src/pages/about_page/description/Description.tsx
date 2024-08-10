import React from "react";
import "./Description.css";

export default function Description(props: any) {
  return (
    <div className="about-description">
      {props.content.map((paragraph: string, index: number) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
}
