import "./Highlights.css";

import React from "react";
import { Repo } from "~/types";

import { getLanguages, getRepo } from "../../api/github";
import { Heading } from "../heading";
import { HighlightsTile } from "./HighlightsTile";
import { HighLightsTileError } from "./HighlightsTileError";

interface HighlightsProps {
  repos: Repo[];
}

export async function Highlights(props: HighlightsProps) {
  const repositories = await Promise.all(
    props.repos.map((repo: Repo) =>
      getRepo(repo.owner, repo.name).then((repoDetails) =>
        getLanguages(repo.owner, repo.name).then((languages) => {
          const languageList = Object.keys(languages);
          const newRepo = {
            ...repoDetails,
            languages: languageList,
          };
          return newRepo;
        })
      )
    )
  );

  return (
    <div className="highlights">
      <Heading>
        <div className="heading-content">
          <h2>Top Projects</h2>
        </div>
      </Heading>
      <span className="tile-container">
        {repositories.length ? (
          repositories.map((repository, index: number) => (
            <HighlightsTile key={index} repository={repository} />
          ))
        ) : (
          <HighLightsTileError message="Failed to load highlights" />
        )}
      </span>
    </div>
  );
}
