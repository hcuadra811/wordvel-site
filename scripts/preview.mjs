import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', 'dist');
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host}`);
  const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const filePath = join(root, requestedPath);
  const fallback = join(root, 'index.html');
  const target = existsSync(filePath) ? filePath : fallback;

  try {
    const file = await stat(target);

    if (!file.isFile()) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(target)] || 'application/octet-stream',
    });
    createReadStream(target).pipe(response);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Preview server running at http://127.0.0.1:${port}`);
});
