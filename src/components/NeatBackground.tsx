"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

interface NeatBackgroundProps {
  config: Omit<NeatConfig, "colors" | "backgroundColor">;
}

export default function NeatBackground(
  props: PropsWithChildren<NeatBackgroundProps>
) {
  const theme = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const neatGradient = new NeatGradient({
        ref: canvasRef.current,
        ...props.config,
        backgroundColor: "var(--mui-palette-primary-main)",
        colors: [
          {
            enabled: true,
            color: theme.palette.primary.main,
          },
          {
            enabled: true,
            color: theme.palette.primary.dark,
          },
          {
            enabled: true,
            color: theme.palette.secondary.main,
          },
          {
            enabled: true,
            color: theme.palette.secondary.dark,
          },
        ],
      });
      return () => {
        neatGradient.destroy();
      };
    }
  });

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          height: "100dvh",
          width: "100vw",
          top: 0,
          right: 0,
          zIndex: -1,
          backgroundColor: "var(--mui-palette-primary-main)",
          "&>a": {
            display: "none !important",
          },
        }}
      >
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      </Box>
      {props.children}
    </Box>
  );
}
