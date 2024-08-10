import React from "react";
import "./Socials.css";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Button from "../../../../components/button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials() {
  return (
    <div className="hero-socials">
      <div className="button-container">
        <Button>
          <a
            href="https://github.com/George-Madeley"
            target="_blank"
            rel="noreferrer"
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
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <p>LinkedIn</p>
          </a>
        </Button>
      </div>
    </div>
  );
}
