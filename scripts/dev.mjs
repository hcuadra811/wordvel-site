import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import { resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import './build.mjs';

const root = resolve(import.meta.dirname, '..');
const preview = spawn(process.execPath, [resolve(root, 'scripts/preview.mjs')], {
  stdio: 'inherit',
});

let building = false;
let queued = false;

async function rebuild() {
  if (building) {
    queued = true;
    return;
  }

  building = true;
  await delay(80);

  try {
    await import(`./build.mjs?time=${Date.now()}`);
  } catch (error) {
    console.error(error);
  }

  building = false;

  if (queued) {
    queued = false;
    rebuild();
  }
}

for (const folder of ['src', 'public']) {
  watch(resolve(root, folder), { recursive: true }, rebuild);
}

process.on('SIGINT', () => {
  preview.kill('SIGINT');
  process.exit(0);
});
