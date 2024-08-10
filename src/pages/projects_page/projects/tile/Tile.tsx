import React from "react";
import "./Tile.css";

import Info from "./info/Info";
import Expansion from "./expansion/Expansion";

export default function Tile(props: any) {
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
        isSelected={props.isSelected}
        handleChange={props.handleChange}
      />
      <input type="checkbox" checked={props.isSelected} readOnly />
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
