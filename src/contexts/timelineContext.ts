"use client";

import { createContext, Dispatch, SetStateAction } from "react";

interface TimelineContext {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const timeContext = createContext<TimelineContext | undefined>(undefined);

export default timeContext;
