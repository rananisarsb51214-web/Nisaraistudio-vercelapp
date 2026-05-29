// eslint-kernel/graphSpec.ts

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
