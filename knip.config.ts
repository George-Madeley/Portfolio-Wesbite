import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/app/**/*.tsx"],
  project: ["src/**/*"],
  ignoreDependencies: [
    "three.js",
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator",
    "conventional-changelog-conventionalcommits",
    "eslint-config-next",
    "eslint-config-prettier",
    "ts-node",
  ],
};

export default config;
