"use server";

import "./Projects.css";

import Link from "next/link";
import React, { Fragment } from "react";
import { getLanguages, getNumberOfCommits, getRepos } from "~/api/github";
import { Repository } from "~/types";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProjectList } from "./ProjectList";

interface ProjectsProps {
  page: number;
}

export async function Projects(props: ProjectsProps) {
  const content =
    (await getRepos(props.page).then(async (res) => ({
      hasPrev: res.link
        ? !!res.link
            .split(",")
            .find((link: string) => link.includes('rel="prev"'))
        : false,
      hasNext: res.link
        ? !!res.link
            .split(",")
            .find((link: string) => link.includes('rel="next"'))
        : false,
      repositories: await Promise.all(
        res.data.map((repo) =>
          Promise.all([
            getLanguages(repo.owner.login, repo.name),
            getNumberOfCommits(repo.owner.login, repo.name),
          ]).then(([languages, numberOfCommits]): Repository => {
            const languageList = Object.keys(languages);
            const newRepo: Repository = {
              ...repo,
              languages: languageList,
              num_of_commits: numberOfCommits,
            };
            return newRepo;
          })
        )
      ),
    }))) || [];

  return (
    <Fragment>
      <ProjectList repositories={content.repositories} />
      <div className="pagination">
        {content.hasPrev && (
          <Link href={`/projects?page=${props.page - 1}`}>
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </Link>
        )}
        {content.hasNext && (
          <Link href={`/projects?page=${props.page + 1}`}>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </Link>
        )}
      </div>
    </Fragment>
  );
}
