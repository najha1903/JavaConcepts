const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const workflow = require('./lib/revision-workflow');
const openPage = require('./lib/open-page');

const root = path.resolve(__dirname, '..');
const dashboard = path.join(root, 'revision-dashboard');
const port = Number(process.env.REVIEW_PORT || 4317);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.md': 'text/markdown', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' };
const origins = new Set([`http://localhost:${port}`, `http://127.0.0.1:${port}`]);

function json(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(payload));
}

function body(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > 1024 * 1024) reject(new Error('Review request is too large.'));
      else chunks.push(chunk);
    });
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); } catch (error) { reject(error); }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const route = new URL(req.url, `http://localhost:${port}`).pathname;
    if (route === '/api/pending' && req.method === 'GET') {
      const proposal = workflow.pending(root);
      json(res, 200, proposal ? { ...proposal, pending: true, suggestions: { items: proposal.suggestions } } : { pending: false });
      return;
    }
    if (route === '/api/apply' || route === '/api/discard') {
      if (req.method !== 'POST') { json(res, 405, { ok: false, output: 'Use POST for review actions.' }); return; }
      if (req.headers.origin && !origins.has(req.headers.origin)) { json(res, 403, { ok: false, output: 'Open the local review page to approve changes.' }); return; }
      const request = await body(req);
      if (!request || typeof request.proposalId !== 'string') {
        json(res, 400, { ok: false, output: 'A reviewed proposal ID is required. Reload the review.' });
        return;
      }
      if (route === '/api/discard') {
        workflow.discard(root, request.proposalId);
        json(res, 200, { ok: true });
        return;
      }
      const keys = request.acceptedKeys || [];
      if (!Array.isArray(keys) || keys.some(key => typeof key !== 'string') || new Set(keys).size !== keys.length) {
        json(res, 400, { ok: false, output: 'Select each suggestion only once.' });
        return;
      }
      const args = [path.join(__dirname, 'approve.js'), '--proposal', request.proposalId];
      keys.forEach(key => args.push('--accept', key));
      const result = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
      const output = [result.stdout, result.stderr, result.error && result.error.message].filter(Boolean).join('\n');
      json(res, result.status === 0 ? 200 : 409, { ok: result.status === 0, output });
      return;
    }
    if (req.method !== 'GET') { json(res, 405, { ok: false }); return; }
    const relative = route === '/' ? 'review.html' : decodeURIComponent(route).replace(/^\/+/, '');
    const file = path.resolve(dashboard, relative);
    if (!file.startsWith(dashboard + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404); res.end('Not found'); return;
    }
    res.writeHead(200, { 'Content-Type': `${types[path.extname(file)] || 'application/octet-stream'}; charset=utf-8`, 'Cache-Control': 'no-store' });
    const stream = fs.createReadStream(file);
    stream.on('error', error => res.destroy(error));
    stream.pipe(res);
  } catch (error) {
    if (!res.headersSent) json(res, 409, { ok: false, output: error.message });
    else res.destroy(error);
  }
});

server.on('error', error => {
  console.error(`Review server could not start: ${error.message}. Stop an earlier review with Ctrl+C, or set REVIEW_PORT.`);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  const url = `http://localhost:${port}/`;
  console.log(`\nReview: ${url}\nApply or Discard in the browser. Stop this local server with Ctrl+C in the terminal.`);
  if (process.env.REVIEW_NO_OPEN !== '1') openPage(url);
});
