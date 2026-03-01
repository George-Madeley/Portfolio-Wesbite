import AssistantIcon from "@mui/icons-material/Assistant";
import StorageIcon from "@mui/icons-material/Storage";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import WebIcon from "@mui/icons-material/Web";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import CoursesMenu from "~/components/CoursesMenu";
import ErrorBoundary from "~/components/ErrorCatcher";
import FeatureSkills from "~/components/FeatureSkills";
import Hero from "~/components/Hero";
import JobHighlight from "~/components/JobHighlight";
import MeshBackground from "~/components/layout/MeshBackground";
import Metrics from "~/components/Metrics";
import RepoHighlights from "~/components/RepoHighlights";
import ApiSvg from "~/icon/ApiSvg";
import FrontendIcon from "~/icon/FrontendSvg";
import LearningSvg from "~/icon/LearningSvg";
import RobotSvg from "~/icon/RobotSvg";
import VideogameSvg from "~/icon/VideogameSvg";
import { Repo } from "~/types";

export default function HomePage() {
  const tags = [
    "Full Stack Engineer",
    "Android Developer",
    "Embedded Engineer",
  ];

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
        <CoursesMenu
          caption="A curated selection of courses that I have completed, showcasing my dedication to continuous learning and professional development across various domains in software engineering and technology."
          heading="Courses"
          image={<LearningSvg />}
          sections={[
            {
              title: "Frontend Engineering",
              items: [
                {
                  title: "CSS",
                  link: "https://www.codecademy.com/learn/learn-intermediate-css",
                },
                {
                  title: "Front End Engineer",
                  link: "https://www.codecademy.com/learn/paths/front-end-engineer-career-path",
                  tag: "Career Path",
                },
                {
                  title: "HTML",
                  link: "https://www.codecademy.com/learn/learn-html",
                },
                {
                  title: "JavaScript",
                  link: "https://www.codecademy.com/learn/learn-intermediate-javascript",
                },
                {
                  title: "Next",
                  link: "https://www.codecademy.com/learn/learn-next-js",
                },
                {
                  title: "React Native",
                  link: "https://www.codecademy.com/learn/learn-react-native",
                },
                {
                  title: "React",
                  link: "https://www.codecademy.com/learn/learn-advanced-react",
                },
                {
                  title: "React Router",
                  link: "https://www.codecademy.com/learn/learn-react-router",
                },
                {
                  title: "React Testing",
                  link: "https://www.codecademy.com/learn/learn-react-testing",
                },
                {
                  title: "Redux",
                  link: "https://www.codecademy.com/learn/learn-redux",
                },
                {
                  title: "Sass",
                  link: "https://www.codecademy.com/learn/learn-sass",
                },
                {
                  title: "TypeScript",
                  link: "https://www.codecademy.com/learn/learn-intermediate-typescript",
                },
                {
                  title: "VueJs",
                  link: "https://www.codecademy.com/learn/learn-vue-js",
                },
              ],
            },
            {
              title: "Backend Engineering",
              items: [
                {
                  title: "Back End Engineer",
                  link: "https://www.codecademy.com/learn/paths/back-end-engineer-career-path",
                  tag: "Career Path",
                },
                {
                  title: "Django",
                  link: "https://www.codecademy.com/learn/paths/build-python-web-apps-with-django",
                },
                {
                  title: "Flask",
                  link: "https://www.codecademy.com/learn/learn-flask",
                },
                {
                  title: "MongoDB",
                  link: "https://www.codecademy.com/learn/learn-mongodb",
                },
                {
                  title: "NodeJs",
                  link: "https://www.codecademy.com/learn/learn-node-js",
                },
                {
                  title: "SQL",
                  link: "https://www.codecademy.com/learn/learn-node-js",
                },
                {
                  title: "User Authentication And Authorization in Express",
                  link: "https://www.codecademy.com/learn/user-authentication-authorization-express",
                },
                {
                  title: "Full Stack Engineer",
                  link: "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path",
                  tag: "Career Path",
                },
              ],
            },
            {
              title: "Artificial Intelligence",
              items: [
                {
                  title: "Feature Engineering",
                  link: "https://www.codecademy.com/learn/paths/fe-path-feature-engineering",
                },
                {
                  title: "Build Chatbots with Python",
                  link: "https://www.codecademy.com/learn/paths/build-chatbots-with-python",
                },
                {
                  title: "Data Science Exploratory Data Analysis",
                  link: "https://www.codecademy.com/learn/eda-exploratory-data-analysis-python",
                },
                {
                  title: "Data Science Hypothesis Testing",
                  link: "https://www.codecademy.com/learn/hypothesis-testing-python",
                },
                {
                  title: "Machine Learning",
                  link: "https://www.codecademy.com/learn/paths/machine-learning-engineer",
                  tag: "Career Path",
                },
                {
                  title: "Natural Language Processing",
                  link: "https://www.codecademy.com/enrolled/paths/data-science-nlp",
                  tag: "Career Path",
                },
                {
                  title: "Python",
                  link: "https://www.codecademy.com/enrolled/courses/learn-advanced-python",
                },
                {
                  title: "Flask",
                  link: "https://www.codecademy.com/enrolled/courses/learn-flask",
                },
              ],
            },
            {
              title: "Game Development",
              items: [
                {
                  title: "C++",
                  link: "https://www.codecademy.com/enrolled/courses/learn-c-plus-plus",
                },
                {
                  title: "C",
                  link: "https://www.codecademy.com/learn/paths/c",
                },
                {
                  title: "C#",
                  link: "https://www.codecademy.com/enrolled/courses/learn-c-sharp",
                },
              ],
            },
          ]}
        />
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
