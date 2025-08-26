"use client";

import Button, { ButtonProps } from "@mui/material/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Breakpoint, Breakpoints, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface FlexButtonProps
  extends ButtonProps,
    Omit<IconButtonProps, keyof ButtonProps> {
  breakCondition: Exclude<
    keyof Breakpoints,
    "unit" | "keys" | "values" | "between"
  >;
  breakpoint: Breakpoint;
}

export default function FlexButton(props: FlexButtonProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(
    theme.breakpoints[props.breakCondition](props.breakpoint)
  );

  if (!props.startIcon && !props.endIcon) {
    throw new Error("`Flex Button` needs either a `startIcon` or an `endIcon`");
  }

  if (isSmall) {
    return (
      <IconButton {...props}>{props.startIcon ?? props.endIcon}</IconButton>
    );
  } else {
    return <Button {...props}>{props.children}</Button>;
  }
}
