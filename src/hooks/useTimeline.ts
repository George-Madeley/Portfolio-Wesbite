"use client";

import { useContext } from "react";

import timelineContext from "~/contexts/timelineContext";

export default function useTimeline() {
  const context = useContext(timelineContext);

  if (!context) {
    throw new Error(
      "`useTimeline()` must be used within a child component of `<TimelineProvider>`"
    );
  }

  return context;
}
