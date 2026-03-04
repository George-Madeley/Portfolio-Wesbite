import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";

import gitHubFetch from "~/api/github";
import RadialBackground from "~/components/layout/RadialBackground";
import RepoMarkdown from "~/components/RepoMarkdown";
import RepoStatistics from "~/components/RepoStatistics";

export default async function Page(props: PageProps<"/projects/[repo]">) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const owner =
    (Array.isArray(searchParams.owner)
      ? searchParams.owner.at(0)
      : searchParams.owner) ?? "";

  const response = await gitHubFetch("GET /repos/{owner}/{repo}", {
    owner,
    repo: params.repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.success) {
    throw response.error;
  }

  return (
    <RadialBackground color="var(--mui-palette-primary-main)">
      <Stack>
        <Container sx={{ minHeight: "50vh", mb: 5, pt: 25 }}>
          <Stack justifyContent="end" sx={{ width: "100%", height: "100%" }}>
            <Grid container gap={3}>
              <Grid direction="column" size={12}>
                <Typography
                  color="textSecondary"
                  fontSize={{ xs: "3rem", sm: "4rem", md: "8rem" }}
                  fontWeight={700}
                  variant="h1"
                >
                  {response.data.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  fontSize={{ sm: "1rem", md: "1.5rem" }}
                  variant="subtitle1"
                >
                  {response.data.description || "No Description"}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Stack direction="row" gap={1}>
                  <Typography>{response.data.owner.login}</Typography>
                  <Divider aria-hidden="true" flexItem orientation="vertical" />
                  <Typography>{response.data.default_branch}</Typography>
                  <Divider aria-hidden="true" flexItem orientation="vertical" />
                  <Typography>{response.data.visibility}</Typography>
                </Stack>
              </Grid>
              <Grid size="auto">
                <Button
                  href={response.data.url}
                  startIcon={<GitHubIcon />}
                  variant="contained"
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Container>
        <Container sx={{ mb: 10 }}>
          <Stack>
            <Grid
              container
              direction={{
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              }}
              gap={3}
            >
              <Grid size={{ xs: 12, sm: 12, md: "grow" }}>
                <Card>
                  <CardContent>
                    <Stack gap={3}>
                      <Suspense
                        fallback={
                          <Skeleton
                            height={40}
                            variant="rectangular"
                            width={"100%"}
                          />
                        }
                      >
                        <RepoMarkdown owner={owner} repo={response.data} />
                      </Suspense>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                <Card component="aside">
                  <CardContent>
                    <Suspense
                      fallback={
                        <Stack gap={1}>
                          <Skeleton sx={{ fontSize: "1rem" }} variant="text" />
                          <Skeleton
                            height={40}
                            variant="rectangular"
                            width={"100%"}
                          />
                        </Stack>
                      }
                    >
                      <RepoStatistics owner={owner} repo={response.data} />
                    </Suspense>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </RadialBackground>
  );
}
