"use client";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";

import GraphicsCard from "./GraphicsCard";
import SelectItem, { SelectItemProps } from "./SelectItem";

interface CoursesMenuProps {
  heading: string;
  caption: string;
  image: ReactNode;
  sections: {
    title: string;
    items: SelectItemProps[];
  }[];
}

export default function CoursesMenu({
  heading,
  caption,
  image,
  sections,
}: CoursesMenuProps) {
  const gridItem = Math.floor(12 / sections.length);

  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <Container>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack
          alignItems="center"
          direction={{ xs: "column-reverse", sm: "row" }}
          gap={4}
        >
          <Stack
            flex={{ xs: undefined, sm: 2 }}
            width={{ xs: 1, md: undefined }}
          >
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              style={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
            >
              <Stack
                alignItems="center"
                sx={{
                  height: 300,
                  width: "100%",
                }}
                width="100%"
              >
                {image}
              </Stack>
            </motion.div>
          </Stack>
          <Box sx={{ flex: { xs: undefined, sm: 3 } }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              style={{ flex: 3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Stack
                alignItems={{ xs: "center", sm: "end" }}
                gap={{ xs: 1, sm: 1.5 }}
                mx="auto"
                textAlign={{ xs: "center", sm: "right" }}
              >
                <Typography variant="h2">{heading}</Typography>
                {caption && (
                  <Typography color="textSecondary" component="p" variant="h6">
                    {caption}
                  </Typography>
                )}
              </Stack>
            </motion.div>
          </Box>
        </Stack>
        <Grid
          alignItems="stretch"
          container
          justifyContent="center"
          spacing={1.5}
        >
          {sections.map((section, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: gridItem }}>
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
                <GraphicsCard sx={{ height: "100%" }}>
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
                          <Typography variant="h6">{section.title}</Typography>
                        </ListSubheader>
                      ),
                    })}
                  >
                    {section.items
                      .filter((_, index) => index < 8)
                      .map((item, index) => (
                        <SelectItem key={index} {...item} />
                      ))}
                    <Collapse in={showMore} timeout="auto" unmountOnExit>
                      {section.items
                        .filter((_, index) => index >= 8)
                        .map((item, index) => (
                          <SelectItem key={index} {...item} />
                        ))}
                    </Collapse>
                  </List>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" justifyContent="end">
          <Button
            color="inherit"
            endIcon={
              <motion.div
                animate={{ rotate: showMore ? 180 : 0 }}
                style={{ display: "flex" }}
              >
                <ArrowDownwardIcon />
              </motion.div>
            }
            onClick={() => setShowMore((prev) => !prev)}
            variant="outlined"
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
