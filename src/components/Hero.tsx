"use client";

import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { ReactNode } from "react";

import WaveGridWrapper from "./WaveGridWrapper";

interface HeroProps {
  tags: string[];
  version: ReactNode;
  name: ReactNode;
  buttons: ReactNode | ReactNode[];
  socials: ReactNode | ReactNode[];
  caption: string;
}

export default function Hero({
  tags,
  version,
  name,
  buttons,
  socials,
  caption,
}: HeroProps) {
  return (
    <Container>
      <Grid
        alignItems="center"
        container
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        sx={{
          width: "100%",
          minHeight: "80vh",
          p: { xs: 0, sm: 2, md: 4 },
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Typography
                color="textSecondary"
                fontSize={{ xs: "1rem", sm: "2rem" }}
                fontWeight={600}
                variant="subtitle2"
              >
                Hi, I&apos;m
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Typography
                color="textPrimary"
                fontSize={{ xs: "4rem", sm: "8rem" }}
                fontWeight={600}
                textAlign="left"
                variant="h1"
              >
                {name}
              </Typography>
            </motion.div>
          </Grid>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Grid size={12}>
              <Typography color="textSecondary">{caption}</Typography>
            </Grid>
          </motion.div>
          <Grid columnGap={1} container rowGap={1.5} size={12}>
            {tags.map((tag, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                key={tag}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Grid size="auto">
                  <Chip
                    label={tag}
                    sx={{
                      color: "text.primary",
                      backgroundColor:
                        "rgba(var(--mui-palette-text-primaryChannel) / 0.1)",
                    }}
                  />
                </Grid>
              </motion.div>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Grid size={12}>
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {buttons}
              </Stack>
            </Grid>
          </motion.div>
          <Grid size={12}>
            <Stack alignItems="center" direction="row" gap={2}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {socials}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {version}
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          alignItems="center"
          container
          size={{ sm: 12, md: "grow" }}
          sx={{ height: "50vh", display: { xs: "none", md: "flex" } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            style={{ width: "100%", height: "100%" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <WaveGridWrapper />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
