import "./ProjectTile.css";

import React, { PropsWithChildren } from "react";

import { ProjectTileBody } from "./ProjectTileBody";
import { ProjectTileHeading } from "./ProjectTileHeading";
import { Repository } from "~/types";

interface ProjectTileProps {
  repository: Repository;
  projectId: number;
}

export function ProjectTile(props: PropsWithChildren<ProjectTileProps>) {
  const { repository } = props;

  return (
    <div className="projects-tile">
      <ProjectTileHeading repository={repository} />
      <ProjectTileBody
        repository={repository}
        selected={props.projectId === repository.id}
      >
        {props.children}
      </ProjectTileBody>
    </div>
  );
}
