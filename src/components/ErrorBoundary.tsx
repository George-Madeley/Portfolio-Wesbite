import React, { ReactNode } from "react";

import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      if (fallback) return fallback;
      return (
        <Alert>
          <Typography variant="subtitle2">Something went wrong.</Typography>
          <Typography>
            {error?.name} - {error?.message}
          </Typography>
          <pre>{error?.stack}</pre>
        </Alert>
      );
    }

    return children;
  }
}
