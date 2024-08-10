import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export const getRepo = async (owner: string, repo: string): Promise<any> => {
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

export const getRepos = async (): Promise<any[]> => {
  try {
    const response = await octokit.request("GET /user/repos", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      affiliation: "owner,organization_member",
      visibility: "all",
      sort: "updated",
    });

    if (response.status > 299) {
      throw new Error(`Failed to fetch repos. Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getLanguages = async (
  owner: string,
  repo: string
): Promise<any> => {
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
): Promise<any[]> => {
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

    return response.data ? (response.data as any[]) : [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
