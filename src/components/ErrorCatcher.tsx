"use client";

import { ErrorBoundary, ErrorBoundaryProps } from "react-error-boundary";

import ErrorFallback from "./ErrorFallback";

type ErrorCatcherProps = Partial<ErrorBoundaryProps>;

export default function ErrorCatcher(props: ErrorCatcherProps) {
  const { fallback, FallbackComponent, fallbackRender, ...rest } = props;
  if (fallback || FallbackComponent || fallbackRender) {
    return <ErrorBoundary {...props} />;
  }
  return <ErrorBoundary {...rest} FallbackComponent={ErrorFallback} />;
}
