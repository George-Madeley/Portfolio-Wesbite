"use client";
import Link from "next/link";

import { ColorSystemOptions, createTheme } from "@mui/material/styles";
import { cyan, teal } from "@mui/material/colors";
import { roboto } from "./font";

const colorScheme: ColorSystemOptions = {
  palette: {
    primary: {
      dark: teal[800],
      main: teal[500],
      light: teal[300],
    },
    secondary: {
      dark: cyan[900],
      main: cyan[700],
      light: cyan[400],
    },
  },
};

const theme = createTheme({
  colorSchemes: { light: colorScheme, dark: colorScheme },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: colorScheme.palette,
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
