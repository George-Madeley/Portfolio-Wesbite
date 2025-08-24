"use client";

import "./ToggleDarkmode.css";

import { useCallback } from "react";
import { useColorScheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export function ToggleDarkMode() {
  const { mode, setMode } = useColorScheme();

  const toggleMode = useCallback(() => {
    console.log(mode);
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  return <Switch checked={mode === "dark"} onChange={toggleMode} />;
}
