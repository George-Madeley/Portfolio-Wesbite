#!/usr/bin/env ts-node

/**
 * Script to analyze TypeScript components and generate a mapping of components
 * to their peer dependencies (third-party packages) with versions.
 *
 * This script:
 * 1. Takes a directory path or file paths as input
 * 2. Recursively resolves all imports in each component
 * 3. Identifies third-party dependencies (peer dependencies)
 * 4. Looks up versions from package.json
 * 5. Generates a JSON file with the dependency information
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import type {
  ComponentDependencies,
  DependencyInfo,
} from "../src/types/peer-dependencies.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get package.json to extract version information
function getPackageJson(projectRoot: string): any {
  const packageJsonPath = path.join(projectRoot, "package.json");
  const content = fs.readFileSync(packageJsonPath, "utf-8");
  return JSON.parse(content);
}

// Extract import statements from a TypeScript file
function extractImports(filePath: string): string[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const imports: string[] = [];

  // Match various import patterns
  const importRegexes = [
    // import X from "package"
    /import\s+(?:\w+|\{[^}]+\})\s+from\s+["']([^"']+)["']/g,
    // import "package"
    /import\s+["']([^"']+)["']/g,
    // require("package")
    /require\s*\(\s*["']([^"']+)["']\s*\)/g,
  ];

  for (const regex of importRegexes) {
    let match;
    while ((match = regex.exec(content)) !== null) {
      imports.push(match[1]);
    }
  }

  return imports;
}

// Determine if an import is a third-party package
function isThirdPartyPackage(importPath: string): boolean {
  // Third-party packages don't start with '.', '/', or '~/' (local alias)
  return (
    !importPath.startsWith(".") &&
    !importPath.startsWith("/") &&
    !importPath.startsWith("~/")
  );
}

// Extract the package name from an import path
// e.g., "@mui/material/Button" -> "@mui/material"
// e.g., "react-dom" -> "react-dom"
function getPackageName(importPath: string): string {
  if (importPath.startsWith("@")) {
    // Scoped package: @scope/package
    const parts = importPath.split("/");
    return `${parts[0]}/${parts[1]}`;
  }
  // Regular package: just the first part
  return importPath.split("/")[0];
}

// Recursively resolve all imports in a file and its dependencies
function resolveAllDependencies(
  filePath: string,
  projectRoot: string,
  visited = new Set<string>()
): Set<string> {
  const dependencies = new Set<string>();

  if (visited.has(filePath)) {
    return dependencies;
  }
  visited.add(filePath);

  if (!fs.existsSync(filePath)) {
    return dependencies;
  }

  const imports = extractImports(filePath);

  for (const importPath of imports) {
    if (isThirdPartyPackage(importPath)) {
      const packageName = getPackageName(importPath);
      dependencies.add(packageName);
    } else {
      // For relative imports, resolve and recursively analyze
      const resolvedPath = resolveLocalImport(
        importPath,
        filePath,
        projectRoot
      );
      if (resolvedPath) {
        const nestedDeps = resolveAllDependencies(
          resolvedPath,
          projectRoot,
          visited
        );
        nestedDeps.forEach((dep) => dependencies.add(dep));
      }
    }
  }

  return dependencies;
}

// Resolve local import paths
function resolveLocalImport(
  importPath: string,
  fromFile: string,
  projectRoot: string
): string | null {
  const fromDir = path.dirname(fromFile);

  // Handle ~/ alias pointing to src/
  if (importPath.startsWith("~/")) {
    importPath = importPath.replace("~/", "src/");
    const resolved = path.join(projectRoot, importPath);
    return resolveWithExtensions(resolved);
  }

  // Handle relative imports
  const resolved = path.join(fromDir, importPath);
  return resolveWithExtensions(resolved);
}

// Try to resolve a file with common TypeScript/JavaScript extensions
function resolveWithExtensions(basePath: string): string | null {
  const extensions = [".tsx", ".ts", ".jsx", ".js"];

  // Try exact path first
  if (fs.existsSync(basePath) && fs.statSync(basePath).isFile()) {
    return basePath;
  }

  // Try with extensions
  for (const ext of extensions) {
    const withExt = basePath + ext;
    if (fs.existsSync(withExt)) {
      return withExt;
    }
  }

  // Try as directory with index file
  for (const ext of extensions) {
    const indexPath = path.join(basePath, `index${ext}`);
    if (fs.existsSync(indexPath)) {
      return indexPath;
    }
  }

  return null;
}

// Get all TypeScript/JSX files in a directory recursively
function getComponentFiles(dir: string): string[] {
  const files: string[] = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && entry.name !== "node_modules") {
      files.push(...getComponentFiles(fullPath));
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".tsx") ||
        entry.name.endsWith(".ts") ||
        entry.name.endsWith(".jsx") ||
        entry.name.endsWith(".js"))
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main function
function generatePeerDependencies(
  inputPath: string,
  outputPath: string,
  projectRoot: string
): void {
  console.log("Starting peer dependency analysis...");

  const packageJson = getPackageJson(projectRoot);
  const allDependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
    ...packageJson.peerDependencies,
  };

  let componentFiles: string[];

  // Determine if input is a file or directory
  const inputFullPath = path.isAbsolute(inputPath)
    ? inputPath
    : path.join(projectRoot, inputPath);

  if (fs.statSync(inputFullPath).isDirectory()) {
    componentFiles = getComponentFiles(inputFullPath);
  } else {
    componentFiles = [inputFullPath];
  }

  console.log(`Found ${componentFiles.length} component files to analyze`);

  const result: ComponentDependencies = {};

  for (const componentFile of componentFiles) {
    const relativePath = path.relative(projectRoot, componentFile);
    console.log(`Analyzing: ${relativePath}`);

    const dependencies = resolveAllDependencies(componentFile, projectRoot);

    const dependencyInfo: DependencyInfo[] = [];

    for (const dep of dependencies) {
      const version = allDependencies[dep];
      if (version) {
        dependencyInfo.push({
          package: dep,
          version: version,
        });
      }
    }

    // Sort by package name
    dependencyInfo.sort((a, b) => a.package.localeCompare(b.package));

    if (dependencyInfo.length > 0) {
      result[relativePath] = dependencyInfo;
    }
  }

  // Write the result to output file
  const outputFullPath = path.isAbsolute(outputPath)
    ? outputPath
    : path.join(projectRoot, outputPath);

  fs.mkdirSync(path.dirname(outputFullPath), { recursive: true });
  fs.writeFileSync(outputFullPath, JSON.stringify(result, null, 2), "utf-8");

  console.log(`\nGenerated peer dependency data at: ${outputPath}`);
  console.log(`Analyzed ${Object.keys(result).length} components`);
}

// CLI entry point
const scriptPath = fileURLToPath(import.meta.url);
const mainPath = process.argv[1] ? path.resolve(process.argv[1]) : null;

if (mainPath && scriptPath === mainPath) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error(
      "Usage: ts-node generate-peer-deps.ts <input-path> <output-path>"
    );
    console.error(
      "  input-path: Directory or file to analyze (relative to project root)"
    );
    console.error(
      "  output-path: Where to save the JSON output (relative to project root)"
    );
    process.exit(1);
  }

  const [inputPath, outputPath] = args;
  const projectRoot = path.resolve(__dirname, "..");

  try {
    generatePeerDependencies(inputPath, outputPath, projectRoot);
  } catch (error) {
    console.error("Error generating peer dependencies:", error);
    process.exit(1);
  }
}

export { generatePeerDependencies };
export type { ComponentDependencies, DependencyInfo };
