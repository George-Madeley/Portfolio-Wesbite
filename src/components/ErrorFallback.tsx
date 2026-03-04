import Alert, { AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface ErrorFallbackProps extends Omit<AlertProps, "severity"> {
  error: Error;
}

export default function ErrorFallback({
  error,
  ...alertProps
}: ErrorFallbackProps) {
  return (
    <Alert severity="error" {...alertProps}>
      <AlertTitle>Error - {error.name}</AlertTitle>
      <Stack gap={1}>
        <Typography>{error.message}</Typography>
        {error.stack && (
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {error.stack}
          </pre>
        )}
      </Stack>
    </Alert>
  );
}
