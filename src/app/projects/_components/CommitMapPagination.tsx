"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import Stack, { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface CommitMapPaginationProps extends StackProps {
  year: number;
}

export default function CommitMapPagination(props: CommitMapPaginationProps) {
  const { year, ...stackProps } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentYear = new Date(Date.now()).getFullYear();

  const handleClick = useCallback(
    (value: number) => () => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set("year", `${value}`);
      const search = current.toString();
      router.push(`${pathname}?${search}`);
      console.log(`${value}`);
    },
    [pathname, router, searchParams]
  );

  return (
    <Stack {...stackProps} alignItems="center" direction="row">
      <IconButton disabled={year === 2020} onClick={handleClick(year - 1)}>
        <ArrowBackIcon fontSize="small" />
      </IconButton>
      <Typography>{year}</Typography>
      <IconButton
        disabled={year === currentYear}
        onClick={handleClick(year + 1)}
      >
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}
