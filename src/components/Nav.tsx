import Link from "next/link";
import React from "react";

import DataObjectIcon from "@mui/icons-material/DataObject";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import FlexButton from "./FlexButton";
import ToggleDarkMode from "./ToggleDarkmode";

export default function Nav() {
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
          gap={{ xs: 1, sm: 3 }}
          justifyContent="center"
        >
          <FlexButton
            LinkComponent={Link}
            breakCondition="down"
            breakpoint="sm"
            href={"/"}
            startIcon={<HomeIcon />}
          >
            Home
          </FlexButton>
          <FlexButton
            LinkComponent={Link}
            breakCondition="down"
            breakpoint="sm"
            href={"/projects"}
            startIcon={<DataObjectIcon />}
          >
            Projects
          </FlexButton>
          <FlexButton
            LinkComponent={Link}
            breakCondition="down"
            breakpoint="sm"
            href={"/about"}
            startIcon={<PersonIcon />}
          >
            About Me
          </FlexButton>
          <ToggleDarkMode />
        </Stack>
      </Card>
    </Stack>
  );
}
