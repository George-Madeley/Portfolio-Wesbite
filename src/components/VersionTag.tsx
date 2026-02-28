import Chip, { ChipProps } from "@mui/material/Chip";

import { getTags } from "~/api/github";

interface VersionTagProps extends ChipProps {
  owner: string;
  repo: string;
}

export default async function VersionTag(props: VersionTagProps) {
  const { owner, repo, ...chipProps } = props;

  const tags = await getTags(owner, repo);
  const latestTag = tags.at(0);

  if (latestTag) {
    return <Chip {...chipProps} label={latestTag.name} />;
  }
  return null;
}
