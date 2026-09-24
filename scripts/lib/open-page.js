const { spawnSync } = require('child_process');
const { pathToFileURL } = require('url');

module.exports = function openPage(file) {
  const url = /^https?:/.test(file) ? file : pathToFileURL(file).href;
  if (process.env.REVISION_NO_OPEN === '1') return;
  const command = process.platform === 'win32' ? (process.env.ComSpec || 'cmd.exe')
    : process.platform === 'darwin' ? 'open' : 'xdg-open';
  const args = process.platform === 'win32' ? ['/c', 'start', '', url] : [url];
  const result = spawnSync(command, args, { stdio: 'ignore' });
  if (result.error || result.status !== 0) console.warn(`Could not open a browser automatically. Open: ${url}`);
};
