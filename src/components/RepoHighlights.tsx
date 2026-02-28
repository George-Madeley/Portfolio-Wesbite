import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { getLanguages, getRepo } from "~/api/github";
import { Repo } from "~/types";

interface RepoHighlightsProps {
  repos: Repo[];
}

export default async function RepoHighlights(props: RepoHighlightsProps) {
  const repositories = await Promise.all(
    props.repos.map((repo: Repo) =>
      getRepo(repo.owner, repo.name).then((repoDetails) =>
        getLanguages(repo.owner, repo.name).then((languages) => {
          const languageList = Object.keys(languages);
          const newRepo = {
            ...repoDetails,
            languages: languageList,
          };
          return newRepo;
        })
      )
    )
  );

  return (
    <Grid
      alignContent="stretch"
      columns={{ sm: 4, md: 12 }}
      container
      spacing={2}
    >
      {repositories.map((repo) => (
        <Grid key={repo.id} size={4}>
          <Card sx={{ height: "100%" }}>
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
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
