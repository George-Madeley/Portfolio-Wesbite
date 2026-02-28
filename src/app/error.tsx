"use client"; // Error boundaries must be Client Components

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useCallback, useEffect } from "react";

import MeshBackground from "~/components/layout/MeshBackground";

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
    <MeshBackground>
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
                <Typography
                  color="textSecondary"
                  fontSize={{ md: "12rem", lg: "20rem" }}
                  fontWeight={600}
                  variant="h1"
                >
                  Error
                </Typography>
              </Box>
              <Alert severity="error" sx={{ width: "100%", overflowX: "auto" }}>
                <Typography variant="subtitle2">{error.name}</Typography>
                <Typography>{error.message}</Typography>
                {error.stack && <pre>{error.stack}</pre>}
              </Alert>
              <Stack direction={{ xs: "column", sm: "row" }} gap={1}>
                <Button onClick={handleClick}>Reset</Button>
                <Button
                  color="inherit"
                  component={Link}
                  href="/"
                  variant="outlined"
                >
                  Return Home
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MeshBackground>
  );
}
