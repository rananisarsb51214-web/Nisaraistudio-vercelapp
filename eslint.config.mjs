// eslint-kernel/index.ts

import noCrossLayer from "./rules/no-cross-layer";
import stabilityBoundary from "./rules/stability-boundary";

export const rules = {
  "no-cross-layer": noCrossLayer,
  "stability-boundary": stabilityBoundary,
};// rules/stability-boundary.ts

export default {
  meta: {
    type: "problem",
    docs: {
      description: "ensures stabilityKernel invariants are respected",
    },
  },

  create(context: any) {
    return {
      CallExpression(node: any) {
        const callee = node.callee?.name;

        if (callee === "manifoldOptimizer" && context.getFilename().includes("unsafe")) {
          context.report({
            node,
            message:
              "Unbounded optimizer usage outside stabilityKernel context",
          });
        }
      },
    };
  },
};// rules/no-cross-layer.ts

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
