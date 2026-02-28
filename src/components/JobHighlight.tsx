"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function JobHighlight() {
  const work = [
    {
      id: "bt",
      company: "BT",
      tooltip: "British Telecommunications",
      duration: "2021-22",
      link: "https://www.bt.com/",
    },
    {
      id: "bwb",
      company: "BWB",
      tooltip: "Biodevices Without Borders",
      duration: "2023-24",
      link: "https://bathbiodevices.com/",
    },
    {
      id: "atl",
      company: "ATL",
      tooltip: "Atlantic Technology",
      duration: "2024-Present",
      link: "https://www.atlantictechnology.co.uk/",
    },
  ] as const;

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Grid
      alignItems="center"
      container
      spacing={2}
      sx={{ width: "100%", mt: 5 }}
    >
      {work.flatMap((item, index) => {
        const components = [
          <Grid key={item.id} size={{ xs: 12, sm: "grow" }}>
            <Stack alignItems="center" gap={1} justifyContent="center">
              <Tooltip placement="top" title={item.tooltip}>
                <Typography fontWeight={500} textAlign="center" variant="h4">
                  {item.company}
                </Typography>
              </Tooltip>
              <Typography color="textDisabled" textAlign="center" variant="h5">
                {item.duration}
              </Typography>
              <Button
                endIcon={<ArrowForwardIcon />}
                href={item.link}
                rel="noreferrer"
                target="_blank"
              >
                Learn More
              </Button>
            </Stack>
          </Grid>,
        ];
        if (index < work.length - 1)
          components.push(
            <Divider
              aria-hidden="true"
              flexItem
              key={`${item.id}-divider`}
              orientation={isXs ? "horizontal" : "vertical"}
            />
          );
        return components;
      })}
    </Grid>
  );
}
