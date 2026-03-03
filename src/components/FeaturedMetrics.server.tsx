import {
  getTotalIssuesCreated,
  getTotalNumCommits,
  getTotalNumRepos,
  getTotalPRsCreated,
} from "~/api/github";

import FeaturedMetrics from "./FeaturedMetrics.client";

type AsyncFeaturedMetricsProps = {
  heading: string;
  caption: string;
  owner: string;
};

export async function AsyncFeaturedMetrics(props: AsyncFeaturedMetricsProps) {
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
          value: metrics[0],
          caption: "Total Commits",
        },
        {
          value: metrics[1],
          caption: "PRs Created",
        },
        {
          value: metrics[2],
          caption: "Issues Created",
        },
        {
          value: metrics[3],
          caption: "Authored Repos",
        },
      ]}
    />
  );
}
