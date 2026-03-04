"use server";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import { stackClasses } from "@mui/material/Stack";
import { components } from "@octokit/openapi-types";

import gitHubFetch from "~/api/github";
import Markdown from "~/components/Markdown";

interface MarkdownProps {
  owner: string;
  repo: components["schemas"]["full-repository"];
}

export default async function RepoMarkdown(props: MarkdownProps) {
  const response = await gitHubFetch("GET /repos/{owner}/{repo}/readme", {
    owner: props.owner,
    repo: props.repo.name,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.success) {
    return (
      <Alert severity="error">
        <AlertTitle>Error - {response.error.name}</AlertTitle>
        {response.error.message}
      </Alert>
    );
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

  const readme = decodedContent
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
}
