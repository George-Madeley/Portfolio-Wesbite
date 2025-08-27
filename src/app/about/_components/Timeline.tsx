"use client";

import { useCallback, useState } from "react";

import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Stepper, { StepperProps } from "@mui/material/Stepper";

export default function Timeline(props: StepperProps) {
  const [step, setStep] = useState<number>(0);

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const handlePrev = useCallback(
    () => setStep((curr) => (curr === 0 ? curr : curr - 1)),
    []
  );

  const handleNext = useCallback(
    () => setStep((curr) => (curr === children.length - 1 ? curr : curr + 1)),
    [children.length]
  );

  return (
    <Stack alignItems="center">
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
              <CircleIcon
                key={index}
                sx={{
                  color:
                    index === step
                      ? "var(--mui-palette-primary-main)"
                      : "var(--mui-palette-text-disabled)",
                }}
              />
            ))}
          </Stack>
          <IconButton disabled={step === 0} onClick={handlePrev}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </Stack>
      </Card>
      <Stepper {...props} activeStep={step} sx={{ width: "100%" }}>
        {children}
      </Stepper>
    </Stack>
  );
}
