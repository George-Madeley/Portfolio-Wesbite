"use client";

import { useCallback, useState } from "react";

import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Stepper, { StepperProps } from "@mui/material/Stepper";
import timelineContext from "~/contexts/timelineContext";

export default function TimelineProvider(props: StepperProps) {
  const [step, setStep] = useState<number>(0);

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const handlePrev = useCallback(
    () => setStep((curr) => (curr === 0 ? curr : curr - 1)),
    []
  );

  const handleClick = useCallback((index: number) => () => setStep(index), []);

  const handleNext = useCallback(
    () => setStep((curr) => (curr === children.length - 1 ? curr : curr + 1)),
    [children.length]
  );

  return (
    <Stack alignItems="center">
      {Array.isArray(props.children) && (
        <Card sx={{ position: "fixed", bottom: "1rem", zIndex: 6 }}>
          <Stack
            alignItems="center"
            direction="row"
            gap={1}
            justifyContent="center"
          >
            <IconButton
              disabled={step === children.length - 1}
              onClick={handleNext}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Stack
              alignItems="center"
              direction="row"
              gap={1}
              justifyContent="center"
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              {children.map((_, index) => (
                <IconButton
                  className={`timeline-step-${index}`}
                  key={index}
                  onClick={handleClick(index)}
                  sx={{
                    p: 0,
                    transition: "transform 100ms ease",
                    transformOrigin: "bottom center",
                    [":hover"]: {
                      transform: "scale(1.4)",
                      "& + button": {
                        transform: "scale(1.1)",
                      },
                    },
                    [`&:has(+ .timeline-step-${index + 1}:hover)`]: {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CircleIcon
                    sx={{
                      color:
                        index === step
                          ? "var(--mui-palette-primary-main)"
                          : "var(--mui-palette-text-disabled)",
                    }}
                  />
                </IconButton>
              ))}
            </Stack>
            <IconButton disabled={step === 0} onClick={handlePrev}>
              <KeyboardArrowUpIcon />
            </IconButton>
          </Stack>
        </Card>
      )}
      <timelineContext.Provider value={{ step, setStep }}>
        <Stepper {...props} activeStep={step} sx={{ width: "100%" }}>
          {children}
        </Stepper>
      </timelineContext.Provider>
    </Stack>
  );
}
