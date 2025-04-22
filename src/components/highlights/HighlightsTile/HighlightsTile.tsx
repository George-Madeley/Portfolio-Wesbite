import "./HighlightsTile.css";

import Image from "next/image";
import React from "react";
import thumbnail from "~/../public/code-thumbnail.png";
import { Button } from "~/components/button";
import { components } from "@octokit/openapi-types";

interface HighlightsTileProps {
  repository: components["schemas"]["full-repository"] & {
    languages: string[];
  };
}

export function HighlightsTile(props: HighlightsTileProps) {
  const { repository } = props;

  return (
    <div className="tile">
      <div className="content-container">
        <Image alt="thumbnail" src={thumbnail} />
        <div className="language-container">
          {repository.languages.map((language: string, index: number) => {
            return (
              <div className="language" key={index}>
                <p>{language}</p>
              </div>
            );
          })}
        </div>
        <h5 className="title">{repository.name}</h5>
        <p className="description">{repository.description}</p>
      </div>
      <div className="button-container">
        <Button>
          <a href={repository.html_url} rel="noreferrer" target="_blank">
            <p>Learn More</p>
          </a>
        </Button>
      </div>
    </div>
  );
}
