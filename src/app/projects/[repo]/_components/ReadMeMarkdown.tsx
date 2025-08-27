import "katex/dist/katex.min.css";

import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { getReadme } from "~/api/github";
import ErrorFallback from "~/components/ErrorFallback";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { components } from "@octokit/openapi-types";

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

    function rewriteImageSrc(src: string) {
      // If src is a relative path (doesn't start with http)
      if (!/^https?:\/\//.test(src)) {
        return `https://github.com/${props.owner}/${props.repo.name}/blob/${props.repo.default_branch}/${src.replace(/^(\.\/|\/)/, "")}?raw=true`;
      }
      return src;
    }

    return (
      <Markdown
        components={{
          a: (elementProps) => <Typography>{elementProps.children}</Typography>,
          p: (elementProps) => <Typography>{elementProps.children}</Typography>,
          h1: (elementProps) => (
            <Typography variant="h1">{elementProps.children}</Typography>
          ),
          h2: (elementProps) => (
            <Typography variant="h2">{elementProps.children}</Typography>
          ),
          h3: (elementProps) => (
            <Typography variant="h3">{elementProps.children}</Typography>
          ),
          h4: (elementProps) => (
            <Typography variant="h4">{elementProps.children}</Typography>
          ),
          h5: (elementProps) => (
            <Typography variant="h5">{elementProps.children}</Typography>
          ),
          h6: (elementProps) => (
            <Typography variant="h6">{elementProps.children}</Typography>
          ),
          ul: (elementProps) => (
            <Typography sx={{ pl: 3 }}>
              <ul>{elementProps.children}</ul>
            </Typography>
          ),
          ol: (elementProps) => (
            <Typography sx={{ pl: 3 }}>
              <ol>{elementProps.children}</ol>
            </Typography>
          ),
          table: (elementProps) => (
            <Typography>{elementProps.children}</Typography>
          ),
          img: (elementProps) => {
            const src = rewriteImageSrc(
              typeof elementProps.src === "string" ? elementProps.src : ""
            );
            return (
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ width: "100%" }}
              >
                <img
                  alt={elementProps.alt ?? ""}
                  height={200}
                  src={src}
                  width={400}
                />
              </Stack>
            );
          },
        }}
        rehypePlugins={[rehypeKatex]}
        remarkPlugins={[remarkGfm, remarkMath]}
      >
        {readme}
      </Markdown>
    );
  } catch (error) {
    console.error(error);
    return <ErrorFallback error={error} />;
  }
}
