"use client";

import { PropsWithChildren } from "react";
import { MeshGradient, MeshGradientProps } from "@mesh-gradient/react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function MeshBackground(
  props: PropsWithChildren<MeshGradientProps>
) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        width: "100%",
        position: "relative",
      }}
    >
      <MeshGradient
        {...props}
        options={{
          colors: [
            theme.palette.primary.dark,
            theme.palette.primary.main,
            theme.palette.primary.light,
            theme.palette.primary.main,
          ],
        }}
        style={{
          position: "fixed",
          height: "100dvh",
          width: "100vw",
          top: 0,
          right: 0,
          zIndex: -1,
          backgroundColor: theme.palette.primary.main,
          ...props.style,
        }}
      />
      {props.children}
    </Box>
  );
}
