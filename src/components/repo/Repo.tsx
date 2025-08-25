import { Suspense } from "react";
import Aside from "~/components/repo/Aside";
import ReadMeMarkdown from "~/components/repo/ReadMeMarkdown";

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
import { getRepo } from "~/api/github";
import { notFound } from "next/navigation";

export default async function Repo(props: PageProps<"/projects/[repo]">) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const owner =
    (Array.isArray(searchParams.owner)
      ? searchParams.owner.at(0)
      : searchParams.owner) ?? "";

  try {
    const repo = await getRepo(owner, params.repo);
    return (
      <Stack>
        <Container sx={{ minHeight: "50vh", mb: 5, pt: 25 }}>
          <Stack justifyContent="end" sx={{ width: "100%", height: "100%" }}>
            <Grid container gap={3}>
              <Grid direction="column" size={12}>
                <Typography fontSize="8rem" fontWeight={700} variant="h1">
                  {repo.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  fontSize="1.5rem"
                  variant="subtitle1"
                >
                  {repo.description || "No Description"}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Stack direction="row" gap={1}>
                  <Typography>{repo.owner.login}</Typography>
                  <Divider aria-hidden="true" flexItem orientation="vertical" />
                  <Typography>{repo.default_branch}</Typography>
                  <Divider aria-hidden="true" flexItem orientation="vertical" />
                  <Typography>{repo.visibility}</Typography>
                </Stack>
              </Grid>
              <Grid size="auto">
                <Button
                  href={repo.url}
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
            <Grid container gap={3}>
              <Grid size="grow">
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
                        <ReadMeMarkdown owner={owner} repo={repo} />
                      </Suspense>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={3}>
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
                      <Aside owner={owner} repo={repo} />
                    </Suspense>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Stack>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
