import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Carousel from "~/components/Carousel";
import ErrorBoundary from "~/components/ErrorCatcher";
import Hero from "~/components/Hero";
import JobHighlight from "~/components/JobHighlight";
import MeshBackground from "~/components/layout/MeshBackground";
import RepoHighlights from "~/components/RepoHighlights";
import { Repo } from "~/types";

export default function HomePage() {
  const tags = [
    "Full Stack Engineer",
    "Android Developer",
    "Embedded Engineer",
  ];

  const stats = [
    {
      id: "programming-languages",
      Icon: TerminalIcon,
      text: "Over 10 years of hands-on programming experience, beginning with Python and expanding into a diverse set of languages including C, C++, Java, MATLAB, Go, and Bash scripting. Proficient in utilizing integrated development environments such as Visual Studio for large-scale and collaborative projects. Specialized in modern web application development, with advanced expertise in React and TypeScript, encompassing component architecture, state management, performance optimization, and scalable codebase design.",
    },
    {
      id: "certificates",
      Icon: EmojiEventsIcon,
      text: "Earned over 61 professional certificates across four years, with a focus on Front-End Engineering, Back-End Engineering, Machine Learning, Large Language Models, and Unity Game Development. Demonstrated proficiency in designing and implementing scalable web architectures, building robust APIs, developing and deploying ML models, and creating interactive 3D experiences in Unity. These certifications reflect a commitment to continuous learning and a deep understanding of both foundational and advanced concepts in modern software development.",
    },
    {
      id: "git-stats",
      Icon: QueryStatsIcon,
      text: "Over the past four years, I have authored 1,180 commits, submitted 48 pull requests, opened 70 issues, and contributed to 39 repositories—all within my personal commit history. This activity reflects a sustained commitment to version control best practices, collaborative software development workflows, and continuous project maintenance. My contributions span code implementation, bug fixes, documentation enhancements, and feature proposals, demonstrating familiarity with the full lifecycle of software projects on platforms like GitHub.",
    },
  ] as const;

  const repos: Repo[] = [
    {
      name: "EE40140-Magnetic-Induction-Tomography",
      owner: "George-Madeley",
    },
    {
      name: "GameDevTV-Unity3D-RealmRush",
      owner: "George-Madeley",
    },
    {
      name: "App",
      owner: "Bath-Biodevices-Without-borders",
    },
  ];

  return (
    <MeshBackground>
      <Container sx={{ mb: 5 }}>
        <Hero tags={tags} />
        <Stack gap={30} sx={{ mb: 30 }}>
          <Card>
            <CardContent>
              <Stack gap={2}>
                <Typography variant="h3">Hi, I&apos;m George.</Typography>
                <Typography>
                  I&apos;m a software engineer working for Atlantic Technology
                  Ltd. With interests in full-stack development and artificial
                  intelligence. You can find me optimizing my code for many
                  projects, building and repairing computers, or even playing
                  video games during my free time.
                </Typography>
                <JobHighlight />
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Stack gap={1}>
                <Typography variant="h2">Skill Set</Typography>
                <Carousel
                  alignContent="stretch"
                  alignItems="center"
                  gap={1}
                  sx={{ width: "100%" }}
                >
                  {stats.map((stat) => (
                    <Box key={stat.id} sx={{ width: "100%" }}>
                      <Grid container>
                        <Grid
                          alignItems="center"
                          container
                          gap={3}
                          justifyContent="center"
                          size={{ xs: 12, sm: 4 }}
                        >
                          <Grid>
                            <stat.Icon
                              color="primary"
                              sx={{ fontSize: "8rem" }}
                            />
                          </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                          <Typography>{stat.text}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
                </Carousel>
              </Stack>
            </CardContent>
          </Card>
          <Stack gap={3}>
            <Typography variant="h2">Top Projects</Typography>
            <ErrorBoundary>
              <RepoHighlights repos={repos} />
            </ErrorBoundary>
          </Stack>
        </Stack>
      </Container>
    </MeshBackground>
  );
}
