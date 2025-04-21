import React, { PropsWithChildren } from "react";
import "./ProjectTileBody.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeCommit,
  faCodeFork,
  faEye,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

interface ProjectTileBodyProps {
  languages: string[];
  isPublic: boolean;
  stars: number;
  commits: number;
  forks: number;
  watchers: number;
}

export function ProjectTileBody(
  props: PropsWithChildren<ProjectTileBodyProps>
) {
  return (
    <div className="expansion-container">
      <div className="expansion">
        <div className="description-container">
          <div className="description">{props.children}</div>
        </div>
        <ul className="language-container">
          {props.languages.map((language: string, index: number) => {
            return (
              <li key={index} className="language">
                {language}
              </li>
            );
          })}
        </ul>
        <aside className="stats-container">
          <div className="visibility-container">
            {props.isPublic ? (
              <div className="public">
                <FontAwesomeIcon icon={faLockOpen} />
                <p>Public</p>
              </div>
            ) : (
              <div className="private">
                <FontAwesomeIcon icon={faLock} />
                <p>Private</p>
              </div>
            )}
          </div>
          <div className="stars-container">
            <FontAwesomeIcon icon={faStar} />
            <p>{props.stars}</p>
          </div>
          <div className="commits-container">
            <FontAwesomeIcon icon={faCodeCommit} />
            <p>{props.commits}</p>
          </div>
          <div className="fork-container">
            <FontAwesomeIcon icon={faCodeFork} />
            <p>{props.forks}</p>
          </div>
          <div className="watchers-container">
            <FontAwesomeIcon icon={faEye} />
            <p>{props.watchers}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
