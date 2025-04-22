"use server";

import { Octokit } from "octokit";
import { components } from "@octokit/openapi-types";

const octokit = new Octokit({
  auth: process.env.GH_API_TOKEN,
});

export const getRepo = async (
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

export const getRepos = async (
  page: number
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
      sort: "updated",
      page: page,
      per_page: 15,
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

export const getLanguages = async (
  owner: string,
  repo: string
): Promise<Record<string, number>> => {
  try {
    const response = await octokit.request(
      "GET /repos/{owner}/{repo}/languages",
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    if (response.status > 299) {
      throw new Error(`Failed to fetch languages. Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNumberOfCommits = async (
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
