"use server";

import "./ProjectDescription.css";

import React from "react";

interface ProjectDescriptionProps {
  content: string[];
}

export async function ProjectDescription(props: ProjectDescriptionProps) {
  return (
    <div className="projects-description">
      {props.content.map((paragraph: string, index: number) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
}
