import "./Nav.css";

import Link from "next/link";
import React from "react";

import {
  faFileCode,
  faHome,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../button";
import { ToggleDarkMode } from "./ToggleDarkmode";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Button>
            <Link className="link" href="/">
              <FontAwesomeIcon icon={faHome} />
              <p className="nav-text">Home</p>
            </Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link className="link" href="/projects">
              <FontAwesomeIcon icon={faFileCode} />
              <p className="nav-text">Projects</p>
            </Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link className="link" href="/about">
              <FontAwesomeIcon icon={faUser} />
              <p className="nav-text">About Me</p>
            </Link>
          </Button>
        </li>
        <li>
          <FontAwesomeIcon icon={faSun} />
          <ToggleDarkMode />
          <FontAwesomeIcon icon={faMoon} />
        </li>
      </ul>
    </nav>
  );
}
