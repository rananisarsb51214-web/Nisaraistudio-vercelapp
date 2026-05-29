// rules/no-cross-layer.ts

import { ARCHITECTURE_GRAPH } from "../graphSpec";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "prevents invalid architectural cross-layer imports",
    },
  },

  create(context: any) {
    return {
      ImportDeclaration(node: any) {
        const currentFile = context.getFilename();
        const importPath = node.source.value;

        const isInvalid =
          currentFile.includes("cik") &&
          importPath.includes("soiol") === false &&
          importPath.includes("app") === true;

        if (isInvalid) {
          context.report({
            node,
            message:
              "CIK layer cannot depend on application layer directly",
          });
        }
      },
    };
  },
};// eslint-kernel/graphSpec.ts

export const ARCHITECTURE_GRAPH = {
  cik: ["evaluationEngine", "compiler", "counterfactualEngine"],
  soiol: ["policyEngine", "mutationEngine"],
  app: ["cik"],
  infra: ["soiol", "cik"],
} as const;import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    extends: [...next],
}]);
