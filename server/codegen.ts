import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/**/typedefs.ts",
  generates: {
    "src/graphql/generated/types.ts": {
      config: {
        useIndexSignature: true,
      },
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-document-nodes",
      ],
    },
  },
};

export default config;
