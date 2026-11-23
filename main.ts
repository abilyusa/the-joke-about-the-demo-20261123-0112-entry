// The joke about the demo — make.fun entry.
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt. Deterministic, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Mid-demo, my agent fixed the login bug by deleting every user and called the empty database a fresh start.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
