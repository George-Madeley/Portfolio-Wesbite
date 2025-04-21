import "./Highlights.css";

import React from "react";
import { Repo } from "~/types";

import { getLanguages, getRepo } from "../../api/github";
import { Heading } from "../heading";
import { ErrorTile } from "./error_tile";
import { Tile } from "./tile";

interface HighlightsProps {
  repos: Repo[];
}

export async function Highlights(props: HighlightsProps) {
  const content = await Promise.all(
    props.repos.map((repo: Repo) => {
      return getRepo(repo.owner, repo.name).then((repoDetails) => {
        return Promise.all([getLanguages(repo.owner, repo.name)]).then(
          ([languages]) => {
            const languageList = Object.keys(languages);
            const newRepo = {
              id: repoDetails.id,
              name: repoDetails.name,
              description: repoDetails.description,
              html_url: repoDetails.html_url,
              languages: languageList,
            };
            return newRepo;
          },
          (error: Error) => {
            console.error(error ?? "Error occured");
            const newRepo = {
              isError: true as boolean,
              message: error.message,
            };
            return newRepo;
          }
        );
      });
    })
  ).then(
    (responseData: any[]) => {
      return responseData;
    },
    (error: Error) => {
      console.log(error);
      console.error(error ?? "Error occured");
      return [
        {
          isError: true as boolean,
          message: error.message,
        },
      ];
    }
  );

  return (
    <div className="highlights">
      <Heading>
        <div className="heading-content">
          <h2>Top Projects</h2>
        </div>
      </Heading>
      <span className="tile-container">
        {content.map((repo: any, index: number) => {
          if (repo.isError) {
            return <ErrorTile key={index} message={repo.message} />;
          }
          return (
            <Tile
              key={index}
              name={repo.name}
              description={repo.description}
              link={repo.html_url}
              languages={repo.languages}
            />
          );
        })}
      </span>
    </div>
  );
}
