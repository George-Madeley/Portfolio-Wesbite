"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

import { PropsWithLoading } from "~/types";

import AnimatedCounter from "./AnimatedCounter";
import GraphicsCard from "./GraphicsCard";

type FeaturedMetricsProps = {
  heading: string;
  caption: string;
} & PropsWithLoading<{
  metrics: {
    value: number;
    unit?: string;
    caption: string;
  }[];
}>;

export default function FeaturedMetrics(props: FeaturedMetricsProps) {
  return (
    <Container>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Stack
            alignItems="center"
            gap={{ xs: 1, sm: 1.5 }}
            maxWidth={{ sm: 470, md: 615 }}
            mx="auto"
            textAlign="center"
          >
            <Typography variant="h2">{props.heading}</Typography>
            <Typography color="textSecondary" component="p" variant="h6">
              {props.caption}
            </Typography>
          </Stack>
        </motion.div>
        <Grid container spacing={1.5}>
          {props.loading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <Grid key={index} size="grow">
                    <Skeleton
                      height="unset"
                      sx={{ aspectRatio: "4 / 3" }}
                      variant="rectangular"
                      width="100%"
                    />
                  </Grid>
                ))
            : props.metrics.map((item, index) => (
                <Grid key={index} size={{ xs: 6, md: 3 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    style={{ height: "100%" }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.4,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <GraphicsCard
                      sx={{ p: { xs: 2, sm: 2.25, md: 3 }, height: 1 }}
                    >
                      <Stack sx={{ gap: 0.5, alignItems: "center" }}>
                        <Stack direction="row" sx={{ alignItems: "flex-end" }}>
                          <Typography component="div" variant="h1">
                            <AnimatedCounter
                              endCount={item.value}
                              startCount={0}
                            />
                          </Typography>
                          <Typography
                            component="div"
                            sx={{
                              color: "text.secondary",
                              mb: { xs: 0.25, md: 0.625 },
                            }}
                            variant="h3"
                          >
                            {item.unit}
                          </Typography>
                        </Stack>
                        <Typography
                          align="center"
                          sx={{ color: "text.secondary" }}
                        >
                          {item.caption}
                        </Typography>
                      </Stack>
                    </GraphicsCard>
                  </motion.div>
                </Grid>
              ))}
        </Grid>
      </Stack>
    </Container>
  );
}
