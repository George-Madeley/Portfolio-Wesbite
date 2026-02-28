"use client";

import StepLabel, { StepLabelProps } from "@mui/material/StepLabel";

import useTimeline from "~/hooks/useTimeline";

interface ExperienceLabelProps extends StepLabelProps {
  step: number;
}

export default function ExperienceLabel(props: ExperienceLabelProps) {
  const { setStep } = useTimeline();

  const handleClick = () => setStep(props.step);

  return (
    <StepLabel
      onClick={handleClick}
      {...props}
      sx={{
        ...props.sx,
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.1)",
          transition: "transform 100ms ease-out",
          transformOrigin: "center left",
        },
      }}
    />
  );
}
