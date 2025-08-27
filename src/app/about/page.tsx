import BlendedHeading from "~/components/BlendedHeading";
import NeatBackground from "~/components/NeatBackground";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkIcon from "@mui/icons-material/Link";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

import Timeline from "./_components/Timeline";
import content from "./content";

export default function AboutPage() {
  const experiences = content.toSorted((a, b) => {
    if (a.endTime === b.endTime) {
      return a.startTime < b.startTime ? 1 : -1;
    }
    return a.endTime < b.endTime ? 1 : -1;
  });

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
      <Container>
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          sx={{ width: "100%", height: "70vh", p: 4 }}
        >
          <Grid>
            <BlendedHeading
              color="#d5bdcaff"
              fontSize={{ md: "12rem", lg: "16rem" }}
              fontWeight={600}
              textAlign="center"
              variant="h1"
            >
              About Me
            </BlendedHeading>
          </Grid>
        </Grid>
        <Stack gap={3} sx={{ mb: 5 }}>
          <Card>
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
          <Typography sx={{ color: "#fff" }} variant="h2">
            Experience
          </Typography>
          <Timeline orientation="vertical" sx={{ color: "#fff" }}>
            {experiences.map((exp) => (
              <Step key={exp.id}>
                <StepLabel
                  optional={
                    <Typography sx={{ color: "#fff" }} variant="caption">
                      {exp.timePeriod}
                    </Typography>
                  }
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "#fff !important",
                      "& circle": {
                        color: "#fff !important",
                      },
                      "& .MuiStepIcon-text": {
                        color: "var(--mui-palette-primary-main)",
                        fill: "var(--mui-palette-primary-main)",
                        fontWeight: 1000,
                        fontSize: "0.9rem",
                      },
                    },
                  }}
                >
                  <Typography sx={{ color: "#fff" }}>{exp.position}</Typography>
                </StepLabel>
                <StepContent>
                  <Card>
                    <CardContent>
                      <Stack gap={2}>
                        <Grid columnGap={2} container>
                          <Grid size={{ xs: 12, sm: 12, md: 12, lg: "auto" }}>
                            <Typography
                              color="textSecondary"
                              fontWeight={700}
                              variant="h2"
                            >
                              {exp.timePeriod}
                            </Typography>
                          </Grid>
                          <Grid size={{ xs: 12, sm: 12, md: 12, lg: "grow" }}>
                            <Typography fontWeight={700} variant="h2">
                              {exp.position}
                            </Typography>
                          </Grid>
                          <Grid size={12}>
                            <Button
                              endIcon={<ArrowForwardIcon />}
                              href={exp.company.href}
                              sx={{
                                textTransform: "none",
                                width: "fit-content",
                                "& svg": {
                                  fontSize: "2rem !important",
                                },
                                "&>span": {
                                  transition: "100ms ease-in-out",
                                },
                                "&:hover > span": {
                                  ml: "3rem",
                                },
                              }}
                              variant="text"
                            >
                              <Typography variant="h4">
                                {exp.company.name}
                              </Typography>
                            </Button>
                          </Grid>
                        </Grid>
                        {exp.description.map((description, index) => (
                          <Typography key={index}>{description}</Typography>
                        ))}
                        {exp.repos && !!exp.repos.length && (
                          <Stack direction="row" flexWrap="wrap" gap={1}>
                            {exp.repos.map((link) => (
                              <Button
                                endIcon={
                                  <LinkIcon
                                    sx={{ transform: "rotate(-45deg)" }}
                                  />
                                }
                                href={link.href}
                                key={link.name}
                                sx={{
                                  "&>span": {
                                    transition:
                                      "100ms transform 0s ease-in-out",
                                  },
                                  "&:hover > span": {
                                    transform: "rotate(45deg)",
                                  },
                                }}
                                variant="text"
                              >
                                {link.name}
                              </Button>
                            ))}
                          </Stack>
                        )}
                        {exp.languages && !!exp.languages.length && (
                          <Stack direction="row" flexWrap="wrap" gap={1}>
                            {exp.languages.map((language, index) => (
                              <Chip
                                color="primary"
                                key={index}
                                label={language}
                              />
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </StepContent>
              </Step>
            ))}
          </Timeline>
        </Stack>
      </Container>
    </NeatBackground>
  );
}
