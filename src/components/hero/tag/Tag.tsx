"use server";

import "./Tag.css";

import React from "react";

export async function Tag() {
  return (
    <div className="hero-tag">
      <h5 className="hero-tag-text">
        Masters of Computer Systems Engineering student at the University of
        Bath,
      </h5>
      <h5 className="hero-tag-text">
        Full Stack Developer | Machine Learning Engineer | Game Developer
      </h5>
    </div>
  );
}
