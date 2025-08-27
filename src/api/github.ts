"use server";

import { Octokit } from "octokit";
import { components } from "@octokit/openapi-types";
import { cache } from "react";

const octokit = new Octokit({
  auth: process.env.GH_API_TOKEN,
});

/* -------------------------------- get repo -------------------------------- */

const getRepo = async (
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

export const getRepoCached = cache(getRepo);

/* -------------------------------- get repos ------------------------------- */

const getRepos = async (
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

export const getReposCached = cache(getRepos);

/* ----------------------------- get repo readme ---------------------------- */

const getRepoReadme = async (owner: string, repo: string): Promise<string> => {
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

export const getRepoReadmeCached = cache(getRepoReadme);

/* ------------------------------ get languages ----------------------------- */

const getLanguages = async (
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

export const getLanguagesCached = cache(getLanguages);

/* ------------------------------- get commits ------------------------------ */

const getNumberOfCommits = async (
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

export const getNumberCommitsCached = cache(getNumberOfCommits);

/* --------------------------- get commits by year -------------------------- */

const getCommitsByYear = async (owner: string, repo: string, year: number) => {
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

export const getCommitsByYearCached = cache(getCommitsByYear);
