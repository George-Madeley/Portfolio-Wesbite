import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssistantIcon from "@mui/icons-material/Assistant";
import StorageIcon from "@mui/icons-material/Storage";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import WebIcon from "@mui/icons-material/Web";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import CoursesMenu from "~/components/CoursesMenu";
import FeaturedJobs from "~/components/FeaturedJobs";
import FeaturedRepos from "~/components/FeaturedRepos";
import FeaturedSkills from "~/components/FeaturedSkills";
import Hero from "~/components/Hero";
import MeshBackground from "~/components/layout/MeshBackground";
import Metrics from "~/components/Metrics";
import ApiSvg from "~/icon/ApiSvg";
import FrontendIcon from "~/icon/FrontendSvg";
import LearningSvg from "~/icon/LearningSvg";
import RobotSvg from "~/icon/RobotSvg";
import VideogameSvg from "~/icon/VideogameSvg";
import WorkSvg from "~/icon/WorkSvg";

export default function HomePage() {
  return (
    <MeshBackground>
      <Hero
        tags={["Full Stack Engineer", "Android Developer", "Embedded Engineer"]}
      />
      <Stack gap={30} sx={{ mb: 30 }}>
        <FeaturedJobs
          caption="I'm a software engineer working for Atlantic Technology
                  Ltd. With interests in full-stack development and artificial
                  intelligence. You can find me optimizing my code for many
                  projects, building and repairing computers, or even playing
                  video games during my free time."
          heading="Featured Jobs"
          image={<WorkSvg />}
          jobs={[
            {
              companyName: "British Telecommunications",
              duration: "2021-22",
              description: (
                <Typography sx={{ color: "text.primary" }}>
                  Software Engineer at Atlantic Technology Ltd delivering secure
                  full-stack products across web, desktop, and mobile. Leads
                  front-end delivery/modernisation and contributes to back-end
                  services, CI/CD, and native/embedded integrations.
                </Typography>
              ),
              primaryButton: (
                <Button
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  href="/about"
                  variant="contained"
                >
                  Experience
                </Button>
              ),
              secondaryButton: (
                <Button
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  href="https://www.bt.com/"
                  variant="outlined"
                >
                  Company
                </Button>
              ),
            },
            {
              companyName: "Biodevices Without Borders",
              duration: "2023-24",
              description: (
                <Typography sx={{ color: "text.primary" }}>
                  Built a handheld water-quality tester solution for underserved
                  Sub-Saharan African communities, including a React Native
                  Bluetooth app and Firebase-based data collection.
                </Typography>
              ),
              primaryButton: (
                <Button
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  href="/about"
                  variant="contained"
                >
                  Experience
                </Button>
              ),
              secondaryButton: (
                <Button
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  href="https://bathbiodevices.com/"
                  variant="outlined"
                >
                  Company
                </Button>
              ),
            },
            {
              companyName: "Atlantic Technology Ltd",
              duration: "2024-Present",
              description: (
                <Typography sx={{ color: "text.primary" }}>
                  Delivered and modernised web apps, introduced Docker best
                  practices, and mentored graduates on Unity AR projects while
                  strengthening full-stack testing skills.
                </Typography>
              ),
              primaryButton: (
                <Button
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  href="/about"
                  variant="contained"
                >
                  Experience
                </Button>
              ),
              secondaryButton: (
                <Button
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  href="https://www.atlantictechnology.co.uk/"
                  variant="outlined"
                >
                  Company
                </Button>
              ),
            },
          ]}
        />
        <FeaturedSkills
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
        <FeaturedRepos
          caption="A selection of my most notable and impactful projects on GitHub, showcasing my contributions to open-source software, collaborative development, and innovative solutions across various domains in software engineering."
          heading="Top Projects"
          repos={[
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
          ]}
        />
      </Stack>
    </MeshBackground>
  );
}
