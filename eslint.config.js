import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react$", "^react-dom"],

            ["^@?\\w"],

            ["^@/shared"],
            ["^@/entities"],
            ["^@/features"],
            ["^@/widgets"],
            ["^@/pages"],
            ["^@/app"],

            ["^\\."],

            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",

      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],

      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],
    },
  },
]);
