"use client";

import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid, { GridProps } from "@mui/material/Grid";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { ReactNode } from "react";

import GraphicsCard from "../GraphicsCard";
import SelectItem, { SelectItemProps } from "../SelectItem";

interface FooterProps {
  title: string;
  usefulLinks: ReactNode | ReactNode[];
  sections: {
    gridProps?: GridProps;
    title: string;
    items: SelectItemProps[];
  }[];
  socials: ReactNode | ReactNode[];
}

export default function Footer({
  usefulLinks,
  sections,
  socials,
  title,
}: FooterProps) {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <GraphicsCard sx={{ mb: 3 }}>
          <Stack gap={{ xs: 3, sm: 4, md: 5 }} role="contentinfo">
            <CardContent>
              <Grid container spacing={{ xs: 4, md: 3 }}>
                <Grid size={{ xs: 12, md: "auto" }}>
                  <Stack
                    alignItems={{ sm: "end", md: "start" }}
                    direction={{ sm: "row", md: "column" }}
                    gap={3}
                    justifyContent={{ sm: "start", md: "space-between" }}
                    sx={{ height: 1 }}
                  >
                    <Stack alignItems="flex-start" gap={{ xs: 1.5, sm: 3 }}>
                      <Typography variant="h3">{title}</Typography>
                      <Typography
                        sx={{ maxWidth: { sm: 280 } }}
                        variant="body2"
                      >
                        Explore the different versions of my portfolio
                      </Typography>
                    </Stack>
                    <Stack gap={1}>{usefulLinks}</Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: "grow" }}>
                  <Grid
                    container
                    spacing={{ xs: 2.5, md: 4 }}
                    sx={{ justifyContent: "space-between" }}
                  >
                    {sections.map((section, sectionIndex) => (
                      <Grid key={sectionIndex} {...section.gridProps}>
                        <List
                          component="nav"
                          sx={{
                            p: 1,
                            width: "100%",
                            maxWidth: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                          {...(section.title && {
                            subheader: (
                              <ListSubheader
                                sx={{
                                  p: 1,
                                  color: "text.primary",
                                  bgcolor: "transparent",
                                }}
                              >
                                <Typography variant="h6">
                                  {section.title}
                                </Typography>
                              </ListSubheader>
                            ),
                          })}
                        >
                          {section.items.map((item, index) => (
                            <SelectItem key={index} {...item} />
                          ))}
                        </List>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <GraphicsCard overlay>
              <Stack
                alignItems="center"
                direction={{ sm: "row" }}
                gap={1.5}
                justifyContent={{ xs: "center", sm: "space-between" }}
                sx={{
                  py: { xs: 2, sm: 1.5 },
                  px: { xs: 2, sm: 3 },
                }}
              >
                <Stack
                  alignItems={{ xs: "center", md: "flex-start" }}
                  gap={2}
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Stack direction="row" gap={{ xs: 0.5, sm: 1.5 }}>
                    {socials}
                  </Stack>
                </Stack>
              </Stack>
            </GraphicsCard>
          </Stack>
        </GraphicsCard>
      </motion.div>
    </Container>
  );
}
