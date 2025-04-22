"use client";

import "./ProjectTileHeading.css";

import React, { useCallback } from "react";
import { Repository } from "~/types";

import {
  faArrowRight,
  faChevronDown,
  faLink,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectTileHeadingProps {
  repository: Repository;
  selected: boolean;
  onSelect: (id: number) => void;
}

export function ProjectTileHeading(props: ProjectTileHeadingProps) {
  const { repository } = props;

  const handleClick = useCallback(
    () => props.onSelect(props.repository.id ?? 0),
    [props]
  );

  return (
    <div className="info-container">
      <div
        className={`toggle-chevron ${props.selected ? "toggle-chevron-open" : ""}`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <p className="date">{repository.updated_at?.substring(0, 4)}</p>
      <h4 className="title">{repository.name}</h4>
      <a
        className="title-link"
        href={repository.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <p>{repository.name}</p>
        <div className="icon-container">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </a>
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
      <div className="visibility">
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
      <a href={repository.html_url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLink} />
        <p>{repository.name}.git</p>
      </a>
    </div>
  );
}
