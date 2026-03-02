"use client";

import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { ReactNode } from "react";

import GraphicsCard from "./GraphicsCard";

interface FeaturedJObsProps {
  heading: string;
  caption: string;
  image?: ReactNode;
  jobs: {
    companyName: string;
    shortName?: string;
    duration: string;
    description: ReactNode;
    primaryButton: ReactNode;
    secondaryButton?: ReactNode;
  }[];
}

export default function FeaturedJobs({
  heading,
  caption,
  image,
  jobs,
}: FeaturedJObsProps) {
  const partitionInExtraSmall = 1;
  const partitionInSmall = 2;
  const partitionInLarge = 3;

  return (
    <Container>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          style={{ flex: 3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Stack
            alignItems={{ xs: "center", sm: "start" }}
            gap={{ xs: 1, sm: 1.5 }}
            mx="auto"
            textAlign={{ xs: "center", sm: "left" }}
          >
            <Typography display={{ xs: "block", md: "none" }} variant="h2">
              {heading}
            </Typography>
            <Stack
              alignItems="center"
              direction={{ xs: "column", sm: "row" }}
              gap={4}
            >
              <Stack flex={3} gap={{ xs: 1, sm: 1.5 }}>
                <Typography display={{ xs: "none", md: "block" }} variant="h2">
                  {heading}
                </Typography>
                <Typography color="textSecondary" component="p" variant="h6">
                  {caption}
                </Typography>
              </Stack>
              <Stack
                flex={{ xs: undefined, sm: 2 }}
                maxWidth={"400px"}
                width={{ xs: 1, md: undefined }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  style={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                >
                  <Stack alignItems="center" height="100%" width="100%">
                    {image}
                  </Stack>
                </motion.div>
              </Stack>
            </Stack>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GraphicsCard sx={{ position: "relative", overflow: "visible" }}>
            <CardContent>
              <Grid container spacing={{ xs: 0, sm: 3, md: 4 }}>
                {jobs.map((job, index) => (
                  <Grid
                    key={index}
                    size={{
                      xs: 12 / partitionInExtraSmall,
                      sm: 12 / partitionInSmall,
                      md: 12 / partitionInLarge,
                    }}
                    sx={{
                      position: "relative",
                      pt: { xs: index !== 0 ? 5 : 0, sm: 0 },
                    }}
                  >
                    <Stack
                      gap={{ xs: 1, md: 2 }}
                      justifyContent="space-between"
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Stack gap={{ xs: 1, md: 2 }}>
                        <motion.div
                          initial={{ opacity: 0, y: 25 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          whileInView={{ opacity: 1, y: 0 }}
                        >
                          <Typography
                            overflow="hidden"
                            textOverflow="ellipsis"
                            variant="h4"
                          >
                            {job.companyName}
                          </Typography>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 25 }}
                          transition={{ duration: 0.5, delay: index * 0.3 }}
                          viewport={{ once: true }}
                          whileInView={{ opacity: 1, y: 0 }}
                        >
                          <Typography sx={{ color: "text.secondary" }}>
                            {job.duration}
                          </Typography>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 25 }}
                          transition={{ duration: 0.5, delay: index * 0.4 }}
                          viewport={{ once: true }}
                          whileInView={{ opacity: 1, y: 0 }}
                        >
                          {job.description}
                        </motion.div>
                      </Stack>
                      <Grid
                        columns={{ xs: 6, mobile: 12 }}
                        container
                        spacing={1}
                      >
                        <Grid size={6}>
                          <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            style={{ justifySelf: "end", width: "100%" }}
                            transition={{ duration: 0.5, delay: index * 0.5 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, y: 0 }}
                          >
                            {job.primaryButton}
                          </motion.div>
                        </Grid>
                        {job.secondaryButton && (
                          <Grid size={6}>
                            <motion.div
                              initial={{ opacity: 0, y: 25 }}
                              style={{ justifySelf: "end", width: "100%" }}
                              transition={{ duration: 0.5, delay: index * 0.6 }}
                              viewport={{ once: true }}
                              whileInView={{ opacity: 1, y: 0 }}
                            >
                              {job.secondaryButton}
                            </motion.div>
                          </Grid>
                        )}
                      </Grid>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </Container>
  );
}
