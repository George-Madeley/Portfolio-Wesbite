"use client";

import DataObjectIcon from "@mui/icons-material/DataObject";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import StyledToggleButtonGroup from "~/style/StyledToggleButtonGroup";

import ThemeSwitcher from "../ThemeSwitcher";

export default function Nav() {
  const pathname = usePathname();

  const links: { label: string; href: string; icon: ReactNode }[] = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <DataObjectIcon />,
    },
    {
      label: "About Me",
      href: "/about",
      icon: <PersonIcon />,
    },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

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
          p: 0.5,
          zIndex: 1000,
        }}
      >
        <StyledToggleButtonGroup>
          {links.map((link) => (
            <ToggleButton
              color="primary"
              href={link.href}
              key={link.href}
              selected={isActive(link.href)}
              size="small"
              value={link.label.toLowerCase()}
            >
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                sx={{ pr: { xs: 0, sm: 1 } }}
              >
                {link.icon}
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              </Stack>
            </ToggleButton>
          ))}
          <ThemeSwitcher />
        </StyledToggleButtonGroup>
      </Card>
    </Stack>
  );
}
