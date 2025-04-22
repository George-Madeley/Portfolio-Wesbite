import "./Hero.css";

import Image from "next/image";
import React from "react";

import { Heading } from "../heading";
import portrait from "~/../public/hero.png";
import { Socials } from "./socials";
import { Tag } from "./tag";

export function Hero() {
  return (
    <header className="hero">
      <Heading>
        <div className="heading-content">
          <p>The Portfolio of</p>
          <h1>George Madeley</h1>
        </div>
      </Heading>
      <div className="hero-image-container">
        <Image className="hero-image" src={portrait} alt="George Madeley" />
      </div>
      <Tag />
      <Socials />
    </header>
  );
}
