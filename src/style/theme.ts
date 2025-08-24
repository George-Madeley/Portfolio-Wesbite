"use client";
import { createTheme } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;
