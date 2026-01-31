import peerDependenciesData from "~/data/peer-dependencies.json";

import type {
  ComponentDependencies,
  DependencyInfo,
} from "~/types/peer-dependencies";

export type { ComponentDependencies, DependencyInfo };

/**
 * Get peer dependencies for a specific component
 *
 * @param componentPath - The component file path (relative to project root)
 * @returns Array of dependency info objects, or undefined if not found
 *
 * @example
 * ```ts
 * const deps = getPeerDependencies("src/components/Copy.tsx");
 * console.log(deps); // [{ package: "react", version: "^19.0.0" }, ...]
 * ```
 */
export function getPeerDependencies(
  componentPath: string
): DependencyInfo[] | undefined {
  const data = peerDependenciesData as ComponentDependencies;
  return data[componentPath];
}

/**
 * Get all component paths that have peer dependencies
 *
 * @returns Array of component paths
 *
 * @example
 * ```ts
 * const paths = getAllComponentPaths();
 * console.log(paths); // ["src/components/Copy.tsx", ...]
 * ```
 */
export function getAllComponentPaths(): string[] {
  const data = peerDependenciesData as ComponentDependencies;
  return Object.keys(data);
}

/**
 * Get all peer dependencies data
 *
 * @returns Complete mapping of component paths to their dependencies
 *
 * @example
 * ```ts
 * const allDeps = getAllPeerDependencies();
 * ```
 */
export function getAllPeerDependencies(): ComponentDependencies {
  return peerDependenciesData as ComponentDependencies;
}

/**
 * Check if a component has a specific peer dependency
 *
 * @param componentPath - The component file path
 * @param packageName - The package name to check for
 * @returns True if the component depends on the package
 *
 * @example
 * ```ts
 * const hasReact = hasPeerDependency("src/components/Copy.tsx", "react");
 * console.log(hasReact); // true
 * ```
 */
export function hasPeerDependency(
  componentPath: string,
  packageName: string
): boolean {
  const deps = getPeerDependencies(componentPath);
  return deps ? deps.some((dep) => dep.package === packageName) : false;
}

/**
 * Get all components that depend on a specific package
 *
 * @param packageName - The package name to search for
 * @returns Array of component paths that use this package
 *
 * @example
 * ```ts
 * const reactComponents = getComponentsByPackage("react");
 * console.log(reactComponents); // ["src/components/Copy.tsx", ...]
 * ```
 */
export function getComponentsByPackage(packageName: string): string[] {
  const data = peerDependenciesData as ComponentDependencies;
  return Object.entries(data)
    .filter(([, deps]) => deps.some((dep) => dep.package === packageName))
    .map(([path]) => path);
}
