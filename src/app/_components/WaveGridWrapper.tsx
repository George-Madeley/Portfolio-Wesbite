"use client";

import { useTheme } from "@mui/material/styles";
import React from "react";
import WaveGrid from "~/app/_components/WaveGrid";

export default function GridWaveWrapper() {
  const theme = useTheme();

  return (
    <WaveGrid
      endColor={theme.palette.secondary.dark}
      maxDistance={150}
      particleSize={8}
      startColor={theme.palette.secondary.light}
    />
  );
}
