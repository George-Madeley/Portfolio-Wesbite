"use client";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Stack from "@mui/material/Stack";
import { useColorScheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { ChangeEvent, useCallback } from "react";

export default function ThemeSwitcher() {
  const { mode, setMode } = useColorScheme();

  const handleChange = useCallback(
    (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setMode(checked ? "dark" : "light");
    },
    [setMode]
  );

  return (
    <Stack alignItems="center" direction="row" gap={1} justifyContent="center">
      <LightModeIcon />
      <Switch checked={mode === "dark"} onChange={handleChange} />
      <DarkModeIcon />
    </Stack>
  );
}
