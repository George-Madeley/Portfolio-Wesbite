"use client";

import Stack from "@mui/material/Stack";
import TablePagination, {
  TablePaginationProps,
} from "@mui/material/TablePagination";
import { useRouter } from "next/navigation";

export default function ProjectsPagination(
  props: Omit<TablePaginationProps, "onPageChange" | "onRowsPerPageChange">
) {
  const router = useRouter();

  const handlePageChange = (event: unknown, newPage: number) => {
    router.push(`/projects?page=${newPage + 1}&per_page=${props.rowsPerPage}`);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    router.push(`/projects?page=1&per_page=${event.target.value}`);
  };

  return (
    <Stack alignItems={{ xs: "center", sm: "flex-end" }} sx={{ width: "100%" }}>
      <TablePagination
        {...props}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Stack>
  );
}
