import { Suspense } from "react";
import BlendedHeading from "~/components/BlendedHeading";
import MeshBackground from "~/components/MeshBackground";
import { Repo } from "~/types";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import Carousel from "./_components/Carousel";
import Highlights from "./_components/Highlights";
import JobHighlight from "./_components/JobHighlight";
import VersionTag from "./_components/VersionTag";
import WaveGridWrapper from "./_components/WaveGridWrapper";

export default function HomePage() {
  const tags = [
    "Full Stack Engineer",
    "Android Developer",
    "Embedded Engineer",
  ] as const;

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
        <Grid
          alignItems="center"
          container
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          sx={{
            width: "100%",
            minHeight: "80vh",
            p: 4,
          }}
        >
          <Grid
            alignItems="flex-start"
            container
            direction="column"
            gap={4}
            justifyContent="center"
            size={{ xs: 12, sm: 12, md: "auto" }}
            sx={{ height: "80vh" }}
          >
            <Grid size={12}>
              <Typography
                color="#fff"
                fontSize={{ xs: "1rem", sm: "2rem" }}
                fontWeight={600}
                variant="subtitle2"
              >
                Hi, I&apos;m
              </Typography>
              <BlendedHeading
                color="#FFC5AA"
                fontSize={{ xs: "4rem", sm: "8rem" }}
                fontWeight={600}
                sx={{
                  opacity: "100%",
                }}
                textAlign="left"
                variant="h1"
              >
                George <br />
                Madeley
              </BlendedHeading>
            </Grid>
            <Grid size={12}>
              <Typography color="#fff">
                Software Engineering at Atlantic Technology,
              </Typography>
            </Grid>
            <Grid size={12}>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{ color: "#fff", backgroundColor: "#ffffff29" }}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid size={12}>
              <Stack direction="row" flexWrap="wrap" gap={2}>
                <Button endIcon={<ArrowForwardIcon />} href="/projects">
                  View Projects
                </Button>
                <Button
                  href="/about"
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
                  About me
                </Button>
              </Stack>
            </Grid>
            <Grid size={12}>
              <Stack alignItems="center" direction="row" gap={2}>
                <Tooltip title="GitHub">
                  <IconButton
                    href="https://github.com/George-Madeley"
                    rel="noreferrer"
                    sx={{ color: "#fff" }}
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    href="https://www.linkedin.com/in/georgemadeleybathcompsyseng"
                    rel="noreferrer"
                    sx={{ color: "#fff" }}
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                <Suspense>
                  <VersionTag
                    icon={<AutoAwesomeIcon style={{ color: "#fff" }} />}
                    owner="George-Madeley"
                    repo="Portfolio-Website"
                    sx={{ color: "#fff", backgroundColor: "#ffffff29" }}
                  />
                </Suspense>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            size={{ sm: 12, md: "grow" }}
            sx={{ height: "50vh" }}
          >
            <WaveGridWrapper />
          </Grid>
        </Grid>
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
            <Typography color="#fff" variant="h2">
              Top Projects
            </Typography>
            <Highlights repos={repos} />
          </Stack>
        </Stack>
      </Container>
    </MeshBackground>
  );
}
