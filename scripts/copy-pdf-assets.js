'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const packageDir = path.dirname(require.resolve('pdfmake/package.json'));
const destination = path.join(root, 'revision-dashboard', 'vendor', 'pdfmake');
const files = ['build/pdfmake.min.js', 'build/vfs_fonts.js', 'LICENSE'];
const check = process.argv.includes('--check');
const digest = buffer => crypto.createHash('sha256').update(buffer).digest('hex');

if (!check) fs.mkdirSync(destination, { recursive: true });
for (const file of files) {
  const source = fs.readFileSync(path.join(packageDir, file));
  const target = path.join(destination, path.basename(file));
  const matches = fs.existsSync(target) && digest(fs.readFileSync(target)) === digest(source);
  if (!matches && check) throw new Error(`PDF asset is missing or stale: ${target}. Run node scripts/copy-pdf-assets.js.`);
  if (!matches) fs.copyFileSync(path.join(packageDir, file), target);
}
console.log(`PDF assets ${check ? 'verified' : 'ready'} (pdfmake ${require(path.join(packageDir, 'package.json')).version}).`);
