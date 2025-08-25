import Link from "next/link";
import React from "react";

import ToggleDarkMode from "./ToggleDarkmode";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";

import Card from "@mui/material/Card";

export function Nav() {
  return (
    <Stack
      alignItems="center"
      component="nav"
      justifyContent="start"
      sx={{ width: "100%" }}
    >
      <Card
        sx={{
          width: "fit-content",
          m: 1,
          p: 1,
          position: "fixed",
          zIndex: 1000,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          gap={3}
          justifyContent="center"
        >
          <Button LinkComponent={Link} href={"/"} startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button
            LinkComponent={Link}
            href={"/projects"}
            startIcon={<GitHubIcon />}
          >
            Projects
          </Button>
          <Button
            LinkComponent={Link}
            href={"/about"}
            startIcon={<PersonIcon />}
          >
            About Me
          </Button>
          <ToggleDarkMode />
        </Stack>
      </Card>
    </Stack>
  );
}
