import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const frontend = path.join(__dirname, '..', 'devtools-frontend/out/Default/gen/front_end');

// verify that the chrome devtools frontend is present
if (!fs.existsSync(frontend)) {
  throw new Error('Chrome DevTools frontend not found');
}

console.log('Chrome DevTools fronten build verified');

// move the frontend to the build directory
fs.mkdirSync(path.join(__dirname, '..', 'build'), { recursive: true });
fs.cpSync(frontend, path.join(__dirname, '..', 'build'), { recursive: true });

