"use server";

import { getReadme } from "~/api/github";
import ErrorFallback from "~/components/ErrorFallback";
import Image from "next/image";

import Stack, { stackClasses } from "@mui/material/Stack";
import { components } from "@octokit/openapi-types";
import MuiMarkdown from "mui-markdown";
import Box from "@mui/material/Box";
import Markdown from "~/components/Markdown";
interface MarkdownProps {
  owner: string;
  repo: components["schemas"]["full-repository"];
}

export default async function ReadMeMarkdown(props: MarkdownProps) {
  try {
    const readme = (await getReadme(props.owner, props.repo.name))
      .replace(/\*\*(.*)\*\*/gm, "$1")
      .replace(/(?<!!)\[(.*?)\]\((.*?)\)/g, "$1")
      .replace(/<.*>(.*)<\/\w+>/gm, "$1");

    return (
      <Box sx={{ [`&>.${stackClasses.root}`]: { gap: 2 } }}>
        <Markdown
          imageSrc={`https://github.com/${props.owner}/${props.repo.name}/blob/${props.repo.default_branch}/`}
        >
          {readme}
        </Markdown>
      </Box>
    );
  } catch (error) {
    console.error(error);
    return <ErrorFallback error={error} />;
  }
}
