"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { ReactNode } from "react";

import GraphicsCard from "./GraphicsCard";

interface FeaturedRecommendationsProps {
  heading: string;
  caption: string;
  recommendations: {
    name: string;
    position: string;
    company: string;
    review: ReactNode;
    href: string;
    date: string;
  }[];
}

export default function FeaturedRecommendations({
  heading,
  caption,
  recommendations,
}: FeaturedRecommendationsProps) {
  return (
    <Container>
      <Stack gap={{ xs: 3, sm: 4 }}>
        <Stack
          gap={{ xs: 1, sm: 1.5 }}
          sx={{
            mx: "auto",
          }}
          textAlign="center"
        >
          <Typography variant="h2">{heading}</Typography>
          <Typography
            component="p"
            sx={{ color: "text.secondary" }}
            variant="h6"
          >
            {caption}
          </Typography>
        </Stack>
        <Stack gap={1.5}>
          {recommendations.map((recommendation, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              key={index}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <GraphicsCard key={index}>
                <Stack
                  alignItems={index % 2 === 0 ? "flex-start" : "flex-end"}
                  gap={3}
                  justifyContent="space-between"
                  sx={{
                    height: 1,
                    p: { xs: 1.5, md: 2 },
                  }}
                >
                  <Stack
                    gap={1}
                    sx={{
                      textAlign: index % 2 === 0 ? "left" : "right",
                    }}
                  >
                    <Typography component="p" variant="h6">
                      {recommendation.name}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1">
                      <b>{recommendation.position}</b> -{" "}
                      {recommendation.company}
                    </Typography>
                    <Typography color="textDisabled" variant="body2">
                      {recommendation.date}
                    </Typography>
                  </Stack>
                  <Box textAlign="justify">{recommendation.review}</Box>
                  <Stack direction="row" width={1}>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      href={recommendation.href}
                      variant="outlined"
                    >
                      Read more
                    </Button>
                  </Stack>
                </Stack>
              </GraphicsCard>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
