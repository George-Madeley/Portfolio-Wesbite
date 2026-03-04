"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { components } from "@octokit/openapi-types";
import { motion } from "motion/react";

import { PropsWithLoading, Result } from "~/types";

import GraphicsCard from "./GraphicsCard";

export type FeaturedRepo = components["schemas"]["full-repository"] & {
  languages: string[];
};

type FeaturedReposProps = {
  heading: string;
  caption: string;
} & PropsWithLoading<{ repos: Result<FeaturedRepo>[] }>;

export default function FeaturedRepos(props: FeaturedReposProps) {
  return (
    <Container>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Stack
            alignItems="center"
            gap={{ xs: 1, sm: 1.5 }}
            maxWidth={{ sm: 470, md: 615 }}
            mx="auto"
            textAlign="center"
          >
            <Typography variant="h2">{props.heading}</Typography>
            <Typography color="textSecondary" component="p" variant="h6">
              {props.caption}
            </Typography>
          </Stack>
        </motion.div>
        <Grid
          alignContent="stretch"
          columns={{ sm: 4, md: 12 }}
          container
          spacing={2}
        >
          {props.loading
            ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <Grid key={index} size="grow">
                    <Skeleton
                      height="unset"
                      sx={{ aspectRatio: "2 / 3" }}
                      variant="rectangular"
                      width="100%"
                    />
                  </Grid>
                ))
            : props.repos.map((repo, index) => (
                <Grid key={index} size={4}>
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
                        {repo.success ? (
                          <Stack
                            gap={2}
                            justifyContent="space-between"
                            sx={{ height: "100%" }}
                          >
                            <Stack gap={1}>
                              <Typography variant="h4">
                                {repo.data.name}
                              </Typography>
                              <Stack direction="row" flexWrap="wrap" gap={1}>
                                {repo.data.languages.map((language) => (
                                  <Chip key={language} label={language} />
                                ))}
                              </Stack>
                              <Typography>{repo.data.description}</Typography>
                            </Stack>
                            <Button
                              endIcon={<ArrowForwardIcon />}
                              href={`/projects/${repo.data.name}?owner=${repo.data.owner.login}`}
                            >
                              Learn More
                            </Button>
                          </Stack>
                        ) : (
                          <Alert severity="error">
                            <AlertTitle>Error: {repo.error.name}</AlertTitle>
                            {repo.error.message}
                          </Alert>
                        )}
                      </CardContent>
                    </GraphicsCard>
                  </motion.div>
                </Grid>
              ))}
        </Grid>
      </Stack>
    </Container>
  );
}
