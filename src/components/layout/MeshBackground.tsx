"use client";

import { MeshGradient, MeshGradientProps } from "@mesh-gradient/react";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import { PropsWithChildren } from "react";

import {
  darkLevel1,
  darkLevel2,
  darkLevel3,
  darkLevel4,
  lightLevel1,
  lightLevel2,
  lightLevel3,
  lightLevel4,
} from "~/style/theme";

export default function MeshBackground(
  props: PropsWithChildren<MeshGradientProps>
) {
  const { colorScheme } = useColorScheme();

  return (
    <Box
      sx={[
        () => ({
          minHeight: "100dvh",
          width: "100%",
          position: "relative",
          "--mesh-gradient-color-1": lightLevel1,
          "--mesh-gradient-color-2": lightLevel2,
          "--mesh-gradient-color-3": lightLevel3,
          "--mesh-gradient-color-4": lightLevel4,
        }),
        (theme) =>
          theme.applyStyles("dark", {
            minHeight: "100dvh",
            width: "100%",
            position: "relative",
            "--mesh-gradient-color-1": darkLevel1,
            "--mesh-gradient-color-2": darkLevel2,
            "--mesh-gradient-color-3": darkLevel3,
            "--mesh-gradient-color-4": darkLevel4,
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
