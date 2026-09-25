// Serves revision-dashboard over http for the browser-driven checks.
//
// WHY NOT file://
//
// The dashboard keeps progress in localStorage. Chromium treats a file:// origin as
// opaque, so storage behaves differently there from the way it behaves when a reader
// actually opens the page over http. A check that ran on file:// would be testing a
// different page.
//
// WHY A SHARED HELPER
//
// check-mobile.js and check-journey.js both need it, and a second copy of a static
// server is a second place for a path-traversal guard to be missing.

const fs = require('fs');
const http = require('http');
const path = require('path');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

function serveDashboard(dashboardDir, port = 0) {
  const root = path.resolve(dashboardDir);
  const server = http.createServer((req, res) => {
    const relative = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.resolve(root, relative);
    if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    const stream = fs.createReadStream(file);
    stream.on('error', error => res.destroy(error));
    stream.pipe(res);
  });
  return new Promise((resolve, reject) => {
    server.on('error', reject);
    // Port 0 asks the OS for a free port. A fixed port makes a check fail whenever an
    // earlier run, a parallel run, or an unrelated process happens to hold it, which
    // looks exactly like a real failure.
    server.listen(port, '127.0.0.1', () => {
      server.port = server.address().port;
      resolve(server);
    });
  });
}

function closeServer(server) {
  return new Promise(resolve => server.close(resolve));
}

module.exports = { serveDashboard, closeServer };
