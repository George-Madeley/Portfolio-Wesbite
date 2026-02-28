"use client";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FallbackProps } from "react-error-boundary";

// Type guard to check if error is an Error-like object

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const isErrorLike = (
    error: unknown
  ): error is { name?: string; message?: string; stack?: string } => {
    return (
      typeof error === "object" &&
      error !== null &&
      ("name" in error || "message" in error || "stack" in error)
    );
  };

  return (
    <Stack alignItems="center" gap={1} justifyContent="center">
      {isErrorLike(error) ? (
        <Alert severity="error">
          <Stack gap={1}>
            <Typography variant="subtitle2">Something went wrong.</Typography>
            {(error.name || error.message) && (
              <Typography>
                {error.name && <>{error.name}</>}
                {error.name && error.message && " - "}
                {error.message && <>{error.message}</>}
              </Typography>
            )}
            {error.stack && (
              <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {error.stack}
              </pre>
            )}
          </Stack>
        </Alert>
      ) : (
        <Alert severity="error">
          <Typography>Unknown error occurred!</Typography>
        </Alert>
      )}
      <Button color="primary" onClick={resetErrorBoundary} variant="contained">
        Retry
      </Button>
    </Stack>
  );
}
