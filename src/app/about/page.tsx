import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";

import ExperienceTimeline from "~/components/ExperienceTimeline";
import MeshBackground from "~/components/layout/MeshBackground";

export default function Page() {
  return (
    <MeshBackground>
      <Container>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          sx={{ width: "100%", height: "70vh", p: { xs: 0, sm: 2, md: 4 } }}
        >
          <Grid>
            <Typography
              color="textSecondary"
              fontSize={{ xs: "20vw", md: "12rem", lg: "16rem" }}
              fontWeight={600}
              textAlign="center"
              variant="h1"
            >
              About Me
            </Typography>
          </Grid>
        </Grid>
        <Stack gap={3} sx={{ mb: 5 }}>
          <Card id="TOP-ME">
            <CardContent>
              <Stack gap={2}>
                <Typography>
                  Over the years, I have developed a passion for programming and
                  applied my knowledge to a wide range of different careers and
                  sectors within software development. From each of these
                  experiences, I have gained a unique set of skills and
                  knowledge that I have developed further by undertaking online
                  courses and personal projects. I have also had the opportunity
                  to work with a variety of different technologies and
                  frameworks, which has allowed me to gain a deeper
                  understanding of the software development process. I have also
                  had the privilege of working with a diverse range of people,
                  which has helped me develop my communication and collaboration
                  skills. Overall, I have gained a wealth of experience in
                  software development, which I believe will allow me to excel
                  in this field.
                </Typography>
                <Typography>
                  The following section is a history of my experiences in
                  software development. It includes my education, work
                  experience, and personal projects. It also includes a list of
                  the technologies and frameworks I have worked with. I have
                  also included links to my GitHub repositories, where you can
                  find the code for my projects.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Typography variant="h2">Experience</Typography>
          <Suspense
            fallback={
              <Skeleton height={"10rem"} variant="rectangular" width={"100%"} />
            }
          >
            <ExperienceTimeline />
          </Suspense>
        </Stack>
      </Container>
    </MeshBackground>
  );
}
