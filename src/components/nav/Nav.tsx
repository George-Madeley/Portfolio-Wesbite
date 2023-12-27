import React from "react";
import './Nav.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
              <FontAwesomeIcon icon={faHome} className="nav-icon"/>
              <p className="nav-text">Home</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faFileCode} className="nav-icon"/>
              <p className="nav-text">Projects</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} className="nav-icon"/>
              <p className="nav-text">About Me</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="nav-icon"/>
              <p className="nav-text">Contact</p>
            </li>
        </ul>
    </nav>
  )
}
