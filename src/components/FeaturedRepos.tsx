import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";

import { getLanguages, getRepo } from "~/api/github";
import { Repo } from "~/types";

import FeaturedReposClient, {
  FeaturedReposClientProps,
} from "./FeaturedRepos.client";

interface FeaturedReposProps {
  heading: string;
  caption: string;
  repos: Repo[];
}

export default async function FeaturedRepos({
  repos,
  caption,
  heading,
}: FeaturedReposProps) {
  const repositories: FeaturedReposClientProps["reposPromise"] = Promise.all(
    repos.map(async (repo: Repo) => {
      const repoDetails = await getRepo(repo.owner, repo.name);
      const languages = await getLanguages(repo.owner, repo.name);
      const languageList = Object.keys(languages);
      return {
        ...repoDetails,
        languages: languageList,
      };
    })
  );

  return (
    <Container>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack
          alignItems="center"
          gap={{ xs: 1, sm: 1.5 }}
          mx="auto"
          textAlign="center"
        >
          <Typography variant="h2">{heading}</Typography>
          {caption && (
            <Typography color="textSecondary" component="p" variant="h6">
              {caption}
            </Typography>
          )}
        </Stack>
        <Grid
          alignContent="stretch"
          columns={{ sm: 4, md: 12 }}
          container
          spacing={2}
        >
          <Suspense
            fallback={repos.map((_, index) => (
              <Grid key={index} size="grow">
                <Skeleton
                  component="div"
                  sx={{ width: "100%", aspectRatio: 3 / 4, height: "unset" }}
                  variant="rectangular"
                />
              </Grid>
            ))}
          >
            <FeaturedReposClient reposPromise={repositories} />
          </Suspense>
        </Grid>
      </Stack>
    </Container>
  );
}
