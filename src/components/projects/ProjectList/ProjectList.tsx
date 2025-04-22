"use client";

import "./ProjectList.css";

import React, { Fragment, useCallback } from "react";
import { Repository } from "~/types";

import { ProjectTileBody } from "../ProjectTileBody";
import { ProjectTileError } from "../ProjectTileError";
import { ProjectTileHeading } from "../ProjectTileHeading";

interface ProjectListProps {
  repositories: Repository[];
}

export function ProjectList(props: ProjectListProps) {
  const { repositories } = props;

  const [selectedId, setSelectedId] = React.useState<number>(0);

  const handleSelect = useCallback((id: number) => {
    setSelectedId((prevId) => (prevId === id ? 0 : id));
  }, []);

  return (
    <Fragment>
      {repositories.length ? (
        repositories.map((repository: Repository, index: number) => (
          <div className="projects-tile" key={index}>
            <ProjectTileHeading
              onSelect={handleSelect}
              repository={repository}
              selected={selectedId === repository.id}
            />
            <ProjectTileBody
              repository={repository}
              selected={selectedId === repository.id}
            >
              <h5>Description</h5>
              <p>
                {repository.description
                  ? repository.description
                  : "No description provided."}
              </p>
            </ProjectTileBody>
          </div>
        ))
      ) : (
        <ProjectTileError message="Failed to load data" />
      )}
    </Fragment>
  );
}
