import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { files: ["*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    ignores: [
      "node_modules/**/*",
      "public/**/*",
      "build/**/*",
      "dist/**/*",
      ".next/**/*",
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "no-empty-function": "off",
      "react/boolean-prop-naming": "error",
      "react/button-has-type": "error",
      "react/display-name": "error",
      "react/hook-use-state": "warn",
      "react/jsx-boolean-value": "warn",
      "react/jsx-handler-names": "warn",
      "react/jsx-no-bind": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-sort-props": "warn",
      "react/jsx-uses-react": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-multi-comp": "warn",
      "react/prefer-stateless-function": "error",
      "react/prop-types": "error",
    },
  },
];

export default eslintConfig;
