"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import peerDependenciesData from "~/data/peer-dependencies.json";

import type { ComponentDependencies } from "~/types/peer-dependencies";

interface DependencyTableProps {
  /**
   * The component file path (relative to project root).
   * Example: "src/components/Copy.tsx"
   */
  componentPath: string;

  /**
   * Optional title for the table. Defaults to "Peer Dependencies"
   */
  title?: string;

  /**
   * If true, shows the component path above the table
   */
  showPath?: boolean;
}

/**
 * DependencyTable component displays a table of peer dependencies
 * for a given component based on the generated peer-dependencies.json file.
 *
 * @example
 * ```tsx
 * <DependencyTable componentPath="src/components/Copy.tsx" />
 * ```
 *
 * @example
 * ```tsx
 * <DependencyTable
 *   componentPath="src/components/NeatBackground.tsx"
 *   title="Required Dependencies"
 *   showPath={true}
 * />
 * ```
 */
export default function DependencyTable({
  componentPath,
  title = "Peer Dependencies",
  showPath = false,
}: DependencyTableProps) {
  const data = peerDependenciesData as ComponentDependencies;
  const dependencies = data[componentPath];

  if (!dependencies || dependencies.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="text.secondary">
          No peer dependencies found for: {componentPath}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      {showPath && (
        <Typography color="text.secondary" gutterBottom variant="body2">
          Component: {componentPath}
        </Typography>
      )}
      <TableContainer component={Paper}>
        <Table aria-label={`${title} table`} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Package</strong>
              </TableCell>
              <TableCell>
                <strong>Version</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dependencies.map((dep) => (
              <TableRow key={dep.package}>
                <TableCell component="th" scope="row">
                  <code>{dep.package}</code>
                </TableCell>
                <TableCell>
                  <code>{dep.version}</code>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
