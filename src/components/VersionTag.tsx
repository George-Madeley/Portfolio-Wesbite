import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Chip, { ChipProps } from "@mui/material/Chip";

import gitHubFetch from "~/api/github";

interface VersionTagProps extends ChipProps {
  owner: string;
  repo: string;
}

export default async function VersionTag(props: VersionTagProps) {
  const { owner, repo, ...chipProps } = props;

  const tags = await gitHubFetch("GET /repos/{owner}/{repo}/tags", {
    owner: owner,
    repo: repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!tags.success || tags.data.at(0) === undefined) {
    return <Chip icon={<ErrorOutlineIcon />} label="Error" />;
  }
  return <Chip {...chipProps} label={tags.data.at(0)?.name ?? "N/A"} />;
}
