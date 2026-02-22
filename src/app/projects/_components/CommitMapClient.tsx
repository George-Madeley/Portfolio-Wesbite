"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { debounce } from "~/utils/debounce";

import Box from "@mui/material/Box";
import { alpha, hexToRgb, rgbToHex, useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

interface CommitMapClientProps {
  year: number;
  dailyCounts: Record<string, number>;
}

export default function CommitMapClient(props: CommitMapClientProps) {
  const theme = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  const [boxSize, setBoxSize] = useState(18);

  const gapFactor = 0.1;

  const now = Date.now();
  const maxCommit = Math.max(...Object.values(props.dailyCounts));

  const grid = useMemo(() => {
    const firstDay = new Date(`${props.year}-01-01`);
    const lastDay = new Date(`${props.year}-12-31`);

    const grid = [];

    const current = new Date(firstDay);

    while (current <= lastDay) {
      const week = [];
      for (let d = 0; d < 7 && current <= lastDay; d++) {
        const key = current.toISOString().slice(0, 10);
        week.push({
          date: key,
          count: props.dailyCounts[key] || 0,
        });
        current.setDate(current.getDate() + 1);
      }
      grid.push(week);
    }
    return grid;
  }, [props.dailyCounts, props.year]);

  const lerpColor = useCallback((c1: string, c2: string, t: number): string => {
    function parseRgb(rgb: string): { r: number; g: number; b: number } {
      const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      if (!match) throw new Error("Invalid rgb string");
      return {
        r: Number(match[1]),
        g: Number(match[2]),
        b: Number(match[3]),
      };
    }

    const c1Rgb = parseRgb(hexToRgb(c1));
    const c2Rgb = parseRgb(hexToRgb(c2));
    const r = Math.round(c1Rgb.r + (c2Rgb.r - c1Rgb.r) * t);
    const g = Math.round(c1Rgb.g + (c2Rgb.g - c1Rgb.g) * t);
    const b = Math.round(c1Rgb.b + (c2Rgb.b - c1Rgb.b) * t);
    return rgbToHex(`rgb(${r}, ${g}, ${b})`);
  }, []);

  const getColor = useCallback(
    (count: number, date: string) => {
      const dateUtc = new Date(date).getTime();
      if (dateUtc > now) {
        return alpha(theme.palette.text.primary, 0.3);
      }
      if (count === 0) return theme.palette.primary.light;

      // Gradient between light and main color
      const min = 1;
      const max = maxCommit > min ? maxCommit : min + 1; // Avoid divide by zero
      const t = Math.min(Math.max((count - min) / (max - min), 0), 1);

      return lerpColor(
        theme.palette.primary.main,
        theme.palette.primary.dark,
        t
      );
    },
    [
      lerpColor,
      maxCommit,
      now,
      theme.palette.primary.dark,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.text.primary,
    ]
  );

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const weeks = grid.length;
      const size = width / weeks;
      setBoxSize(size);
    };

    const debouncedResize = debounce(handleResize, 100);

    // Observe container resize
    const observer = new ResizeObserver(() => {
      // Debounce/throttle can be added here if needed
      debouncedResize();
    });

    if (containerRef.current) observer.observe(containerRef.current);

    // Initial calculation
    handleResize();

    return () => observer.disconnect();
  }, [grid.length]);

  return (
    <Box display="flex" ref={containerRef} sx={{ width: "100%" }}>
      {grid.map((week, i) => (
        <Box
          display="flex"
          flexDirection="column"
          key={i}
          mr={`${boxSize * gapFactor}px`}
        >
          {week.map((day, j) => (
            <Tooltip arrow key={j} title={`${day.date}: ${day.count} commits`}>
              <Box
                bgcolor={getColor(day.count, day.date)}
                borderRadius={boxSize * (1 - gapFactor)}
                height={boxSize * (1 - gapFactor)}
                mb={`${boxSize * gapFactor}px`}
                sx={{ cursor: "pointer" }}
                width={boxSize * (1 - gapFactor)}
              />
            </Tooltip>
          ))}
        </Box>
      ))}
    </Box>
  );
}
