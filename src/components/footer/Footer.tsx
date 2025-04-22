import "./Footer.css";

import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../button";
import { Copy } from "../copy";

export function Footer() {
  const contactInfo = [
    {
      icon: faEnvelope,
      text: "george.madeley@outlook.com",
      id: "email",
    },
    { icon: faPhone, text: "+44 7830 979199", id: "phone" },
  ] as const;

  return (
    <footer className="footer">
      <div className="contact">
        {contactInfo.map((info) => (
          <div className="email-container" key={info.id}>
            <FontAwesomeIcon icon={info.icon} />
            <p>{info.text}</p>
            <Copy id={info.id} text={info.text} />
          </div>
        ))}
      </div>
      <div className="social">
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
    </footer>
  );
}
