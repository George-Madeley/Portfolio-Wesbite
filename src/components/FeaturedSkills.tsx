"use client";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tab, { TabProps } from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { ReactNode, SyntheticEvent, useState } from "react";

import GraphicsCard from "./GraphicsCard";

interface FeaturedSkillsProps {
  heading: string;
  caption: string;
  topics: {
    icon: TabProps["icon"];
    title: string;
    subtitle: string;
    description: string;
    list: string[];
    image: ReactNode;
    button?: ReactNode;
  }[];
}

export default function FeaturedSkills({
  heading,
  caption,
  topics,
}: FeaturedSkillsProps) {
  const [value, setValue] = useState("1");

  // Handle tab change
  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
            <Typography variant="h2">{heading}</Typography>
            <Typography color="textSecondary" component="p" variant="h6">
              {caption}
            </Typography>
          </Stack>
        </motion.div>
        <Stack alignItems="center" gap={1.5}>
          <TabContext value={value}>
            <GraphicsCard sx={{ width: { xs: 1, sm: "unset" } }}>
              <Box sx={{ p: 0.25 }}>
                <TabList
                  onChange={handleChange}
                  slotProps={{ indicator: { sx: { display: "none" } } }}
                  sx={{ minHeight: "unset", p: 0.25 }}
                  variant="scrollable"
                >
                  {topics.map((item, index) => (
                    <Tab
                      disableFocusRipple
                      icon={item.icon}
                      iconPosition="start"
                      key={index}
                      label={item.title}
                      sx={{
                        minHeight: 44,
                        minWidth: { xs: 112, md: 160, sm: 156 },
                        borderRadius: 10,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "transparent",
                        "& svg ": { mr: 1 },
                        "&.Mui-selected": {
                          // bgcolor: "grey.200",
                          // borderColor: "grey.400",
                          minWidth: { xs: 112, md: 160, sm: 156 },
                          color: "text.primary",
                          "& svg": { stroke: "text.primary" },
                        },
                        // "&.Mui-focusVisible": { bgcolor: "grey.300" },
                        // "&:hover": { bgcolor: "grey.200" },
                      }}
                      value={String(index + 1)}
                    />
                  ))}
                </TabList>
              </Box>
            </GraphicsCard>
            {topics.map((item, index) => (
              <TabPanel
                key={index}
                sx={{ p: 0, width: 1 }}
                value={String(index + 1)}
              >
                <Grid alignItems="stretch" container spacing={1.5}>
                  <Grid size={{ xs: 12, sm: 5 }} sx={{ flex: 1 }}>
                    <GraphicsCard
                      sx={{
                        height: "100%",
                      }}
                    >
                      <CardContent>
                        <motion.div
                          initial={{ opacity: 0, x: 100, y: 100 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                        >
                          <Box
                            sx={{
                              height: { xs: 260, sm: 396, md: 434 },
                            }}
                          >
                            {item.image}
                          </Box>
                        </motion.div>
                      </CardContent>
                    </GraphicsCard>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 7 }} sx={{ display: "flex" }}>
                    <GraphicsCard
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <CardContent>
                        <Stack
                          sx={{
                            gap: 3,
                            justifyContent: "space-between",
                            height: 1,
                          }}
                        >
                          <motion.div
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            initial={{ opacity: 0, x: -30 }}
                            key={index}
                            transition={{
                              duration: 0.2,
                              ease: "linear",
                              delay: index * 0.1,
                            }}
                          >
                            <Stack alignItems="center" direction="row" gap={1}>
                              {item.icon}
                              <Typography
                                sx={{ color: "text.secondary" }}
                                variant="subtitle2"
                              >
                                {item.title}
                              </Typography>
                            </Stack>
                          </motion.div>
                          <Stack sx={{ gap: { xs: 2, md: 3 } }}>
                            <Stack sx={{ gap: 0.5 }}>
                              <Typography variant="h4">
                                {item.subtitle}
                              </Typography>
                              {item.description && (
                                <Typography sx={{ color: "text.secondary" }}>
                                  {item.description}
                                </Typography>
                              )}
                            </Stack>
                            {item.list && (
                              <Grid container spacing={{ xs: 0.75, md: 1 }}>
                                {item.list.map((list, index) => (
                                  <Grid key={index} size={{ xs: 12, sm: 6 }}>
                                    <motion.div
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -30 }}
                                      initial={{ opacity: 0, x: -30 }}
                                      key={index}
                                      transition={{
                                        duration: 0.2,
                                        ease: "linear",
                                        delay: index * 0.1,
                                      }}
                                    >
                                      <Stack
                                        direction="row"
                                        sx={{
                                          gap: 0.5,
                                          alignItems: "center",
                                          "& svg.tabler-rosette-discount-check":
                                            {
                                              width: { xs: 16, md: 24 },
                                              height: { xs: 16, md: 24 },
                                            },
                                        }}
                                      >
                                        <Typography
                                          sx={{ color: "text.secondary" }}
                                          variant="body2"
                                        >
                                          {list}
                                        </Typography>
                                      </Stack>
                                    </motion.div>
                                  </Grid>
                                ))}
                              </Grid>
                            )}
                          </Stack>
                          {item.button && (
                            <motion.div
                              tabIndex={-1}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                              }}
                            >
                              {item.button}
                            </motion.div>
                          )}
                        </Stack>
                      </CardContent>
                    </GraphicsCard>
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
          </TabContext>
        </Stack>
      </Stack>
    </Container>
  );
}
