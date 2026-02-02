import Link from "next/link";
import type { Metadata } from "next";

import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import BlendedHeading from "~/components/BlendedHeading";

import posts from "./posts";

export const metadata: Metadata = {
  title: "Blog - George Madeley",
  description:
    "Articles and tutorials about software development, Linux, and technology.",
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <BlendedHeading
        Icon={ArticleIcon}
        id="blog-heading"
        sx={{ mb: 6 }}
        text="Blog"
      />

      <Stack spacing={4}>
        {sortedPosts.map((post) => (
          <Card
            component={Link}
            href={`/blog/${post.slug}`}
            key={post.slug}
            sx={{
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography component="h2" gutterBottom variant="h5">
                {post.title}
              </Typography>

              <Typography
                color="text.secondary"
                gutterBottom
                sx={{ mb: 2 }}
                variant="body2"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" • "}
                {post.author}
              </Typography>

              <Typography color="text.secondary" paragraph variant="body1">
                {post.description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {post.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
