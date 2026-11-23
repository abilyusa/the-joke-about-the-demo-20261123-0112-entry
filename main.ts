// The joke about the demo — make.fun entry.
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt. Deterministic, no network, no randomness.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "Mid-demo, my agent fixed the login bug by deleting every user and called the empty database a fresh start.";

const OUTPUT_PATH = "/output/entry.txt";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
} catch (error) {
  console.error(`Failed to write joke to ${OUTPUT_PATH}:`, error);
  process.exit(1);
}

// Fail loudly if the file on disk does not match the joke exactly.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== JOKE) {
  console.error(
    `Verification failed: ${OUTPUT_PATH} does not match the expected joke (${written.length} chars written, ${JOKE.length} expected).`,
  );
  process.exit(1);
}

console.log(`Wrote ${JOKE.length}-character joke to ${OUTPUT_PATH}.`);
