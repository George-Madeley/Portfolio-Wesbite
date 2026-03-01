"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface AnimatedCounterProps {
  startCount: number;
  endCount: number;
}

export default function AnimatedCounter({
  startCount,
  endCount,
}: AnimatedCounterProps) {
  const countValue = useMotionValue(startCount);
  const rounded = useTransform(countValue, (value) => Math.round(value));

  useEffect(() => {
    const controls = animate(countValue, endCount, {
      duration: 5,
      ease: "linear",
    });

    return () => controls.stop();
  }, [countValue, endCount]);

  return <motion.pre style={{ margin: 0 }}>{rounded}</motion.pre>;
}
