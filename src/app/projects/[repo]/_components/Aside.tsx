import { getLanguagesCached, getNumberCommitsCached } from "~/api/github";

import CommitIcon from "@mui/icons-material/Commit";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { components } from "@octokit/openapi-types";
import ErrorFallback from "~/components/ErrorFallback";

interface AsideProps {
  owner: string;
  repo: components["schemas"]["full-repository"];
}

export default async function Aside(props: AsideProps) {
  try {
    const languages = Object.keys(
      await getLanguagesCached(props.owner, props.repo.name)
    );
    const numCommits = await getNumberCommitsCached(
      props.owner,
      props.repo.name
    );

    return (
      <Grid container direction="column" gap={3}>
        <Grid>
          <Typography variant="subtitle2">Description</Typography>
          <Typography>{props.repo.description || "No Description"}</Typography>
        </Grid>
        <Grid>
          <Stack direction="column" gap={1}>
            <Typography variant="subtitle2">Languages</Typography>
            <Grid container gap={1}>
              {languages.map((language) => (
                <Grid key={language} size="auto">
                  <Chip color="primary" label={language} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
        <Grid>
          <Stack direction="column" gap={1}>
            <Typography variant="subtitle2">Statistics</Typography>
            <Stack
              direction={{ xs: "row", sm: "row", md: "column" }}
              flexWrap="wrap"
              gap={1}
              justifyContent={{
                xs: "space-around",
                sm: "space-around",
                md: "start",
              }}
            >
              {[
                {
                  id: "stats-stars",
                  icon: <StarIcon />,
                  message: props.repo.stargazers_count,
                },
                {
                  id: "stats-commits",
                  icon: <CommitIcon />,
                  message: numCommits,
                },
                {
                  id: "stats-forks",
                  icon: <ForkRightIcon />,
                  message: props.repo.forks,
                },
                {
                  id: "stats-watchers",
                  icon: <VisibilityIcon />,
                  message: props.repo.watchers,
                },
              ].map((state) => (
                <Stack direction="row" gap={1} key={state.id}>
                  {state.icon}
                  <Typography>{state.message}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid>
          <Button fullWidth href={props.repo.url} startIcon={<GitHubIcon />}>
            GithUb
          </Button>
        </Grid>
      </Grid>
    );
  } catch (error) {
    console.error(error);
    return <ErrorFallback error={error} />;
  }
}
