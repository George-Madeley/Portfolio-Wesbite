"use server";

import { cache } from "react";

import octokit from "./entry";

const getTagsFn = async (owner: string, repo: string) => {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/tags", {
      owner: owner,
      repo: repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTags = cache(getTagsFn);
