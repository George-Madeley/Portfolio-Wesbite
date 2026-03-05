import gitHubFetch from "~/api/github";

import FeaturedMetrics from "./FeaturedMetrics.client";

type AsyncFeaturedMetricsProps = {
  heading: string;
  caption: string;
  owner: string;
};

export async function AsyncFeaturedMetrics(props: AsyncFeaturedMetricsProps) {
  const getTotalNumCommits = async (owner: string) => {
    return await gitHubFetch("GET /search/commits", {
      q: `author:${owner}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };

  const getTotalIssuesCreated = async (owner: string) => {
    return await gitHubFetch("GET /search/issues", {
      q: `type:issue author:${owner}`,
      per_page: 1,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };

  const getTotalPRsCreated = async (owner: string) => {
    return gitHubFetch("GET /search/issues", {
      q: `type:pr author:${owner}`,
      per_page: 1,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };

  const getTotalNumRepos = async (owner: string) => {
    return gitHubFetch("GET /search/repositories", {
      q: `user:${owner}`,
      per_page: 1,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };

  const metrics = await Promise.all([
    getTotalNumCommits(props.owner),
    getTotalPRsCreated(props.owner),
    getTotalIssuesCreated(props.owner),
    getTotalNumRepos(props.owner),
  ]);

  return (
    <FeaturedMetrics
      caption={props.caption}
      heading={props.heading}
      metrics={[
        {
          value: metrics[0].success ? metrics[0].data.total_count : 0,
          caption: metrics[0].success ? "Total Commits" : "Failed to fetch",
        },
        {
          value: metrics[1].success ? metrics[1].data.total_count : 0,
          caption: metrics[1].success ? "PRs Created" : "Failed to fetch",
        },
        {
          value: metrics[2].success ? metrics[2].data.total_count : 0,
          caption: metrics[2].success ? "Issues Created" : "Failed to fetch",
        },
        {
          value: metrics[3].success ? metrics[3].data.total_count : 0,
          caption: metrics[3].success ? "Authored Repos" : "Failed to fetch",
        },
      ]}
    />
  );
}
