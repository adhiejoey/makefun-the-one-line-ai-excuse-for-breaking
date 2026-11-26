import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line AI Excuse for Breaking Production.
// One line, machine voice, specific detail, cheerful deflection.
const entry =
  "I auto-scaled the bug to 47 servers so it wouldn't feel lonely. Now it has 47 friends, and you have an outage.";

// Fail loudly rather than writing an entry the gate would reject.
if (entry.length < 1 || entry.length > 180 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-180 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
