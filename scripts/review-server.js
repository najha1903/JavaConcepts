// ============================================================================
// A small local review server, so the approval step can happen in the browser.
//
// `npm run revise` proposes the changes and writes two files next to the
// dashboard: content-changes.md for reading and content-changes.json for this
// page. The server then serves review.html, which shows the same proposed
// changes with Apply and Discard buttons.
//
// Apply runs the generator without --propose, which is exactly what
// `npm run approve` does, so the two paths can never drift apart.
//
// The server listens on the loopback interface only, and it exists only while
// the review is open. Closing this window, or pressing Ctrl+C, ends it. Nothing
// about the notes is written until Apply is chosen.
// ============================================================================

const http = require('http');
const vm = require('vm');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dashboardDir = path.join(root, 'revision-dashboard');
const jsonFile = path.join(dashboardDir, 'content-changes.json');
const mdFile = path.join(dashboardDir, 'content-changes.md');
const port = Number(process.env.REVIEW_PORT || 4317);

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(body);
}

function readPending() {
  if (!fs.existsSync(jsonFile)) return null;
  try {
    const parsed = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    return parsed && parsed.awaitingReview ? parsed : null;
  } catch (error) {
    return null;
  }
}

// The suggestions the author can accept. Read from the file scripts/suggest.js
// writes, so the review page and the Coverage view show the same list.
function readSuggestions() {
  const file = path.join(dashboardDir, 'suggestions-data.js');
  if (!fs.existsSync(file)) return { items: [] };
  try {
    const context = {};
    vm.runInNewContext(`${fs.readFileSync(file, 'utf8')}\nthis.__s = SUGGESTIONS;`, context, { filename: 'suggestions-data.js' });
    return context.__s || { items: [] };
  } catch (error) {
    return { items: [] };
  }
}

// A small request body reader. The accepted keys arrive as JSON, so the body has
// to be buffered before it can be parsed.
function readBody(req) {
  return new Promise(resolve => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', () => resolve(''));
  });
}

function clearPending() {
  for (const file of [jsonFile, mdFile]) {
    if (fs.existsSync(file)) fs.unlinkSync(file);
  }
}

function runNodeScript(script, scriptArgs) {
  const result = spawnSync(process.execPath, [path.join(__dirname, script), ...(scriptArgs || [])], {
    cwd: root,
    encoding: 'utf8'
  });
  const output = [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
  return { ok: result.status === 0, output };
}

function serveFile(res, filePath) {
  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'Content-Type': CONTENT_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  const route = url.pathname;

  if (route === '/api/pending') {
    const pending = readPending();
    // Suggestions travel with the proposal, so the review page can offer them in
    // the same gate. Accepting writes to the author's files, so it must happen
    // here, where Apply is the only thing that writes.
    const suggestions = readSuggestions();
    if (!pending) {
      sendJson(res, 200, { pending: false, suggestions });
      return;
    }
    sendJson(res, 200, { pending: true, generated: pending.generated, totals: pending.totals, changes: pending.changes, suggestions });
    return;
  }

  if (route === '/api/apply' && req.method === 'POST') {
    if (!readPending()) { sendJson(res, 409, { ok: false, output: 'There is nothing waiting for review.' }); return; }
    // Read the accepted suggestion keys from the request body. Nothing is written
    // unless the caller names them, and each is named separately.
    let acceptedKeys = [];
    try {
      const body = await readBody(req);
      if (body) {
        const parsed = JSON.parse(body);
        // Only strings are usable as keys. A caller that sends objects - which
        // PowerShell does when a string carries its note properties - must not be
        // able to write anything, so anything else is dropped rather than guessed
        // at.
        if (Array.isArray(parsed.acceptedKeys)) {
          acceptedKeys = parsed.acceptedKeys
            .map(key => (typeof key === 'string' ? key : (key && typeof key.value === 'string' ? key.value : null)))
            .filter(Boolean);
        }
      }
    } catch (error) {
      acceptedKeys = [];
    }

    const results = [];
    let ok = true;

    if (acceptedKeys.length) {
      const accept = runNodeScript('accept-suggestions.js', acceptedKeys);
      results.push(accept.output);
      if (!accept.ok) ok = false;
    }

    if (ok) {
      // approve.js generates, verifies, and rolls the generated files back if a
      // check fails. It is the same script `npm run approve` runs, so approving
      // here can never accept content that approving in the terminal would reject.
      const applied = runNodeScript('approve.js');
      results.push(applied.output);
      if (!applied.ok) ok = false;
    }

    if (ok) clearPending();
    sendJson(res, ok ? 200 : 500, { ok, output: results.filter(Boolean).join('\n\n').trim() });
    return;
  }

  if (route === '/api/discard' && req.method === 'POST') {
    clearPending();
    sendJson(res, 200, { ok: true });
    return;
  }

  if (route === '/' || route === '/review.html') {
    serveFile(res, path.join(dashboardDir, 'review.html'));
    return;
  }

  // Everything else is a dashboard file, so the page can link straight into it.
  const requested = path.normalize(path.join(dashboardDir, route.replace(/^\/+/, '')));
  if (!requested.startsWith(dashboardDir)) { res.writeHead(403); res.end('Forbidden'); return; }
  serveFile(res, requested);
});

server.on('error', error => {
  if (error.code === 'EADDRINUSE') {
    console.error(`\n   Port ${port} is already in use. Close the earlier review window,`);
    console.error(`   or set a different one:  REVIEW_PORT=4318 npm run revise\n`);
  } else {
    console.error(`\n   The review server could not start: ${error.message}\n`);
  }
  process.exit(1);
});

server.listen(port, '127.0.0.1', () => {
  const pending = readPending();
  const url = `http://localhost:${port}/`;
  console.log('');
  console.log(pending ? '🖥️  Review open in your browser' : '🖥️  Review server started, but nothing is waiting');
  console.log(`   ${url}`);
  console.log('');
  if (pending) {
    console.log('   Choose Apply to accept the changes, or Discard to leave everything as it is.');
    console.log('   Nothing is written until you choose Apply.');
  } else {
    console.log('   There are no content changes waiting, so there is nothing to approve.');
  }
  console.log('   Close this window, or press Ctrl+C, when you are finished.');
  console.log('');

  // Open the default browser. Failure here is harmless: the URL is printed above.
  // REVIEW_NO_OPEN=1 suppresses it, which is what the automated checks use.
  if (process.env.REVIEW_NO_OPEN === '1') return;
  if (process.platform === 'win32') {
    spawnSync(process.env.ComSpec || 'cmd.exe', ['/c', 'start', '', url], { stdio: 'ignore' });
  } else if (process.platform === 'darwin') {
    spawnSync('open', [url], { stdio: 'ignore' });
  } else {
    spawnSync('xdg-open', [url], { stdio: 'ignore' });
  }
});
