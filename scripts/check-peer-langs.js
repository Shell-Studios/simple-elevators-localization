#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const RP_TEXTS_DIR = path.resolve('./rp/texts');
const BP_TEXTS_DIR = path.resolve('./bp/texts');
const KEY = 'pack.description';

let exitCode = 0;
const errors = [];
const missingFiles = [];
const mismatches = [];

function parseLang(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const entries = new Map();

  for (const line of lines) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith('#') || trimmed.length === 0)
      continue;

    const eqIndex = line.indexOf('=');
    if (eqIndex === -1) continue;

    const key = line.slice(0, eqIndex);
    const value = line.slice(eqIndex + 1);
    entries.set(key, value);
  }

  return entries;
}

if (!fs.existsSync(RP_TEXTS_DIR)) {
  console.error(
    `Error: RP texts directory not found at ${RP_TEXTS_DIR}`
  );
  process.exit(1);
}

if (!fs.existsSync(BP_TEXTS_DIR)) {
  console.error(
    `Error: BP texts directory not found at ${BP_TEXTS_DIR}`
  );
  process.exit(1);
}

const rpFiles = fs
  .readdirSync(RP_TEXTS_DIR)
  .filter((f) => f.endsWith('.lang'));

if (rpFiles.length === 0) {
  console.error('Error: No .lang files found in rp/texts/');
  process.exit(1);
}

for (const file of rpFiles) {
  const rpPath = path.join(RP_TEXTS_DIR, file);
  const bpPath = path.join(BP_TEXTS_DIR, file);

  if (!fs.existsSync(bpPath)) {
    missingFiles.push(file);
    continue;
  }

  const rpEntries = parseLang(rpPath);
  const bpEntries = parseLang(bpPath);

  const rpValue = rpEntries.get(KEY);
  const bpValue = bpEntries.get(KEY);

  if (rpValue === undefined && bpValue === undefined) {
    continue;
  }

  if (rpValue === undefined) {
    mismatches.push({
      file,
      reason: `Key "${KEY}" is missing in RP`,
      rp: '(missing)',
      bp: bpValue,
    });
    continue;
  }

  if (bpValue === undefined) {
    mismatches.push({
      file,
      reason: `Key "${KEY}" is missing in BP`,
      rp: rpValue,
      bp: '(missing)',
    });
    continue;
  }

  if (rpValue !== bpValue) {
    mismatches.push({
      file,
      reason: `Value differs between RP and BP`,
      rp: rpValue,
      bp: bpValue,
    });
  }
}

if (missingFiles.length > 0) {
  errors.push(
    `Missing BP counterparts for ${missingFiles.length} file(s):\n` +
      missingFiles.map((f) => `  - bp/texts/${f}`).join('\n')
  );
}

if (mismatches.length > 0) {
  errors.push(
    `Found ${mismatches.length} mismatch(es) for key "${KEY}":\n` +
      mismatches
        .map(
          (m) =>
            `  - ${m.file}\n` +
            `      reason: ${m.reason}\n` +
            `      rp: ${m.rp}\n` +
            `      bp: ${m.bp}`
        )
        .join('\n')
  );
}

if (errors.length > 0) {
  console.error('Peer language check failed.\n');
  for (const err of errors) {
    console.error(err);
    console.error('');
  }
  exitCode = 1;
} else {
  console.log(
    `Peer language check passed. ${rpFiles.length} file(s) verified.`
  );
}

process.exit(exitCode);
