/**
 * Shared type definitions for peer dependency analysis system
 */

export interface DependencyInfo {
  package: string;
  version: string;
}

export type ComponentDependencies = Record<string, DependencyInfo[]>;
