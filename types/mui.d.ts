import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    mobile: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
