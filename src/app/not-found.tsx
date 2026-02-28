import MeshBackground from "~/components/layout/MeshBackground";

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
              <Typography
                color="textSecondary"
                fontSize={{ md: "12rem", lg: "20rem" }}
                fontWeight={600}
                variant="h1"
              >
                404
              </Typography>
              <Typography fontSize="1.5rem" variant="subtitle2">
                Could not find requested resource
              </Typography>
              <Button color="inherit" href="/" variant="outlined">
                Return Home
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MeshBackground>
  );
}
