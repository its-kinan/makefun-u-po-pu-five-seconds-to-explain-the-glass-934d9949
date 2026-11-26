// Five Seconds to Explain the Glass — make.fun program/v1 entry.
// Writes the single sentence a house cat would say in its own defence
// after knocking a glass off the table, to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — one fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised line: same fresh idea (sunbeam squatter evicted), cut the
// throat-clearing — "staring at me the whole time" was a second, weaker
// joke, and "I am taking my nap back right now" padded the ending.
// "My nap starts now" lands the cat's self-interest in four words.
const LINE =
  "That glass squatted in my sunbeam all morning like it paid rent, so I evicted it — the floor can keep the deposit, and my nap starts now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
