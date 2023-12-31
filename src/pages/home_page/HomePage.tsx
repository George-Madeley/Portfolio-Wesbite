import React from "react";
import './HomePage.css';

import Bio from './bio/Bio';
import Hero from './hero/Hero';
import Highlights from './highlights/Highlights';

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Bio />
      <Highlights />
    </div>
  )
}
