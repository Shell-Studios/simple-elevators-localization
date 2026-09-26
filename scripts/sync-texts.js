#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const RP_TEXTS_DIR = path.resolve('./rp/texts');
const BP_TEXTS_DIR = path.resolve('./bp/texts');

function syncTexts() {
  if (!fs.existsSync(RP_TEXTS_DIR)) {
    console.error(
      `\x1b[1;31mError: origin folder not found: ${RP_TEXTS_DIR}\x1b[0m`
    );
    return;
  }

  fs.mkdirSync(BP_TEXTS_DIR, { recursive: true });

  const langJsonRp = path.join(RP_TEXTS_DIR, 'languages.json');
  const langJsonBp = path.join(BP_TEXTS_DIR, 'languages.json');

  if (fs.existsSync(langJsonRp)) {
    fs.copyFileSync(langJsonRp, langJsonBp);
    console.log('\x1b[1;32m[OK] Copied languages.json from RP to BP\x1b[0m');
  } else {
    console.warn('\x1b[1;33m[WARN] languages.json not found\x1b[0m');
  }

  const rpFiles = fs.readdirSync(RP_TEXTS_DIR);

  for (const file of rpFiles) {
    if (file.endsWith('.lang')) {
      const rpFilePath = path.join(RP_TEXTS_DIR, file);
      const bpFilePath = path.join(BP_TEXTS_DIR, file);

      const rpContent = fs.readFileSync(rpFilePath, 'utf8');

      const match = rpContent.match(/^pack\.description=.*$/m);

      if (match) {
        const targetLine = match[0];
        let bpContent = '';

        if (fs.existsSync(bpFilePath)) {
          bpContent = fs.readFileSync(bpFilePath, 'utf8');
        }

        if (/^pack\.description=.*$/m.test(bpContent)) {
          bpContent = bpContent.replace(
            /^pack\.description=.*$/m,
            targetLine
          );
        } else {
          bpContent = bpContent
            ? `${bpContent.trimEnd()}\n${targetLine}\n`
            : `${targetLine}\n`;
        }

        fs.writeFileSync(bpFilePath, bpContent, 'utf8');
        console.log(`\x1b[1;32m[OK] Synced pack.descrition for: ${file}\x1b[0m`);
      } else {
        console.warn(
          `\x1b[1;33m[WARN] Couldn't find pack.description in: ${file}\x1b[0m`
        );
      }
    }
  }
}

console.log(
  'Sincronizando descripciones y languages.json de RP a BP...'
);
syncTexts();
