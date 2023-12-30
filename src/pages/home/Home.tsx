import React from "react";
import './Home.css';

import Bio from './bio/Bio';
import Hero from './hero/Hero';
import Highlights from './highlights/Highlights';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Bio />
      <Highlights />
    </div>
  )
}
