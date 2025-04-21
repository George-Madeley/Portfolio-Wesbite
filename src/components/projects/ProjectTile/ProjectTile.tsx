import "./ProjectTile.css";

import React, { PropsWithChildren } from "react";

import { ProjectTileBody } from "./ProjectTileBody";
import { ProjectTileHeading } from "./ProjectTileHeading";

interface TileProps {
  id: string;
  date: string;
  name: string;
  link: string;
  linkText: string;
  languages: string[];
  isPublic: boolean;
  stars: number;
  commits: number;
  forks: number;
  watchers: number;
}

export function Tile(props: PropsWithChildren<TileProps>) {
  return (
    <div className="projects-tile">
      <ProjectTileHeading
        id={props.id}
        date={props.date}
        name={props.name}
        link={props.link}
        linkText={props.linkText}
        languages={props.languages}
        isPublic={props.isPublic}
      />
      <input type="checkbox" id={props.id} readOnly />
      <ProjectTileBody
        languages={props.languages}
        isPublic={props.isPublic}
        stars={props.stars}
        commits={props.commits}
        forks={props.forks}
        watchers={props.watchers}
      >
        {props.children}
      </ProjectTileBody>
    </div>
  );
}
