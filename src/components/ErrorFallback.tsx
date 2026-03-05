"use client";

import Alert, { alertClasses, AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ErrorObject } from "serialize-error";

/**
 * Props for the ErrorFallback component.
 */
interface ErrorFallbackProps extends Omit<AlertProps, "severity"> {
  error: ErrorObject;
  hideStack?: boolean;
}

/**
 * A fallback component to display error information.
 * @param param0 Props containing the error object and additional alert
 * properties.
 * @returns A JSX element displaying the error details.
 */
export default function ErrorFallback({
  error,
  hideStack = false,
  ...alertProps
}: ErrorFallbackProps) {
  return (
    <Alert
      severity="error"
      {...alertProps}
      sx={{
        ...alertProps.sx,
        [`& .${alertClasses.message}`]: {
          overflowY: "hidden",
        },
      }}
    >
      <AlertTitle>{error.name}</AlertTitle>
      <Stack
        gap={1}
        sx={{
          maxHeight: "100%",
          "& *::-webkit-scrollbar": {
            width: "4px",
          },
          "& *::-webkit-scrollbar-track": {
            background: (theme) => theme.vars?.palette.Alert.errorStandardBg,
            borderRadius: "4px",
          },
          "& *::-webkit-scrollbar-thumb": {
            background: (theme) => theme.vars?.palette.Alert.errorColor,
            borderRadius: "4px",
          },
        }}
      >
        <Typography>{error.message}</Typography>
        {error.stack && !hideStack && (
          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              width: "100%",
              height: "100%",
              overflowY: "auto",
            }}
          >
            {error.stack}
          </pre>
        )}
      </Stack>
    </Alert>
  );
}
