import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs.flat.recommended,
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
    rules: {
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
      "react/jsx-pascal-case": "error",
      "react/jsx-sort-props": "warn",
      "react/jsx-uses-react": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-multi-comp": "warn",
      "react/prefer-stateless-function": "error",
      "react/prop-types": "error",
      "react-hooks/error-boundaries": "off",
      "react-hooks/purity": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
