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
            <Link href="/" className="link">
              <FontAwesomeIcon icon={faHome} />
              <p className="nav-text">Home</p>
            </Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link href="/projects" className="link">
              <FontAwesomeIcon icon={faFileCode} />
              <p className="nav-text">Projects</p>
            </Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link href="/about" className="link">
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
