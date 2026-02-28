import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkIcon from "@mui/icons-material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack, { stackClasses } from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

import ExperienceLabel from "~/components/ExperienceLabel";
import aboutContent from "~/contents/about";
import TimelineProvider from "~/providers/TimelineProvider";

export default async function ExperienceTimeline() {
  const experiences = aboutContent.toSorted((a, b) => {
    if (a.endTime === "present") return -1;
    if (b.endTime === "present") return 1;
    if (a.endTime === b.endTime) {
      return a.startTime < b.startTime ? 1 : -1;
    }
    return a.endTime < b.endTime ? 1 : -1;
  });

  return (
    <TimelineProvider orientation="vertical" sx={{ color: "#fff" }}>
      {await Promise.all(
        experiences.map(async (exp, index) => {
          const { default: Description } = await import(
            `~/markdown/${exp.markdown}`
          );
          return (
            <Step id={`timeline-item-${index}`} key={exp.id}>
              <ExperienceLabel
                optional={
                  <Typography variant="caption">{exp.timePeriod}</Typography>
                }
                step={index}
              >
                <Stack alignItems="center" direction="row" gap={1}>
                  <Typography fontWeight={700}>{exp.position}</Typography> -
                  <Typography color="textSecondary">
                    {exp.company.name}
                  </Typography>
                </Stack>
              </ExperienceLabel>
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
                      <Box sx={{ [`&>.${stackClasses.root}`]: { gap: 2 } }}>
                        <Description />
                      </Box>
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
                                  transition: "100ms transform 0s ease-in-out",
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
          );
        })
      )}
    </TimelineProvider>
  );
}
