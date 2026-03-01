"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { components } from "@octokit/openapi-types";
import { motion } from "motion/react";
import { use } from "react";

import GraphicsCard from "./GraphicsCard";

export interface FeaturedReposClientProps {
  reposPromise: Promise<
    (components["schemas"]["full-repository"] & {
      languages: string[];
    })[]
  >;
}

export default function FeaturedReposClient({
  reposPromise,
}: FeaturedReposClientProps) {
  const repos = use(reposPromise);

  return repos.map((repo, index) => (
    <Grid key={repo.id} size={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        style={{ height: "100%" }}
        transition={{
          duration: 0.9,
          delay: index * 0.4,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <GraphicsCard sx={{ height: "100%" }}>
          <CardContent sx={{ height: "100%" }}>
            <Stack
              gap={2}
              justifyContent="space-between"
              sx={{ height: "100%" }}
            >
              <Stack gap={1}>
                <Typography variant="h4">{repo.name}</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {repo.languages.map((language) => (
                    <Chip key={language} label={language} />
                  ))}
                </Stack>
                <Typography>{repo.description}</Typography>
              </Stack>
              <Button
                endIcon={<ArrowForwardIcon />}
                href={`/projects/${repo.name}?owner=${repo.owner.login}`}
              >
                Learn More
              </Button>
            </Stack>
          </CardContent>
        </GraphicsCard>
      </motion.div>
    </Grid>
  ));
}
