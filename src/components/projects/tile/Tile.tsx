import "./Tile.css";

import React, { PropsWithChildren } from "react";

import { Expansion } from "./expansion";
import { Info } from "./info";

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
      <Info
        id={props.id}
        date={props.date}
        name={props.name}
        link={props.link}
        linkText={props.linkText}
        languages={props.languages}
        isPublic={props.isPublic}
      />
      <input type="checkbox" id={props.id} readOnly />
      <Expansion
        languages={props.languages}
        isPublic={props.isPublic}
        stars={props.stars}
        commits={props.commits}
        forks={props.forks}
        watchers={props.watchers}
      >
        {props.children}
      </Expansion>
    </div>
  );
}
