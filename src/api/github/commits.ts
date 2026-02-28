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
