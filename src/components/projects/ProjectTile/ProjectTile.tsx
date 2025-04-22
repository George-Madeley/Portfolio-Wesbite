import "./ProjectTile.css";

import React, { PropsWithChildren } from "react";

import { ProjectTileBody } from "./ProjectTileBody";
import { ProjectTileHeading } from "./ProjectTileHeading";
import { Repository } from "~/types";

interface ProjectTileProps {
  repository: Repository;
}

export function ProjectTile(props: PropsWithChildren<ProjectTileProps>) {
  const { repository } = props;

  return (
    <div className="projects-tile">
      <ProjectTileHeading repository={repository} />
      <input type="checkbox" id={`${repository.id}`} readOnly />
      <ProjectTileBody repository={repository}>
        {props.children}
      </ProjectTileBody>
    </div>
  );
}
