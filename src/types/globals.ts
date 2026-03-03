import { components } from "@octokit/openapi-types";

export interface Repo {
  name: string;
  owner: string;
}

export type Repository = components["schemas"]["repository"] & {
  languages?: string[];
  num_of_commits?: number;
};

export type PropsWithLoading<T extends object> =
  | { loading: true }
  | (T & { loading?: false });
