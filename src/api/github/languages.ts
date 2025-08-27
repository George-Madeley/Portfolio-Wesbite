"use server";

import { cache } from "react";

import octokit from "./entry";

const getLanguagesFn = async (
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

export const getLanguages = cache(getLanguagesFn);
