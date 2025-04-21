import React from "react";
import "./Projects.css";

import { getRepos, getLanguages, getNumberOfCommits } from "~/api/github";
import { ErrorTile } from "./error_tile";
import { Tile } from "./tile";

export async function Projects() {
  const repos =
    (await getRepos().then(
      (repos: any[]) => {
        Promise.all(
          repos.map((repo: any) => {
            return Promise.all([
              getLanguages(repo.owner.login, repo.name),
              getNumberOfCommits(repo.owner.login, repo.name),
            ]).then(
              ([languages, numberOfCommits]) => {
                const year = repo.updated_at.substring(0, 4);
                const isPublic = repo.visibility === "public";
                const languageList = Object.keys(languages);
                let commitsCount = 0;
                try {
                  commitsCount = numberOfCommits.reduce(
                    (acc: number, curr: any) => acc + curr.total,
                    0
                  );
                } catch {
                  commitsCount = 0;
                }
                const newRepo = {
                  id: repo.id,
                  isError: false,
                  name: repo.name,
                  description: repo.description,
                  html_url: repo.html_url,
                  stargazers_count: repo.stargazers_count,
                  forks_count: repo.forks,
                  watchers_count: repo.watchers_count,
                  updated_at: year,
                  isPublic: isPublic,
                  languages: languageList,
                  commits_count: commitsCount,
                };
                return newRepo;
              },
              () => {
                const year = repo.updated_at.substring(0, 4);
                const isPublic = repo.visibility === "public";
                return {
                  id: repo.id,
                  isError: false,
                  name: repo.name,
                  description: repo.description,
                  html_url: repo.html_url,
                  stargazers_count: repo.stargazers_count,
                  forks_count: repo.forks,
                  watchers_count: repo.watchers_count,
                  updated_at: year,
                  isPublic: isPublic,
                  languages: [],
                  commits_count: 0,
                };
              }
            );
          })
        ).then(
          (reposWithDetails: any[]) => {
            return reposWithDetails;
          },
          (error: Error) => {
            return [
              {
                id: 1,
                isError: true,
                message: error.message,
              },
            ];
          }
        );
      },
      (error: Error) => {
        return [
          {
            id: 1,
            isError: true,
            message: error.message,
          },
        ];
      }
    )) || [];

  return (
    <div className="projects">
      <div className="table-header">
        <p className="date">Year</p>
        <p className="title">Project</p>
        <p className="languages">Languages</p>
        <p className="visibility">Visibility</p>
        <p className="link">Link</p>
      </div>
      {repos.map((repo: any, index: number) => {
        if (repo.isError) {
          return <ErrorTile key={index} message={repo.message} />;
        }
        return (
          <Tile
            key={index}
            id={repo.id}
            date={repo.updated_at}
            name={repo.name.replace(/-/g, " ")}
            languages={repo.languages}
            isPublic={repo.isPublic}
            link={repo.html_url}
            linkText={`${repo.name}.git`}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
            watchers={repo.watchers_count}
            commits={repo.commits_count}
          >
            <h5>Description</h5>
            <p>
              {repo.description ? repo.description : "No description provided."}
            </p>
          </Tile>
        );
      })}
    </div>
  );
}
