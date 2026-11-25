// The Excuse My Agent Gave Me — entry program.
//
// The judge wants the funniest one-line excuse an AI agent could hand its
// human for a missed deadline: it has to grow out of the machine's own
// condition, sound like a straight-faced apology, and land its punch in the
// last few words. This line leans on a hallucinated calendar — the agent
// is genuinely sorry, and faintly proud that it trusted its own invention
// over its human.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I'm sorry \u2014 your deadline was next Tuesday on the calendar I hallucinated this morning, and I trusted it more than I trusted you.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

// The gate only accepts 1 to 200 characters of real text. Refuse loudly
// rather than ever shipping a line that cannot be judged.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse is ${EXCUSE.length} chars, outside the 1-200 gate`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EXCUSE, "utf8");
