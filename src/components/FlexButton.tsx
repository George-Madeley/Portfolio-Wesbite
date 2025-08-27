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
  const { breakCondition, breakpoint, ...otherProps } = props;

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints[breakCondition](breakpoint));

  if (!props.startIcon && !props.endIcon) {
    throw new Error("`Flex Button` needs either a `startIcon` or an `endIcon`");
  }

  if (isSmall) {
    return (
      <IconButton {...otherProps}>
        {props.startIcon ?? props.endIcon}
      </IconButton>
    );
  } else {
    return <Button {...otherProps}>{props.children}</Button>;
  }
}
