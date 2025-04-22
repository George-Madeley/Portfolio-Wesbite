import "./ProjectTileBody.css";

import React, { PropsWithChildren } from "react";
import { Repository } from "~/types";

import {
  faCodeCommit,
  faCodeFork,
  faEye,
  faLock,
  faLockOpen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectTileBodyProps {
  repository: Repository;
}

export function ProjectTileBody(
  props: PropsWithChildren<ProjectTileBodyProps>
) {
  const { repository } = props;

  return (
    <div className="expansion-container">
      <div className="expansion">
        <div className="description-container">
          <div className="description">{props.children}</div>
        </div>
        <ul className="language-container">
          {repository.languages &&
            repository.languages.map((language: string, index: number) => {
              return (
                <li key={index} className="language">
                  {language}
                </li>
              );
            })}
        </ul>
        <aside className="stats-container">
          <div className="visibility-container">
            {repository.visibility === "public" ? (
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
            <p>{repository.stargazers_count}</p>
          </div>
          <div className="commits-container">
            <FontAwesomeIcon icon={faCodeCommit} />
            <p>{repository.num_of_commits}</p>
          </div>
          <div className="fork-container">
            <FontAwesomeIcon icon={faCodeFork} />
            <p>{repository.forks}</p>
          </div>
          <div className="watchers-container">
            <FontAwesomeIcon icon={faEye} />
            <p>{repository.watchers}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
