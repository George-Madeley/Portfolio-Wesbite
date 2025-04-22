"use server";

import "./Socials.css";

import React from "react";
import { Button } from "~/components/button";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function Socials() {
  return (
    <div className="hero-socials">
      <div className="button-container">
        <Button>
          <a
            href="https://github.com/George-Madeley"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
            <p>Github</p>
          </a>
        </Button>
      </div>
      <div className="button-container">
        <Button>
          <a
            href="https://www.linkedin.com/in/georgemadeleybathcompsyseng"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <p>LinkedIn</p>
          </a>
        </Button>
      </div>
    </div>
  );
}
