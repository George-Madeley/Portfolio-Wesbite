"use server";

import { cache } from "react";

import octokit from "./entry";

const getNumCommitsFn = async (
  owner: string,
  repo: string
): Promise<number> => {
  try {
    const response = await octokit.request(
      "GET /repos/{owner}/{repo}/stats/contributors",
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    if (response.status > 299) {
      throw new Error(
        `Failed to fetch number of commits. Status: ${response.status}`
      );
    }

    if (Array.isArray(response.data)) {
      return response.data.reduce((acc: number, curr) => acc + curr.total, 0);
    } else {
      return response.data.total ?? 0;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNumCommits = cache(getNumCommitsFn);

const getCommitsByYearFn = async (
  owner: string,
  repo: string,
  year: number
) => {
  try {
    type Commits = Awaited<
      ReturnType<typeof octokit.rest.repos.listCommits>
    >["data"];
    let commits: Commits = [];
    let page = 1;
    const since = `${year}-01-01T00:00:00Z`;
    const until = `${year}-12-31T23:59:59Z`;

    while (true) {
      const { data } = await octokit.rest.repos.listCommits({
        owner,
        repo,
        since,
        until,
        per_page: 100,
        page,
      });
      if (data.length === 0) break;
      commits = commits.concat(data);
      page++;
    }

    // Group by date
    const dailyCounts: Record<string, number> = {};
    commits.forEach((commit) => {
      const date = commit.commit.author?.date?.slice(0, 10);
      if (date !== undefined) {
        dailyCounts[date] = (dailyCounts[date] || 0) + 1;
      }
    });

    return dailyCounts;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const getCommitsByYear = cache(getCommitsByYearFn);
