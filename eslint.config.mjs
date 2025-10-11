import js from "@eslint/js";
import tseslint from "typescript-eslint";

const tsOnlyConfigs = tseslint.configs.recommendedTypeChecked.map((cfg) => ({
  ...cfg,
  files: ["**/*.{ts,tsx}"],
}));

export default [
  js.configs.recommended,
  ...tsOnlyConfigs,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      "@typescript-eslint/await-thenable": "off",
    },
  },
  {
    files: [
      "apps/native/babel.config.js",
      "apps/native/tailwind.config.js",
    ],
    rules: {
      // JS config files run in Node and commonly use globals like `module`
      // Keep this narrow to config files to avoid hiding real issues elsewhere
      "no-undef": "off",
    },
  },
];


