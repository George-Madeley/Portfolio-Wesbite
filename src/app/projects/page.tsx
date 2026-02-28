import { Suspense } from "react";
import MeshBackground from "~/components/layout/MeshBackground";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// import CommitMap from "~/components/CommitMap";
import Projects from "~/components/Projects";

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ searchParams }: PageProps) {
  const awaitedSearchParams = await searchParams;

  // const currentYear = new Date(Date.now()).getFullYear();

  const page = awaitedSearchParams.page ? Number(awaitedSearchParams.page) : 1;
  // const year = awaitedSearchParams.year
  //   ? Number(awaitedSearchParams.year)
  //   : currentYear;

  return (
    <MeshBackground>
      <Container>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          sx={{ width: "100%", height: "70vh", p: 4 }}
        >
          <Grid>
            <Typography
              fontSize={{ md: "12rem", lg: "16rem" }}
              fontWeight={600}
              textAlign="center"
              variant="h1"
              color="textSecondary"
            >
              Projects
            </Typography>
          </Grid>
        </Grid>
        <Stack gap={3} sx={{ mb: 5 }}>
          <Card>
            <CardContent>
              <Stack gap={2}>
                <Typography>
                  Over the years, I have been involved in a number of projects,
                  both personal and professional. This page is a collection of
                  some of the more interesting ones.
                </Typography>
                <Typography>
                  Each project has a brief description, a link to the
                  project&apos;s website, and a link to the project&apos;s
                  source code (if available). If you have any questions about
                  any of these projects, please feel free to contact me.
                </Typography>
                {/* <Suspense
                  fallback={
                    <Skeleton
                      height={"10rem"}
                      variant="rectangular"
                      width={"100%"}
                    />
                  }
                >
                  <CommitMap repo="*" year={year} />
                </Suspense> */}
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Stack gap={2}>
                <Typography fontWeight={700} variant="h2">
                  Repositories
                </Typography>
                <Suspense
                  fallback={
                    <Skeleton
                      height={"10rem"}
                      variant="rectangular"
                      width={"100%"}
                    />
                  }
                  key={page}
                >
                  <Projects page={page} />
                </Suspense>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </MeshBackground>
  );
}
