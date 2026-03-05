import { serializeError } from "serialize-error";

import gitHubFetch from "~/api/github";
import { Repo, Result } from "~/types";

import FeaturedRepos, { FeaturedRepo } from "./FeaturedRepos.client";

interface AsyncFeaturedReposProps {
  heading: string;
  caption: string;
  repos: Repo[];
}

export default async function AsyncFeaturedRepos({
  repos,
  caption,
  heading,
}: AsyncFeaturedReposProps) {
  const repositories = await Promise.all(
    repos.map(async (repo: Repo): Promise<Result<FeaturedRepo>> => {
      const repoDetails = await gitHubFetch("GET /repos/{owner}/{repo}", {
        owner: repo.owner,
        repo: repo.name,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      const languages = await gitHubFetch(
        "GET /repos/{owner}/{repo}/languages",
        {
          owner: repo.owner,
          repo: repo.name,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );

      if (!repoDetails.success || !languages.success) {
        return {
          success: false,
          error: serializeError(
            new Error(
              `Failed to fetch details for repo ${repo.owner}/${repo.name}`
            )
          ),
        };
      }
      return {
        success: true,
        data: {
          ...repoDetails.data,
          languages: Object.keys(languages.data),
        },
      };
    })
  );

  return (
    <FeaturedRepos caption={caption} heading={heading} repos={repositories} />
  );
}
