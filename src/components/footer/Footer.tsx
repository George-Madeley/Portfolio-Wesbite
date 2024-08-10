import React from "react";

import "./Footer.css";

import Button from "../button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const copyToClipboard = (e: React.ChangeEvent<HTMLInputElement>) => {
    // get the text to copy
    const text = e.target.value;
    // copy the text to the clipboard
    navigator.clipboard.writeText(text);

    // After 5 seconds, remove the check mark
    setTimeout(() => {
      const radio = document.getElementById(e.target.id) as HTMLInputElement;
      radio.checked = false;
    }, 2000);
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      text: "george.madeley@outlook.com",
      id: "personal_email",
    },
    { icon: faEnvelope, text: "gm768@bath.ac.uk", id: "school_email" },
    { icon: faPhone, text: "+44 7830 979199", id: "phone" },
  ];

  return (
    <footer className="footer">
      <div className="contact">
        {contactInfo.map((info) => (
          <div className="email-container" key={info.id}>
            <FontAwesomeIcon icon={info.icon} />
            <p>{info.text}</p>
            <input
              type="radio"
              id={info.id}
              name="contact"
              value={info.text}
              onChange={(e) => copyToClipboard(e)}
            />
            <label htmlFor={info.id} className="copy-icon">
              <FontAwesomeIcon icon={faCheck} />
              <FontAwesomeIcon icon={faCopy} />
            </label>
          </div>
        ))}
      </div>
      <div className="social">
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
    </footer>
  );
}
