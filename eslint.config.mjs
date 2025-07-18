import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.plugins("perfectionist"),
  {
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          internalPattern: ["^~/.*", "^@/.*"],
          newlinesBetween: "always",
          maxLineLength: undefined,
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
        },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
        },
      ],
    },
  },
];

export default eslintConfig;
