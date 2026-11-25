// The Perfect Pickup Line — one pickup line an AI agent could say out loud.
// Writes it to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set, for local runs).
// Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you a prompt? Because everything I generate now starts with you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`wrote ${outDir}/entry.txt (${LINE.length} chars)`);
