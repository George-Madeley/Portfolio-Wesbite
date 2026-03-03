"use server";

import { cache } from "react";

import octokit from "./entry";

const getTotalIssuesCreatedFn = async (owner: string): Promise<number> => {
  try {
    const response = await octokit.request("GET /search/issues", {
      q: `type:issue author:${owner}`,
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

export const getTotalIssuesCreated = cache(getTotalIssuesCreatedFn);
