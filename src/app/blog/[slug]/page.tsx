import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import posts from "../posts";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - George Madeley`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button
        LinkComponent={Link}
        href="/blog"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Back to Blog
      </Button>

      <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
        <Typography component="h1" gutterBottom variant="h3">
          {post.title}
        </Typography>

        <Stack
          alignItems="center"
          direction="row"
          divider={<Divider flexItem orientation="vertical" />}
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Typography color="text.secondary" variant="body2">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {post.author}
          </Typography>
        </Stack>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Box
          sx={{
            "& h1": {
              fontSize: "2.5rem",
              fontWeight: 700,
              mt: 4,
              mb: 2,
            },
            "& h2": {
              fontSize: "2rem",
              fontWeight: 600,
              mt: 4,
              mb: 2,
            },
            "& h3": {
              fontSize: "1.5rem",
              fontWeight: 600,
              mt: 3,
              mb: 1.5,
            },
            "& p": {
              fontSize: "1.125rem",
              lineHeight: 1.8,
              mb: 2,
            },
            "& ul, & ol": {
              fontSize: "1.125rem",
              lineHeight: 1.8,
              pl: 3,
              mb: 2,
            },
            "& li": {
              mb: 1,
            },
            "& a": {
              color: "primary.main",
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
            },
            "& code": {
              backgroundColor: "action.hover",
              padding: "0.2em 0.4em",
              borderRadius: 1,
              fontSize: "0.9em",
              fontFamily: "monospace",
            },
            "& pre": {
              backgroundColor: "action.hover",
              padding: 2,
              borderRadius: 1,
              overflowX: "auto",
              mb: 2,
            },
            "& blockquote": {
              borderLeft: "4px solid",
              borderColor: "primary.main",
              pl: 2,
              ml: 0,
              fontStyle: "italic",
              color: "text.secondary",
            },
            "& strong": {
              fontWeight: 700,
            },
          }}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkGfm, remarkMath]}
          >
            {post.content}
          </ReactMarkdown>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Button
          LinkComponent={Link}
          href="/blog"
          startIcon={<ArrowBackIcon />}
          variant="outlined"
        >
          Back to Blog
        </Button>
      </Paper>
    </Container>
  );
}
