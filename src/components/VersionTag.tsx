import React from "react";
import { getTags } from "~/api/github";

import Chip, { ChipProps } from "@mui/material/Chip";

interface VersionTagProps extends ChipProps {
  owner: string;
  repo: string;
}

export default async function VersionTag(props: VersionTagProps) {
  const { owner, repo, ...chipProps } = props;

  try {
    const tags = await getTags(owner, repo);
    const latestTag = tags.at(0);

    if (latestTag) {
      return <Chip {...chipProps} label={latestTag.name} />;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
