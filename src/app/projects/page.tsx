import { Suspense } from "react";
import BlendedHeading from "~/components/BlendedHeading";
import CommitMap from "./_components/CommitMap";
import Projects from "./_components/Projects";
import NeatBackground from "~/components/NeatBackground";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ searchParams }: PageProps) {
  const awaitedSearchParams = await searchParams;

  const currentYear = new Date(Date.now()).getFullYear();

  const page = awaitedSearchParams.page ? Number(awaitedSearchParams.page) : 1;
  const year = awaitedSearchParams.year
    ? Number(awaitedSearchParams.year)
    : currentYear;

  return (
    <NeatBackground
      config={{
        speed: 2,
        horizontalPressure: 5,
        verticalPressure: 5,
        waveFrequencyX: 3,
        waveFrequencyY: 3,
        waveAmplitude: 4,
        shadows: 4,
        highlights: 6,
        colorBrightness: 1,
        colorSaturation: 5,
        wireframe: false,
        colorBlending: 8,
        backgroundAlpha: 1,
        grainScale: 2,
        grainSparsity: 0,
        grainIntensity: 0.2,
        grainSpeed: 0.8,
        resolution: 1.2,
        yOffset: 0,
      }}
    >
      <Container>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          sx={{ width: "100%", height: "70vh", p: 4 }}
        >
          <Grid>
            <BlendedHeading
              color="#d5bdcaff"
              fontSize={"16rem"}
              fontWeight={600}
              textAlign="center"
              variant="h1"
            >
              Projects
            </BlendedHeading>
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
                <Suspense
                  fallback={
                    <Skeleton
                      height={"10rem"}
                      variant="rectangular"
                      width={"100%"}
                    />
                  }
                >
                  <CommitMap repo="*" year={year} />
                </Suspense>
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
    </NeatBackground>
  );
}
