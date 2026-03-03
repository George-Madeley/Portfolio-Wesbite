import { getLanguages, getRepo } from "~/api/github";
import { Repo } from "~/types";

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
  const repositories: FeaturedRepo[] = await Promise.all(
    repos.map(async (repo: Repo) => {
      const repoDetails = await getRepo(repo.owner, repo.name);
      const languages = await getLanguages(repo.owner, repo.name);
      const languageList = Object.keys(languages);
      return {
        ...repoDetails,
        languages: languageList,
      };
    })
  );

  return (
    <FeaturedRepos caption={caption} heading={heading} repos={repositories} />
  );
}
