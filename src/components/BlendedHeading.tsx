import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

export default function BlendedHeading(props: TypographyProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Typography
        {...props}
        sx={{
          opacity: "60%",
          ...props.sx,
          mixBlendMode: "soft-light",
          lineHeight: 1,
        }}
      />
      <Typography
        {...props}
        sx={{
          opacity: "60%",
          ...(props.sx ?? {}),
          position: "absolute",
          zIndex: 100,
          mixBlendMode: "color-dodge",
          lineHeight: 1,
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
