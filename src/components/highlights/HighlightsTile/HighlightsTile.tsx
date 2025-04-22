import "./HighlightsTile.css";

import Image from "next/image";
import React from "react";
import thumbnail from "~/../public/code-thumbnail.png";
import { Button } from "~/components/button";

interface HighlightsTileProps {
  name: string;
  description: string;
  languages: string[];
  link: string;
}

export function HighlightsTile(props: HighlightsTileProps) {
  return (
    <div className="tile">
      <div className="content-container">
        <Image src={thumbnail} alt="thumbnail" />
        <div className="language-container">
          {props.languages.map((language: string, index: number) => {
            return (
              <div key={index} className="language">
                <p>{language}</p>
              </div>
            );
          })}
        </div>
        <h5 className="title">{props.name}</h5>
        <p className="description">{props.description}</p>
      </div>
      <div className="button-container">
        <Button>
          <a href={props.link} target="_blank" rel="noreferrer">
            <p>Learn More</p>
          </a>
        </Button>
      </div>
    </div>
  );
}
