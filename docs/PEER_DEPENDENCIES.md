# Peer Dependency Analysis System

This repository includes an automated system for analyzing and displaying peer dependencies for React components in your library.

## Overview

The system consists of three main parts:

1. **Script (`scripts/generate-peer-deps.ts`)**: Analyzes TypeScript/JavaScript files to extract all third-party dependencies
2. **Data File (`src/data/peer-dependencies.json`)**: Generated JSON file mapping components to their dependencies
3. **UI Components**: React components for displaying dependency tables in documentation

## How It Works

### 1. Dependency Analysis Script

The script performs a deep analysis of component files:

- Parses import statements from TypeScript/JavaScript files
- Recursively follows local imports to find all dependencies
- Identifies third-party packages (peer dependencies)
- Extracts package names (e.g., `@mui/material` from `@mui/material/Button`)
- Looks up version information from `package.json`
- Generates a structured JSON file with the results

### 2. Generating Dependency Data

Run the script using npm:

```bash
npm run gen:deps
```

This command analyzes all components in `src/components/` and generates `src/data/peer-dependencies.json`.

#### Custom Usage

You can also run the script with custom paths:

```bash
npx tsx scripts/generate-peer-deps.ts <input-path> <output-path>
```

Examples:

```bash
# Analyze a specific file
npx tsx scripts/generate-peer-deps.ts src/components/Copy.tsx src/data/copy-deps.json

# Analyze a different directory
npx tsx scripts/generate-peer-deps.ts src/app src/data/app-dependencies.json
```

### 3. Using the Generated Data

#### Option A: Use the DependencyTable Component

The easiest way to display dependencies is using the provided React component:

```tsx
import DependencyTable from "~/components/DependencyTable";

export default function ComponentPage() {
  return (
    <div>
      <h1>My Component</h1>
      <p>Description of the component...</p>

      <DependencyTable componentPath="src/components/Copy.tsx" />
    </div>
  );
}
```

##### Props

- `componentPath` (required): The component file path relative to project root
- `title` (optional): Custom title for the table (default: "Peer Dependencies")
- `showPath` (optional): Show the component path above the table (default: false)

##### Examples

```tsx
// Basic usage
<DependencyTable componentPath="src/components/Copy.tsx" />

// With custom title and path display
<DependencyTable
  componentPath="src/components/NeatBackground.tsx"
  title="Required Dependencies"
  showPath={true}
/>
```

#### Option B: Use the Utility Functions

For more control over how you display the data, use the utility functions:

```typescript
import {
  getPeerDependencies,
  getAllComponentPaths,
  getAllPeerDependencies,
  hasPeerDependency,
  getComponentsByPackage,
} from "~/utils/peer-dependencies";

// Get dependencies for a specific component
const deps = getPeerDependencies("src/components/Copy.tsx");
// Returns: [{ package: "react", version: "^19.0.0" }, ...]

// Get all component paths
const paths = getAllComponentPaths();
// Returns: ["src/components/Copy.tsx", ...]

// Check if a component has a specific dependency
const hasReact = hasPeerDependency("src/components/Copy.tsx", "react");
// Returns: true

// Find all components that use a specific package
const reactComponents = getComponentsByPackage("react");
// Returns: ["src/components/Copy.tsx", ...]

// Get all data
const allDeps = getAllPeerDependencies();
```

#### Option C: Import the JSON Directly

You can also import and use the raw JSON data:

```typescript
import peerDependenciesData from "~/data/peer-dependencies.json";

const copyDeps = peerDependenciesData["src/components/Copy.tsx"];
```

## Data Structure

The generated JSON file has the following structure:

```json
{
  "src/components/Copy.tsx": [
    {
      "package": "@mui/icons-material",
      "version": "^7.3.1"
    },
    {
      "package": "@mui/material",
      "version": "^7.3.1"
    },
    {
      "package": "react",
      "version": "^19.0.0"
    }
  ],
  "src/components/NeatBackground.tsx": [
    {
      "package": "@firecms/neat",
      "version": "^0.4.0"
    },
    {
      "package": "@mui/material",
      "version": "^7.3.1"
    },
    {
      "package": "react",
      "version": "^19.0.0"
    }
  ]
}
```

## Demo Page

Visit `/components-demo` to see a live demonstration of the DependencyTable component displaying peer dependencies for various components in the library.

## Workflow

1. **Develop components** in `src/components/`
2. **Generate dependency data** by running `npm run gen:deps`
3. **Use in documentation** by importing and using `DependencyTable` or utility functions
4. **Regenerate** whenever you add/modify components or update dependencies

## Tips

- Run `npm run gen:deps` after:
  - Adding new components
  - Modifying component imports
  - Updating package versions in `package.json`
- Commit the generated `src/data/peer-dependencies.json` to version control so it's available at build time

- The script follows local imports recursively, so it captures transitive dependencies

- Only third-party packages are included (not relative imports or built-in Node modules)

## Customization

You can customize the script behavior by editing `scripts/generate-peer-deps.ts`:

- Change import detection regex patterns
- Modify how package names are extracted
- Filter specific packages
- Adjust the output format

## TypeScript Support

The system is fully typed. Import types from the utilities:

```typescript
import type {
  DependencyInfo,
  ComponentDependencies,
} from "~/utils/peer-dependencies";

const deps: DependencyInfo[] =
  getPeerDependencies("src/components/Copy.tsx") ?? [];
```
