"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

export default function ThemeSwitcher() {
  const { colorScheme, setMode } = useColorScheme();
  return (
    <Tooltip title={colorScheme === "dark" ? "Dark Mode" : "Light Mode"}>
      <IconButton
        onClick={() => setMode(colorScheme === "dark" ? "light" : "dark")}
      >
        {colorScheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
