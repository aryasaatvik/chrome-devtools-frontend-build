import * as fs from 'fs';
import * as path from 'path';

const frontend = path.join(__dirname, 'chrome-devtools-frontend/out/Default/gen/front_end');

// verify that the chrome devtools frontend is present
if (!fs.existsSync(frontend)) {
  throw new Error('Chrome DevTools frontend not found');
}

console.log('Chrome DevTools frontend verified');
