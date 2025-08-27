"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useCallback, useEffect } from "react";
import BlendedHeading from "~/components/BlendedHeading";
import NeatBackground from "~/components/NeatBackground";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleClick = useCallback(() => reset(), [reset]);

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
      <Container sx={{ mb: 5 }}>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          sx={{ width: "100%", height: "100vh", p: 4 }}
        >
          <Grid>
            <Stack alignItems="center" gap={3}>
              <Box>
                <BlendedHeading
                  color="#FFC5AA"
                  fontSize={{ md: "12rem", lg: "20rem" }}
                  fontWeight={600}
                  sx={{
                    opacity: "100%",
                  }}
                  variant="h1"
                >
                  Error
                </BlendedHeading>
              </Box>
              <Alert severity="error" sx={{ width: "100%", overflowX: "auto" }}>
                <Typography variant="subtitle2">{error.name}</Typography>
                <Typography>{error.message}</Typography>
                {error.stack && <pre>{error.stack}</pre>}
              </Alert>
              <Stack direction={{ xs: "column", sm: "row" }} gap={1}>
                <Button onClick={handleClick}>Reset</Button>
                <Button
                  component={Link}
                  href="/"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    transition:
                      "color 100ms ease-in-out, borderColor 100ms ease-in-out",
                    "&:hover": {
                      color: "var(--mui-palette-action-active)",
                      borderColor: "var(--mui-palette-action-active)",
                    },
                  }}
                  variant="outlined"
                >
                  Return Home
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </NeatBackground>
  );
}
