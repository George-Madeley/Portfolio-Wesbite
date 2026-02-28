"use client";

import MuiPagination, {
  PaginationProps,
  PaginationRenderItemParams,
} from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Link from "next/link";
import React, { useCallback } from "react";

export default function ProjectsPagination(
  props: Omit<PaginationProps, "renderItem">
) {
  const handleRenderItem = useCallback(
    (item: PaginationRenderItemParams) => (
      <PaginationItem
        component={Link}
        href={`/projects?page=${item.page}`}
        {...item}
      />
    ),
    []
  );

  return <MuiPagination {...props} renderItem={handleRenderItem} />;
}
