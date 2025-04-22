import { UserConfig } from "@commitlint/types";

const configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  /**
   * Ignore the commit message if it starts with "wip"
   */
  ignores: [(commit) => commit.startsWith("wip")],
};

export default configuration;
