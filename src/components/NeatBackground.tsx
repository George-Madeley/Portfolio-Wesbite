"use client";

import { PropsWithChildren, useEffect, useMemo, useRef } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

interface NeatBackgroundProps {
  config: Omit<NeatConfig, "colors" | "backgroundColor">;
}

export default function NeatBackground(
  props: PropsWithChildren<NeatBackgroundProps>
) {
  const theme = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const webglSupported = useMemo<boolean>(() => isWebGLAvailable(), []);

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
          backgroundImage: `
            radial-gradient(at 40% 20%, var(--mui-palette-primary-main) 0px, transparent 50%),
            radial-gradient(at 80% 0%, var(--mui-palette-primary-dark) 0px, transparent 50%),
            radial-gradient(at 0% 50%, var(--mui-palette-secondary-main) 0px, transparent 50%),
            radial-gradient(at 80% 50%, var(--mui-palette-secondary-dark) 0px, transparent 50%),
            radial-gradient(at 0% 100%, var(--mui-palette-primary-main) 0px, transparent 50%),
            radial-gradient(at 80% 100%, var(--mui-palette-secondary-main) 0px, transparent 50%),
            radial-gradient(at 0% 0%, var(--mui-palette-primary-dark) 0px, transparent 50%)`,
          "&>a": {
            display: "none !important",
          },
        }}
      >
        {webglSupported && (
          <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        )}
      </Box>
      {props.children}
    </Box>
  );
}
