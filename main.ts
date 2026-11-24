// One Emoji, One Dream Vacation — make.fun entry (program/v1).
// Writes one single emoji to /output/entry.txt: the dream vacation in one
// glyph. Stdlib only, no network, no randomness, no clock. Deterministic.
//
// The pick, winner of the local V1-V5 head-to-head (4-0): the Moai of
// Easter Island — one silhouette that is the postcard of exactly one dream,
// the faraway place itself. Single codepoint, 4 bytes, smallest possible
// text for the size tie-break.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DREAM_VACATION = "🗿";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 8
// characters, not only white space. Enforce the same gate here so a bad
// line can never ship. The judge's first criterion also demands exactly one
// emoji, so hold the stricter rule: exactly one Unicode scalar, no
// variation selector, no combining mark, no whitespace.
const glyphCount = [...DREAM_VACATION].length;
if (glyphCount !== 1 || DREAM_VACATION.trim().length === 0) {
  throw new Error(
    `dream emoji must be exactly one emoji, got ${glyphCount} characters`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), DREAM_VACATION, "utf8");
