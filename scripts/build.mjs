import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import esbuild from 'esbuild';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, 'assets'), { recursive: true });
await cp(resolve(root, 'public'), dist, { recursive: true });

await esbuild.build({
  entryPoints: [resolve(root, 'src/main.jsx')],
  bundle: true,
  outfile: resolve(dist, 'assets/app.js'),
  format: 'esm',
  jsx: 'automatic',
  minify: true,
  sourcemap: true,
  loader: {
    '.png': 'file',
  },
});

await writeFile(
  resolve(dist, 'index.html'),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WordVel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/app.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/app.js"></script>
  </body>
</html>
`,
);

console.log(`Built ${dirname(resolve(dist, 'index.html'))}`);
