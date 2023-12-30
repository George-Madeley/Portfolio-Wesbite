import React from "react";
import './Nav.css';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
              <Link to='/' className="link">
                <FontAwesomeIcon icon={faHome} className="nav-icon"/>
                <p className="nav-text">Home</p>
              </Link>
            </li>
            <li>
              <Link to='/projects' className="link">
                <FontAwesomeIcon icon={faFileCode} className="nav-icon"/>
                <p className="nav-text">Projects</p>
              </Link>
            </li>
            <li>
              <Link to='/about' className="link">
                <FontAwesomeIcon icon={faUser} className="nav-icon"/>
                <p className="nav-text">About Me</p>
              </Link>
            </li>
            <li>
              <Link to='/contact' className="link">
                <FontAwesomeIcon icon={faEnvelope} className="nav-icon"/>
                <p className="nav-text">Contact</p>
              </Link>
            </li>
        </ul>
    </nav>
  )
}
