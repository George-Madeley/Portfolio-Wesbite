"use server";

import { components } from "@octokit/openapi-types";
import { cache } from "react";

import octokit from "./entry";

const getRepoFn = async (
  owner: string,
  repo: string
): Promise<components["schemas"]["full-repository"]> => {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: owner,
      repo: repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (response.status > 299) {
      throw new Error(`Failed to fetch repo. Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRepo = cache(getRepoFn);

const getReposFn = async (
  options: NonNullable<Parameters<typeof octokit.request<"GET /user/repos">>[1]>
): Promise<{
  link: components["headers"]["link"] | undefined;
  data: components["schemas"]["repository"][];
}> => {
  try {
    const response = await octokit.request("GET /user/repos", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      affiliation: "owner,organization_member",
      visibility: "all",
      ...options,
    });

    if (response.status > 299) {
      throw new Error(`Failed to fetch repos. Status: ${response.status}`);
    }

    return { link: response.headers.link, data: response.data };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRepos = cache(getReposFn);

const getTotalNumReposFn = async (owner: string): Promise<number> => {
  try {
    const response = await octokit.request("GET /search/repositories", {
      q: `user:${owner}`,
      per_page: 1,
    });

    if (response.status > 299) {
      throw new Error(
        `Failed to fetch number of commits. Status: ${response.status}`
      );
    }

    return response.data.total_count;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTotalNumRepos = cache(getTotalNumReposFn);
