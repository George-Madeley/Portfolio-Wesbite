import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

export default function BlendedHeading(props: TypographyProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Typography
        {...props}
        sx={{
          ...props.sx,
          mixBlendMode: "soft-light",
          opacity: "60%",
          lineHeight: 1,
        }}
      />
      <Typography
        {...props}
        sx={{
          ...(props.sx ?? {}),
          position: "absolute",
          zIndex: 100,
          mixBlendMode: "color-dodge",
          opacity: "60%",
          lineHeight: 1,
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
