'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { JSDOM, VirtualConsole } = require('jsdom');
const exporter = require('../revision-dashboard/chapter-export');
const root = path.resolve(__dirname, '..');
const dashboard = path.join(root, 'revision-dashboard');
const source = fs.readFileSync(path.join(dashboard, 'chapter-export.js'), 'utf8');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(dashboard, 'data.js'), 'utf8'), context);
const chapters = vm.runInContext('CONCEPTS_DATA', context);
const statuses = JSON.parse(fs.readFileSync(path.join(root, 'data/chapter-status.json'), 'utf8')).chapters;
const finished = chapters.filter(chapter => statuses[chapter.name.match(/Chapter\s+(\d+)/i)[1]] === 'finished');
assert.ok(finished.length > 0, 'finished source chapters must be exercised');

// Independent lexical oracle: preserve every non-comment token, including
// literal whitespace, rather than comparing the exporter with itself.
function tokens(java) {
  return (java.replace(/\r\n?/g, '\n').match(/"""(?:\\[\s\S]|(?!""")[\s\S])*"""|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\/[^\n]*|\/\*[\s\S]*?\*\/|[^\s]/g) || [])
    .filter(token => !token.startsWith('//') && !token.startsWith('/*'));
}

function documentFor(html) {
  // jsdom's CSS parser does not implement paged-media margin boxes. Content
  // checks below are DOM checks; the browser/PDF suite owns pagination proof.
  return new JSDOM(html, { virtualConsole: new VirtualConsole() });
}

let topicCount = 0;
let supportCount = 0;
for (const chapter of finished) {
  const model = exporter.chapterModel(chapter);
  const dom = documentFor(exporter.renderChapter(chapter));
  const articles = [...dom.window.document.querySelectorAll('article.topic')];
  assert.equal(articles.length, chapter.topics.length, chapter.name);
  for (const [index, topic] of chapter.topics.entries()) {
    topicCount++;
    const sourceCode = fs.readFileSync(path.resolve(root, topic.filePath), 'utf8');
    const code = articles[index].querySelector('.implementation pre code');
    assert.ok(code, `implementation missing: ${topic.filePath}`);
    assert.deepEqual(tokens(code.textContent), tokens(sourceCode), `source tokens lost: ${topic.filePath}`);
    assert.equal(code.textContent, model.topics[index].code);
    assert.equal(articles[index].dataset.source, topic.filePath);
    if (!(topic.headerComments || []).length) supportCount++;
    for (const block of topic.headerComments || []) {
      if (block.type === 'code' && block.code) {
        assert.ok([...articles[index].querySelectorAll('.notes-content pre code')].some(node => node.textContent === block.code), `overview code missing: ${topic.filePath}`);
      }
    }
  }
  const def = exporter.createPdfDefinition(chapter);
  assert.equal(def.pageSize, 'A4');
  assert.ok(def.pageMargins.every(margin => margin >= 40));
  for (const topic of model.topics) {
    assert.ok(def.content.some(node => node.style === 'code' && node.text.replace(/\u200b/g, '') === topic.code.replace(/\t/g, '    ')), `PDF implementation missing: ${topic.filePath}`);
  }
  assert.equal(def.header, undefined);
  assert.equal(def.footer(2, 10).text, '2 / 10');
  dom.window.close();
}

const fixture = {
  name: 'Fixture <Chapter>', topics: [{
    topicName: 'Ordinary Topic', fileName: 'Sample.java', filePath: 'src/Sample.java',
    headerComments: [
      { type: 'lines', lines: ['Core Concepts:', 'An overview duplicated before the class.'] },
      { type: 'code', code: 'int overviewExample = 1;' },
      { type: 'table', headers: ['Name', 'Meaning'], rows: Array.from({ length: 180 }, (_, i) => [`row-${i}`, 'LongValue'.repeat(100)]) }
    ],
    code: `package sample;
import java.util.List;
// Core Concepts:
// An overview duplicated before the class.
// @quiz discarded question
// @code discarded quiz-only code
/* @answer discarded answer */
class Sample {
  // Keep this implementation explanation.
  String url = "https://example.test/path//literal";
  String marker = "// @quiz keep literal";
  String multiline = """
      /* keep text block */


      // @quiz keep text block too
      """;
  int value = 1; /* retain useful inline block */
  /* @quiz discard block question
   * @option discard block option
   */
}
// A supporting type must not disappear.
record Supporting(List<String> values) { }
interface Contract { int value(); }
enum State { READY }
` + Array.from({ length: 500 }, (_, i) => `// implementation explanation ${i}`).join('\n')
  }, { topicName: 'Code Only Support', filePath: 'src/Helper.java', code: 'class Helper { int getValue() { return 7; } }' }]
};
const options = { projectNotes: 'Project <script>unsafe()</script>\nSecond project line', topicNotes: { 'src/Sample.java': 'Personal <img src=x onerror=unsafe()>\nUse `List`.' } };
const fixtureCode = exporter.implementation(fixture.topics[0]);
assert.deepEqual(tokens(fixtureCode), tokens(fixture.topics[0].code));
assert.ok(!fixtureCode.includes('An overview duplicated'));
assert.ok(!fixtureCode.includes('discarded question'));
assert.ok(!fixtureCode.includes('discard block question'));
assert.ok(fixtureCode.includes('Keep this implementation explanation.'));
assert.ok(fixtureCode.includes('retain useful inline block'));
assert.ok(fixtureCode.includes('implementation explanation 499'));
assert.ok(fixtureCode.includes('record Supporting'));
const fixtureDom = documentFor(exporter.renderChapter(fixture, options));
assert.equal(fixtureDom.window.document.querySelectorAll('script, img').length, 0);
assert.equal(fixtureDom.window.document.querySelector('.project-notes div').textContent, options.projectNotes);
assert.ok(fixtureDom.window.document.querySelector('.topic-notes').textContent.includes('Personal <img'));
assert.equal(fixtureDom.window.document.querySelectorAll('tbody tr').length, 180);
assert.ok(fixtureDom.window.document.querySelector('thead th'));
assert.ok(fixtureDom.window.document.querySelector('style').textContent.includes('margin: 18mm 16mm 20mm'));
const definition = exporter.createPdfDefinition(fixture, options);
const table = definition.content.find(node => node.table).table;
assert.equal(table.headerRows, 1);
assert.equal(table.body.length, 181);
assert.equal(table.dontBreakRows, false);
assert.ok(definition.pageBreakBefore({ headlineLevel: 1 }, { getFollowingNodesOnPage: () => [] }));
assert.ok(!definition.pageBreakBefore({ headlineLevel: 1 }, { getFollowingNodesOnPage: () => [{}] }));
fixtureDom.window.close();

async function checkBrowserFlow() {
  const dom = new JSDOM('<!doctype html><head></head><body></body>', { url: 'https://hosted.example/project/index.html', runScripts: 'outside-only' });
  const host = dom.window;
  host.eval(source);
  assert.equal(typeof host.JavaRevChapterExport.createPdfDefinition, 'function');
  assert.deepEqual(JSON.parse(JSON.stringify(host.JavaRevChapterExport.chapterModel(fixture, options))), JSON.parse(JSON.stringify(exporter.chapterModel(fixture, options))));
  let prints = 0;
  let downloads = 0;
  let loads = 0;
  let shouldFail = false;
  let popup;
  host.open = () => {
    popup = documentFor('<!doctype html>');
    popup.window.focus = () => {};
    popup.window.print = () => { prints++; };
    popup.window.HTMLAnchorElement.prototype.click = function () { downloads++; };
    return popup.window;
  };
  host.URL.createObjectURL = () => 'blob:https://hosted.example/test';
  host.URL.revokeObjectURL = () => {};
  host.document.head.appendChild = script => {
    loads++;
    assert.ok(script.src.startsWith('https://hosted.example/project/vendor/pdfmake/'));
    host.pdfMake = { createPdf: () => ({ getBuffer: async () => {
      if (shouldFail) throw new Error('PDF generation failed');
      return new Uint8Array([37, 80, 68, 70]);
    } }) };
    host.setTimeout(() => script.onload(), 0);
    return script;
  };
  const first = await host.JavaRevChapterExport.openChapter(fixture, options, host);
  assert.equal(first.mode, 'pdf');
  assert.equal(downloads, 1);
  assert.equal(prints, 0, 'native PDF must never invoke browser print');
  assert.equal(loads, 2, 'library and fonts load lazily');
  popup.window.document.getElementById('export-print').click();
  assert.equal(prints, 1, 'explicit print fallback works');
  assert.match(popup.window.document.querySelector('.export-controls').textContent, /turn off Headers and footers/);
  popup.window.close();
  shouldFail = true;
  const failure = await host.JavaRevChapterExport.openChapter(fixture, options, host);
  assert.equal(failure.mode, 'print');
  assert.equal(loads, 2, 'successful library loads are shared');
  assert.match(popup.window.document.getElementById('export-status').textContent, /could not be generated/);
  assert.equal(popup.window.document.getElementById('export-download').disabled, false);
  popup.window.close();
  host.open = () => null;
  let alerted = false;
  host.alert = () => { alerted = true; };
  assert.equal((await host.JavaRevChapterExport.openChapter(fixture, options, host)).mode, 'blocked');
  assert.ok(alerted);
  dom.window.close();
}

const indexHtml = fs.readFileSync(path.join(dashboard, 'index.html'), 'utf8');
assert.ok(indexHtml.indexOf('src="chapter-export.js"') < indexHtml.indexOf('src="app.js"'));
assert.ok(!indexHtml.includes('src="vendor/pdfmake/'), 'PDF dependencies must load lazily');
checkBrowserFlow().then(() => {
  console.log(`Export checks passed: ${finished.length} finished chapters, ${topicCount} source topics (${supportCount} without overview), shared HTML/PDF content, long content, notes, hosted downloads and print fallback.`);
}).catch(error => { console.error(error); process.exitCode = 1; });
