"use server";

import React from "react";
import "./AboutDescription.css";

interface AboutDescriptionProps {
  content: string[];
}

export async function AboutDescription(props: AboutDescriptionProps) {
  return (
    <div className="about-description">
      {props.content.map((paragraph: string, index: number) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
}
