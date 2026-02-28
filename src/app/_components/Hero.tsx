import { Suspense } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import VersionTag from "./VersionTag";
import WaveGridWrapper from "./WaveGridWrapper";

interface HeroProps {
  tags: string[];
}

export default function Hero({ tags }: HeroProps) {
  return (
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
            color="textPrimary"
            fontSize={{ xs: "1rem", sm: "2rem" }}
            fontWeight={600}
            variant="subtitle2"
          >
            Hi, I&apos;m
          </Typography>
          <Typography
            color="textSecondary"
            fontSize={{ xs: "4rem", sm: "8rem" }}
            fontWeight={600}
            textAlign="left"
            variant="h1"
          >
            George <br />
            Madeley
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography color="textPrimary">
            Software Engineering at Atlantic Technology,
          </Typography>
        </Grid>
        <Grid size={12}>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{
                  color: "text.primary",
                  backgroundColor:
                    "rgba(var(--mui-palette-text-primaryChannel) / 0.1)",
                }}
              />
            ))}
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack direction="row" flexWrap="wrap" gap={2}>
            <Button endIcon={<ArrowForwardIcon />} href="/projects">
              View Projects
            </Button>
            <Button href="/about" color="inherit" variant="outlined">
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
                sx={{ color: "text.primary" }}
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                href="https://www.linkedin.com/in/georgemadeleybathcompsyseng"
                rel="noreferrer"
                sx={{ color: "text.primary" }}
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Suspense>
              <VersionTag
                icon={<AutoAwesomeIcon sx={{ color: "text.primary" }} />}
                owner="George-Madeley"
                repo="Portfolio-Website"
                sx={{
                  color: "text.primary",
                  backgroundColor:
                    "rgba(var(--mui-palette-text-primaryChannel) / 0.1)",
                }}
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
  );
}
