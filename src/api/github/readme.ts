"use server";

import { cache } from "react";

import octokit from "./entry";

const getReadmeFn = async (owner: string, repo: string): Promise<string> => {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/readme", {
      owner,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (response.status > 299) {
      throw new Error(`Failed to fetch README. Status: ${response.status}`);
    }

    // The content is base64 encoded
    const { content, encoding } = response.data;
    let decodedContent = "";

    if (encoding === "base64") {
      // If in browser, use atob
      decodedContent = atob(content.replace(/\n/g, ""));
      // If in Node.js, use: decodedContent = Buffer.from(content, "base64").toString("utf-8");
    } else {
      decodedContent = content;
    }

    return decodedContent;
  } catch {
    return "";
  }
};

export const getReadme = cache(getReadmeFn);
