import "./page.module.css";

import React from "react";
import { Bio, Hero, Highlights } from "~/components";

import json from "./content.json";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Bio content={json.bio} />
      <Highlights repos={json.repos} />
    </div>
  );
}

