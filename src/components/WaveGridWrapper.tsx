"use client";

import { useColorScheme } from "@mui/material/styles";
import WaveGrid from "~/components/WaveGrid";
import {
  darkLevel1,
  darkLevel4,
  lightLevel1,
  lightLevel4,
} from "~/style/theme";

export default function GridWaveWrapper() {
  const { colorScheme } = useColorScheme();

  return (
    <WaveGrid
      endColor={colorScheme === "dark" ? lightLevel1 : darkLevel1}
      maxDistance={150}
      particleSize={8}
      startColor={colorScheme === "dark" ? lightLevel4 : darkLevel4}
    />
  );
}
