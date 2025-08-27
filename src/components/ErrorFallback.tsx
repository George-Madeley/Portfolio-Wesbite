import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface ErrorFallbackProps {
  error: unknown;
}

// Type guard to check if error is an Error-like object
function isErrorLike(
  error: unknown
): error is { name?: string; message?: string; stack?: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    ("name" in error || "message" in error || "stack" in error)
  );
}

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  if (isErrorLike(error)) {
    const { name, message, stack } = error;

    return (
      <Alert severity="error">
        <Stack gap={1}>
          <Typography variant="subtitle2">Something went wrong.</Typography>
          {(name || message) && (
            <Typography>
              {name && <>{name}</>}
              {name && message && " - "}
              {message && <>{message}</>}
            </Typography>
          )}
          {stack && (
            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {stack}
            </pre>
          )}
        </Stack>
      </Alert>
    );
  }

  return (
    <Alert severity="error">
      <Typography>Unknown error occurred!</Typography>
    </Alert>
  );
}
