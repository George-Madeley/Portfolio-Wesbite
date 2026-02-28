"use client";
import { cyan, teal } from "@mui/material/colors";
import { ColorSystemOptions, createTheme } from "@mui/material/styles";
import Link from "next/link";

/* ---------------------------------- dark ---------------------------------- */

const darkLevel0 = "#090909";
export const darkLevel1 = "#121212";
export const darkLevel2 = "#1a1a1a";
export const darkLevel3 = "#212121";
export const darkLevel4 = "#282828";

const darkColorScheme: ColorSystemOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: teal[500],
    },
    secondary: {
      main: cyan[700],
    },
    background: {
      default: darkLevel0,
      paper: "#040404",
    },
  },
};

/* ---------------------------------- light --------------------------------- */

const lightLevel0 = "#F3FFFF";
export const lightLevel1 = "#EDFFFE";
export const lightLevel2 = "#E1F2F1";
export const lightLevel3 = "#D5E6E5";
export const lightLevel4 = "#CAD9D8";

const lightColorScheme: ColorSystemOptions = {
  palette: {
    mode: "light",
    primary: {
      main: teal[500],
    },
    secondary: {
      main: cyan[700],
    },
    background: {
      default: lightLevel0,
      paper: "#F7FFFF",
    },
  },
};

/* ---------------------------------- theme --------------------------------- */

const theme = createTheme({
  colorSchemes: { light: lightColorScheme, dark: darkColorScheme },
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
  palette: darkColorScheme.palette,
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
