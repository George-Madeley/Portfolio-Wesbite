"use client";

import { PropsWithChildren } from "react";
import { MeshGradient, MeshGradientProps } from "@mesh-gradient/react";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material";

export default function MeshBackground(
  props: PropsWithChildren<MeshGradientProps>
) {
  const { colorScheme } = useColorScheme();

  return (
    <Box
      sx={[
        (theme) => ({
          minHeight: "100dvh",
          width: "100%",
          position: "relative",
          "--mesh-gradient-color-1": "#F7F7F7",
          "--mesh-gradient-color-2": "#F0F0F0",
          "--mesh-gradient-color-3": "#E8E8E8",
          "--mesh-gradient-color-4": "#E0E0E0",
        }),
        (theme) =>
          theme.applyStyles("dark", {
            minHeight: "100dvh",
            width: "100%",
            position: "relative",
            "--mesh-gradient-color-1": "#121212",
            "--mesh-gradient-color-2": "#1a1a1a",
            "--mesh-gradient-color-3": "#212121",
            "--mesh-gradient-color-4": "#282828",
          }),
      ]}
    >
      <MeshGradient
        {...props}
        key={colorScheme}
        options={{
          cssVariablesFallback: true,
        }}
        style={{
          position: "fixed",
          height: "100dvh",
          width: "100vw",
          top: 0,
          right: 0,
          zIndex: -1,
          backgroundColor: "var(--mui-palette-background-default)",
          ...props.style,
        }}
      />
      {props.children}
    </Box>
  );
}
