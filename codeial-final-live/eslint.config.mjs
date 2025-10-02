// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended, // ✅ ESLint's recommended JS rules
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",   // modern JS
        sourceType: "module",    // allow ES modules (import/export)
        ecmaFeatures: {
          jsx: true,             // ✅ enable JSX parsing
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react, // ✅ React plugin
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ doesn't need `import React`
    },
    settings: {
      react: {
        version: "detect", // auto-detect React version
      },
    },
  },
];
