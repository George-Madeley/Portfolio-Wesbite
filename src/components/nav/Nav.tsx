import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

import Toggle from "./toggle/Toggle";
import Button from "../button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFileCode,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav(props: any) {
  return (
    <nav>
      <ul>
        <li>
          <Button>
            <Link to="/" className="link">
              <FontAwesomeIcon icon={faHome} />
              <p className="nav-text">Home</p>
            </Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/projects" className="link">
              <FontAwesomeIcon icon={faFileCode} />
              <p className="nav-text">Projects</p>
            </Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about" className="link">
              <FontAwesomeIcon icon={faUser} />
              <p className="nav-text">About Me</p>
            </Link>
          </Button>
        </li>
        <li>
          <FontAwesomeIcon icon={faSun} />
          <Toggle
            state={props.isDarkMode}
            handleChange={props.handleDarkMode}
          />
          <FontAwesomeIcon icon={faMoon} />
        </li>
      </ul>
    </nav>
  );
}
