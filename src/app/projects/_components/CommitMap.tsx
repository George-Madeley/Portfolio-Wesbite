import { getCommitsByYearCached, getReposCached } from "~/api/github";

import Stack from "@mui/material/Stack";
import { components } from "@octokit/openapi-types";

import CommitMapClient from "./CommitMapClient";
import CommitMapPagination from "./CommitMapPagination";
import ErrorFallback from "~/components/ErrorFallback";

interface CommitMapProps {
  year: number;
  repo:
    | components["schemas"]["repository"]
    | components["schemas"]["repository"][]
    | "*";
}

export default async function CommitMap(props: CommitMapProps) {
  try {
    const repo =
      props.repo === "*"
        ? await getReposCached({
            per_page: 100,
            page: 1,
            since: `${props.year}-01-01T00:00:00Z`,
            before: `${props.year + 1}-01-01T00:00:00Z`,
          }).then((res) => res.data)
        : props.repo;

    let commits: Record<string, number> = {};
    if (Array.isArray(repo)) {
      const repoCommits = await Promise.all(
        repo
          .filter(
            (repo) =>
              // Check to ensure the repo has commits on or since the given year
              Number(repo.updated_at?.substring(0, 4) ?? 0) >= props.year &&
              // Check if ensure the repo was created on or before the given year
              Number(repo.created_at?.substring(0, 4) ?? 0) <= props.year
          )
          .map((repo) =>
            getCommitsByYearCached(repo.owner.login, repo.name, props.year)
          )
      );
      commits = repoCommits.reduce((a, b) => ({ ...a, ...b }), {});
    } else {
      if (
        // Check to ensure the repo has commits on or since the given year
        Number(repo.updated_at?.substring(0, 4) ?? 0) >= props.year &&
        // Check if ensure the repo was created on or before the given year
        Number(repo.created_at?.substring(0, 4) ?? 0) <= props.year
      ) {
        commits = await getCommitsByYearCached(
          repo.owner.login,
          repo.name,
          props.year
        );
      }
    }
    throw new Error("commit map error");

    return (
      <Stack sx={{ width: "100%", height: "100%" }}>
        <CommitMapClient dailyCounts={commits} year={props.year} />
        <CommitMapPagination
          justifyContent="end"
          sx={{ width: "100%" }}
          year={props.year}
        />
      </Stack>
    );
  } catch (error) {
    console.error(error);
    return <ErrorFallback error={error} />;
  }
}
