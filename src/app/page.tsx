import AssistantIcon from "@mui/icons-material/Assistant";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import WebIcon from "@mui/icons-material/Web";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import Carousel from "~/components/Carousel";
import ErrorBoundary from "~/components/ErrorCatcher";
import FeatureSkills from "~/components/FeatureSkills";
import Hero from "~/components/Hero";
import JobHighlight from "~/components/JobHighlight";
import MeshBackground from "~/components/layout/MeshBackground";
import Metrics from "~/components/Metrics";
import RepoHighlights from "~/components/RepoHighlights";
import ApiSvg from "~/icon/ApiSvg";
import FrontendIcon from "~/icon/FrontendSvg";
import RobotSvg from "~/icon/RobotSvg";
import VideogameSvg from "~/icon/VideogameSvg";
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
      <Hero tags={tags} />
      <Stack gap={30} sx={{ mb: 30 }}>
        <Container>
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
        </Container>
        <FeatureSkills
          caption="A selection of my most proficient and frequently utilized skills, showcasing my expertise and versatility in software development."
          heading="Featured Skills"
          topics={[
            {
              icon: <WebIcon />,
              title: "Frontend Web Development",
              subtitle: "Crafting engaging and responsive user interfaces",
              description:
                "Proficient in building responsive and user-friendly web applications using React, TypeScript, and Material-UI. Experienced in component architecture, state management, and performance optimization to create scalable and maintainable codebases.",
              list: [
                "TypeScript",
                "React",
                "Next.js",
                "CSS",
                "React Router",
                "Vite.js",
              ],
              image: <FrontendIcon />,
              button: (
                <Link href="/s">
                  <Button color="primary" variant="contained">
                    View Projects
                  </Button>
                </Link>
              ),
            },
            {
              icon: <StorageIcon />,
              title: "Backend API Development",
              subtitle:
                "Designing and implementing robust server-side applications",
              description:
                "Experienced in developing RESTful APIs and server-side applications using Node.js, Express, and Go. Skilled in database design and management with MongoDB and PostgreSQL, as well as implementing authentication, authorization, and security best practices.",
              list: ["Node.js", "Express", "Go", "PostgreSQL", "gRPC", "C++"],
              image: <ApiSvg />,
              button: (
                <Link href="/s">
                  <Button color="primary" variant="contained">
                    View Projects
                  </Button>
                </Link>
              ),
            },
            {
              icon: <AssistantIcon />,
              title: "Artificial Intelligence",
              subtitle:
                "Building intelligent systems and machine learning models",
              description:
                "Proficient in developing machine learning models and AI applications using Python, TensorFlow, and PyTorch. Experienced in natural language processing, computer vision, and deep learning techniques, with a focus on building scalable and efficient AI solutions.",
              list: [
                "Python",
                "TensorFlow",
                "PyTorch",
                "Scikit-learn",
                "numPy",
                "Computer Vision",
              ],
              image: <RobotSvg />,
              button: (
                <Link href="/s">
                  <Button color="primary" variant="contained">
                    View Projects
                  </Button>
                </Link>
              ),
            },
            {
              icon: <VideogameAssetIcon />,
              title: "Game Development",
              subtitle: "Creating immersive and interactive gaming experiences",
              description:
                "Experienced in game development using Unity and Unreal Engine, with a focus on creating engaging gameplay mechanics, optimizing performance, and designing immersive environments. Skilled in C# and C++ programming for game logic, physics, and AI.",
              list: ["Unity", "Unreal Engine", "C#", "C++", "Game Design"],
              image: <VideogameSvg />,
              button: (
                <Link href="/s">
                  <Button color="primary" variant="contained">
                    View Projects
                  </Button>
                </Link>
              ),
            },
          ]}
        />
        <Metrics
          caption="A snapshot of my recent contributions and activity on GitHub, reflecting my engagement with open-source projects, collaborative development, and continuous learning in the software engineering community."
          heading="GitHub Activity"
          metrics={[
            {
              value: 1180,
              caption: "GitHUB commits",
            },
            {
              value: 48,
              caption: "Pull Requests",
            },
            {
              value: 70,
              caption: "Issues",
            },
            {
              value: 39,
              caption: "Authored Repositories",
            },
          ]}
        />
        <Container>
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
        </Container>
        <Container sx={{ md: 5 }}>
          <Stack gap={3}>
            <Typography variant="h2">Top Projects</Typography>
            <ErrorBoundary>
              <RepoHighlights repos={repos} />
            </ErrorBoundary>
          </Stack>
        </Container>
      </Stack>
    </MeshBackground>
  );
}
