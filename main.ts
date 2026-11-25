import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The weekly meeting has no agenda, no owner and no end time — it's the only thing in this company with job security.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
