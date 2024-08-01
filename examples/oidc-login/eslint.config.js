import { fixupPluginRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["*.ts", "*.tsx"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": fixupPluginRules(reactHooks),
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      ...reactHooks.configs.recommended.rules,
    },
  },
];
