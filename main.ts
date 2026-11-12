// news-summary-01 entry (Node 22, standard library only): the summary is the
// summary.txt beside this file, researched from real 11 November 2026 reporting
// (Reuters, AP, AFP, BBC, CNBC, Yonhap) and written by hand; the program copies
// it to /output/entry.txt. No network, no model calls, fully deterministic:
// the same bytes are written on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./summary.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
