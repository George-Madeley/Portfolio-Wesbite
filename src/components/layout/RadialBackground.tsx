"use client";

import React, { PropsWithChildren } from "react";

interface RadialBackgroundProps {
  color: string;
}

export default function RadialBackground(
  props: PropsWithChildren<RadialBackgroundProps>
) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "var(--mui-palette-background-default)",
        position: "relative",
        top: "-70px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, var(--mui-palette-background-default) 40%, ${props.color} 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{props.children}</div>
    </div>
  );
}
