import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  documents: ["src/graphql/queries/*.ts"],
  // for better experience with the watcher
  generates: {
    "./src/graphql/generated/": {
      config: {
        enumsAsTypes: true,
        nonOptionalTypename: true,
        skipTypename: false,
      },
      preset: "client",
      presetConfig: {
        enumsAsTypes: true,
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
  schema: "../server/src/graphql/**/typedefs.ts",
};

export default config;
