"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import DependencyTable from "~/components/DependencyTable";

export default function ComponentsDemo() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography component="h1" gutterBottom variant="h3">
        Component Library Documentation
      </Typography>
      <Typography color="text.secondary" paragraph variant="body1">
        This page demonstrates how to display peer dependencies for components
        in your library. Each component section shows its required dependencies
        and their versions.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography component="h2" gutterBottom variant="h4">
          Copy Component
        </Typography>
        <Typography paragraph variant="body1">
          A component that provides copy-to-clipboard functionality with visual
          feedback.
        </Typography>
        <DependencyTable componentPath="src/components/Copy.tsx" />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography component="h2" gutterBottom variant="h4">
          NeatBackground Component
        </Typography>
        <Typography paragraph variant="body1">
          A component that renders an animated gradient background using WebGL.
        </Typography>
        <DependencyTable
          componentPath="src/components/NeatBackground.tsx"
          showPath
          title="Required Dependencies"
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography component="h2" gutterBottom variant="h4">
          FlexButton Component
        </Typography>
        <Typography paragraph variant="body1">
          A responsive button that switches between full button and icon button
          based on screen size.
        </Typography>
        <DependencyTable componentPath="src/components/FlexButton.tsx" />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography component="h2" gutterBottom variant="h4">
          ToggleDarkmode Component
        </Typography>
        <Typography paragraph variant="body1">
          A switch component for toggling between light and dark modes.
        </Typography>
        <DependencyTable componentPath="src/components/ToggleDarkmode.tsx" />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography component="h2" gutterBottom variant="h4">
          Nav Component
        </Typography>
        <Typography paragraph variant="body1">
          The main navigation bar component.
        </Typography>
        <DependencyTable componentPath="src/components/Nav.tsx" />
      </Box>
    </Container>
  );
}
