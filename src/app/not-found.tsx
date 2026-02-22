import BlendedHeading from "~/components/BlendedHeading";
import MeshBackground from "~/components/MeshBackground";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function NotFound() {
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
            <Stack alignItems="center" gap={3} justifyContent="center">
              <BlendedHeading
                color="#FFC5AA"
                fontSize={{ md: "12rem", lg: "20rem" }}
                fontWeight={600}
                sx={{
                  opacity: "100%",
                }}
                variant="h1"
              >
                404
              </BlendedHeading>
              <Typography
                fontSize="1.5rem"
                sx={{ color: "#fff" }}
                variant="subtitle2"
              >
                Could not find requested resource
              </Typography>
              <Button
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
          </Grid>
        </Grid>
      </Container>
    </MeshBackground>
  );
}
