import CommitIcon from "@mui/icons-material/Commit";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { components } from "@octokit/openapi-types";

import gitHubFetch from "~/api/github";

interface RepoStatisticsProps {
  owner: string;
  repo: components["schemas"]["full-repository"];
}

export default async function RepoStatistics(props: RepoStatisticsProps) {
  const [languages, numCommits] = await Promise.all([
    gitHubFetch("GET /repos/{owner}/{repo}/languages", {
      owner: props.owner,
      repo: props.repo.name,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }),
    gitHubFetch("GET /repos/{owner}/{repo}/stats/contributors", {
      owner: props.owner,
      repo: props.repo.name,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }),
  ]);

  return (
    <Grid container direction="column" gap={3}>
      <Grid>
        <Typography variant="subtitle2">Description</Typography>
        <Typography>{props.repo.description || "No Description"}</Typography>
      </Grid>
      <Grid>
        <Stack direction="column" gap={1}>
          <Typography variant="subtitle2">Languages</Typography>
          {languages.success ? (
            <Grid container gap={1}>
              {Object.keys(languages.data).map((language) => (
                <Grid key={language} size="auto">
                  <Chip color="primary" label={language} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Alert severity="error">
              <AlertTitle>Error - {languages.error.name}</AlertTitle>
              {languages.error.message}
            </Alert>
          )}
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
                message: numCommits.success
                  ? numCommits.data.reduce(
                      (acc: number, curr) => acc + curr.total,
                      0
                    )
                  : "N/A",
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
          GitHub
        </Button>
      </Grid>
    </Grid>
  );
}
