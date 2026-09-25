(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.JavaRevChapterExport = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const escapeHtml = value => String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  const inline = value => escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
  const normalize = value => String(value).replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
  const marker = /^\s*@(?:quiz|answer|option|explain|why|code|challenge|desc|hint|testcase|section|takeaway|gotcha|snippet)\b/i;

  // Recognize literals before comments: URLs, escaped quotes and Java text blocks
  // must survive unchanged, even when their contents resemble quiz metadata.
  function sourceParts(source) {
    const parts = [];
    let start = 0;
    let i = 0;
    while (i < source.length) {
      if (source[i] === '"' || source[i] === "'") {
        if (i > start) parts.push({ kind: 'source', text: source.slice(start, i) });
        start = i;
        const quote = source.startsWith('"""', i) ? '"""' : source[i];
        i += quote.length;
        while (i < source.length) {
          if (source[i] === '\\') { i += 2; continue; }
          if (source.startsWith(quote, i)) { i += quote.length; break; }
          i++;
        }
        parts.push({ kind: 'literal', text: source.slice(start, i) });
        start = i;
      } else if (source.startsWith('//', i) || source.startsWith('/*', i)) {
        if (i > start) parts.push({ kind: 'source', text: source.slice(start, i) });
        const block = source[i + 1] === '*';
        let end = source.indexOf(block ? '*/' : '\n', i + 2);
        if (end < 0) end = source.length;
        else if (block) end += 2;
        parts.push({ kind: block ? 'block' : 'line', text: source.slice(i, end) });
        i = end;
        start = i;
      } else i++;
    }
    if (start < source.length) parts.push({ kind: 'source', text: source.slice(start) });
    return parts;
  }

  function implementation(topic) {
    const notes = normalize((topic.headerComments || []).map(block =>
      [...(block.lines || []), block.code || '', ...(block.headers || []), ...(block.rows || []).flat()].join(' ')
    ).join(' '));
    let inType = false;
    const filtered = sourceParts(String(topic.code || '').replace(/\r\n?/g, '\n')).map(part => {
      if (part.kind === 'literal') return part.text;
      if (part.kind === 'source') {
        if (/\b(?:class|interface|enum|record)\s+[\p{L}_$]/u.test(part.text)) inType = true;
        return part.text;
      }
      const lines = (part.kind === 'block' ? part.text.slice(2, -2) : part.text.slice(2))
        .split('\n').map(line => line.replace(/^\s*\* ?/, ''));
      const kept = lines.filter(line => {
        if (marker.test(line)) return false;
        const normalized = normalize(line);
        return inType || !notes || (normalized && !notes.includes(normalized));
      });
      if (kept.length === lines.length) return part.text;
      if (!kept.some(line => line.trim())) return ' ';
      return part.kind === 'block' ? '/*' + kept.join('\n') + '*/' : '//' + kept.join('\n');
    }).join('');
    return sourceParts(filtered).map(part => part.kind === 'source'
      ? part.text.replace(/^[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n') : part.text).join('').trim();
  }

  function noteBlocks(topic) {
    const blocks = [];
    let items = [];
    const flush = () => {
      if (items.length) blocks.push({ kind: 'list', items: items.map(line => line.replace(/^[-*\u2022]\s*/, '')) });
      items = [];
    };
    for (const block of topic.headerComments || []) {
      if (block.type === 'table') {
        flush();
        blocks.push({ kind: 'table', headers: block.headers || [], rows: block.rows || [] });
      } else if (block.type === 'code' && block.code) {
        flush();
        blocks.push({ kind: 'code', code: block.code });
      } else {
        for (const raw of block.lines || []) {
          const line = String(raw || '').trim();
          if (!line) continue;
          const callout = line.match(/^(Warning|OCJP trap|Interview trap|Pitfall|Important|CAUTION|NOTE)\s*:\s*(.*)/i);
          if (callout) {
            flush();
            blocks.push({ kind: 'callout', title: callout[1], text: callout[2] });
          } else if (/^(Parameter notes|Key Takeaways|Core Concepts|Syntax|Rules|Exception Hierarchy|Method Overview|Good Practices)\b/i.test(line) ||
            (/:[-]?$/.test(line) && line.length < 80 && !line.startsWith('-'))) {
            flush();
            blocks.push({ kind: 'heading', text: line.replace(/[:-]+$/, '') });
          } else items.push(line);
        }
      }
    }
    flush();
    if (!blocks.length && (topic.inlineComments || []).length) {
      blocks.push({ kind: 'list', items: topic.inlineComments });
    }
    return blocks;
  }

  function renderBlocks(blocks) {
    return blocks.map(block => {
      if (block.kind === 'table') return `<table><thead><tr>${block.headers.map(cell => `<th scope="col">${inline(cell)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
      if (block.kind === 'code') return `<pre><code>${escapeHtml(block.code)}</code></pre>`;
      if (block.kind === 'callout') return `<aside><strong>${inline(block.title)}</strong> ${inline(block.text)}</aside>`;
      if (block.kind === 'heading') return `<h4>${inline(block.text)}</h4>`;
      return `<ul>${block.items.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`;
    }).join('');
  }

  function renderNotes(topic) { return renderBlocks(noteBlocks(topic)); }

  function chapterModel(chapter, options = {}) {
    if (!chapter || !Array.isArray(chapter.topics)) throw new TypeError('A chapter with topics is required.');
    return {
      name: String(chapter.name || 'Chapter'),
      projectNotes: String(options.projectNotes || '').trim(),
      topics: chapter.topics.map(topic => ({
        name: String(topic.topicName || topic.fileName || 'Topic'),
        filePath: String(topic.filePath || ''),
        blocks: noteBlocks(topic),
        code: implementation(topic),
        note: String((options.topicNotes || {})[topic.filePath] || '').trim()
      }))
    };
  }

  const printStyles = `
    @page { size: A4; margin: 18mm 16mm 20mm;
      @bottom-center { content: counter(page); font: 9pt Arial, sans-serif; color: #555; }
    }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; color: #202020; background: white; font: 11pt/1.5 Arial, Helvetica, sans-serif; overflow-wrap: anywhere; }
    h1, h2, h3, h4, .topic-kicker { break-after: avoid; page-break-after: avoid; }
    h1 { font-size: 28pt; line-height: 1.15; }
    h2 { font-size: 19pt; line-height: 1.2; margin: 0 0 12pt; padding-bottom: 6pt; border-bottom: 1px solid #bbb; }
    h3 { font-size: 13pt; margin: 16pt 0 6pt; }
    h4 { font-size: 11pt; margin: 12pt 0 4pt; }
    .cover { break-after: page; page-break-after: always; padding-top: 45mm; }
    .topic + .topic, .project-notes { break-before: page; page-break-before: always; }
    .topic-kicker, .eyebrow, .source-path { color: #555; font-size: 9pt; }
    .topic-kicker { margin-bottom: 5pt; }
    .source-path { margin: 0 0 8pt; break-after: avoid; }
    p, li, .personal-note { orphans: 3; widows: 3; }
    ul { padding-left: 19pt; margin: 6pt 0 12pt; }
    li { margin: 3pt 0; }
    code { font-family: Consolas, 'Courier New', monospace; }
    pre { font: 9pt/1.45 Consolas, 'Courier New', monospace; white-space: pre-wrap; overflow-wrap: anywhere; word-break: break-word; tab-size: 4; margin: 8pt 0 14pt; padding: 9pt; border: 1px solid #ccc; background: #f5f5f5; break-inside: auto; overflow: visible; max-width: 100%; }
    pre code { white-space: inherit; overflow-wrap: inherit; }
    aside { margin: 10pt 0; padding-left: 10pt; border-left: 3px solid #888; }
    table { width: 100%; table-layout: fixed; border-collapse: collapse; margin: 10pt 0 14pt; font-size: 9pt; break-inside: auto; }
    thead { display: table-header-group; }
    th, td { text-align: left; vertical-align: top; padding: 6pt; border: 1px solid #aaa; overflow-wrap: anywhere; word-break: break-word; }
    th { background: #eee; }
    tr { break-inside: auto; }
    .personal-note { white-space: pre-wrap; }
    .export-controls { padding: 12px; border-bottom: 1px solid #aaa; margin-bottom: 20px; font: 14px/1.5 Arial, sans-serif; }
    .export-controls button { margin-right: 10px; padding: 6px 12px; }
    @media screen { body { max-width: 210mm; padding: 18mm 16mm; margin: auto; } .topic { margin-top: 32px; } }
    @media print { .export-controls { display: none !important; } a { color: inherit; text-decoration: none; } }
  `;

  function renderChapter(chapter, options = {}) {
    const model = chapterModel(chapter, options);
    const topics = model.topics.map((topic, index) => {
      const { code, note } = topic;
      return `<article class="topic" data-source="${escapeHtml(topic.filePath)}">
        <div class="topic-kicker">Topic ${index + 1} of ${chapter.topics.length}</div>
        <h2>${escapeHtml(topic.name)}</h2>
        <section class="notes-content">${renderBlocks(topic.blocks)}</section>
        ${code ? `<section class="implementation"><h3>Implementation</h3><p class="source-path">${escapeHtml(topic.filePath)}</p><pre><code>${escapeHtml(code)}</code></pre></section>` : ''}
        ${note ? `<section class="topic-notes"><h3>My Notes</h3><div class="personal-note">${inline(note)}</div></section>` : ''}
      </article>`;
    }).join('');
    const project = model.projectNotes;
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(chapter.name)} - Revision Notes</title><style>${printStyles}</style></head><body>
      ${options.interactive ? '<div class="export-controls"><button type="button" id="export-download">Download PDF</button><button type="button" id="export-print">Browser Print</button><p id="export-status" role="status">Preparing chapter PDF...</p><p>Browser print fallback: turn off Headers and footers in the print dialog to omit the browser date, title and address.</p></div>' : ''}
      <header class="cover"><div class="eyebrow">Java Concepts Revision Notes</div><h1>${escapeHtml(chapter.name)}</h1><p>${chapter.topics.length} topics</p></header>
      ${topics}${project ? `<section class="project-notes"><h2>Project Notes</h2><div class="personal-note">${inline(project)}</div></section>` : ''}
    </body></html>`;
  }

  // For callers that also render the HTML with headless Chromium.
  const pdfOptions = Object.freeze({ format: 'A4', preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });

  // Discretionary breaks keep long Java identifiers and table cells within the
  // printable width without deleting characters or adding visible hyphens.
  const pdfText = value => String(value).replace(/\S{25,}/gu, token => Array.from(token).map((char, i) =>
    (i && i % 24 === 0 ? '\u200b' : '') + char).join(''));
  const pdfInline = value => String(value).split(/(`[^`]+`)/g).filter(Boolean).map(text =>
    text.startsWith('`') && text.endsWith('`') ? { text: pdfText(text.slice(1, -1)), bold: true } : { text: pdfText(text) });

  function createPdfDefinition(chapter, options = {}) {
    const model = chapterModel(chapter, options);
    const heading = (text, style = 'subheading') => ({ text: pdfText(text), style, headlineLevel: 1 });
    const code = value => ({ text: pdfText(value.replace(/\t/g, '    ')), style: 'code', preserveLeadingSpaces: true });
    const content = [
      { text: 'Java Concepts Revision Notes', style: 'muted', margin: [0, 120, 0, 10] },
      { text: pdfText(model.name), style: 'title' },
      { text: `${model.topics.length} topics`, margin: [0, 10, 0, 0] }
    ];
    for (const [index, topic] of model.topics.entries()) {
      content.push({ text: `Topic ${index + 1} of ${model.topics.length}`, style: 'muted', pageBreak: 'before', headlineLevel: 1 });
      content.push(heading(topic.name, 'topic'));
      for (const block of topic.blocks) {
        if (block.kind === 'heading') content.push(heading(block.text));
        else if (block.kind === 'code') content.push(code(block.code));
        else if (block.kind === 'callout') content.push({ text: [{ text: `${block.title}: `, bold: true }, ...pdfInline(block.text)], margin: [8, 6, 0, 8] });
        else if (block.kind === 'list') content.push({ ul: block.items.map(item => ({ text: pdfInline(item), margin: [0, 2, 0, 3] })), margin: [0, 4, 0, 8] });
        else if (block.kind === 'table') {
          const columns = Math.max(block.headers.length, ...block.rows.map(row => row.length), 0);
          if (!columns) continue;
          const cells = (row, header) => Array.from({ length: columns }, (_, i) => ({
            text: pdfInline(row[i] || ''), bold: header, fillColor: header ? '#eeeeee' : undefined,
            margin: [3, 4, 3, 4]
          }));
          const rows = block.rows.map(row => cells(row, false));
          if (block.headers.length) rows.unshift(cells(block.headers, true));
          content.push({ table: { headerRows: block.headers.length ? 1 : 0, widths: Array(columns).fill('*'), body: rows, dontBreakRows: false }, layout: 'lightHorizontalLines', fontSize: 9, margin: [0, 6, 0, 12] });
        }
      }
      if (topic.code) {
        content.push(heading('Implementation'));
        content.push({ text: pdfText(topic.filePath), style: 'muted', headlineLevel: 1, margin: [0, 0, 0, 6] });
        content.push(code(topic.code));
      }
      if (topic.note) {
        content.push(heading('My Notes'));
        content.push({ text: pdfInline(topic.note), preserveLeadingSpaces: true });
      }
    }
    if (model.projectNotes) content.push({ ...heading('Project Notes', 'topic'), pageBreak: 'before' }, { text: pdfInline(model.projectNotes), preserveLeadingSpaces: true });
    return {
      info: { title: `${model.name} - Revision Notes`, creator: 'JavaRevise' },
      pageSize: 'A4', pageMargins: [46, 51, 46, 57],
      defaultStyle: { font: 'Roboto', fontSize: 10.5, lineHeight: 1.2 },
      styles: {
        title: { fontSize: 28, bold: true }, topic: { fontSize: 19, bold: true, margin: [0, 5, 0, 12] },
        subheading: { fontSize: 12, bold: true, margin: [0, 12, 0, 6] },
        muted: { fontSize: 8.5, color: '#555555' }, code: { fontSize: 8.5, lineHeight: 1.15, margin: [0, 4, 0, 12] }
      },
      content,
      footer: (page, pages) => ({ text: `${page} / ${pages}`, alignment: 'center', fontSize: 9, margin: [0, 18, 0, 0] }),
      pageBreakBefore: (node, container) => Boolean(node.headlineLevel && container.getFollowingNodesOnPage().length === 0)
    };
  }

  async function createPdfBlob(chapter, options = {}, pdfMake) {
    if (!pdfMake || typeof pdfMake.createPdf !== 'function') throw new Error('PDF library unavailable');
    const buffer = await pdfMake.createPdf(createPdfDefinition(chapter, options)).getBuffer();
    return new Blob([buffer], { type: 'application/pdf' });
  }

  const scriptUrl = typeof document !== 'undefined' ? (document.currentScript && document.currentScript.src) || document.baseURI : null;
  const pdfLoads = new WeakMap();
  function loadPdfLibrary(host) {
    if (pdfLoads.has(host)) return pdfLoads.get(host);
    const load = name => new Promise((resolve, reject) => {
      const script = host.document.createElement('script');
      script.src = new host.URL(`vendor/pdfmake/${name}`, scriptUrl || host.document.baseURI).href;
      const timer = host.setTimeout(() => { script.remove(); reject(new Error('PDF library load timed out')); }, 30000);
      script.onload = () => { host.clearTimeout(timer); resolve(); };
      script.onerror = () => { host.clearTimeout(timer); script.remove(); reject(new Error('PDF library unavailable')); };
      host.document.head.appendChild(script);
    });
    const pending = (async () => {
      if (!host.pdfMake) await load('pdfmake.min.js');
      await load('vfs_fonts.js');
      return host.pdfMake;
    })().catch(error => { pdfLoads.delete(host); throw error; });
    pdfLoads.set(host, pending);
    return pending;
  }

  async function openChapter(chapter, options = {}, host = window) {
    const preview = host.open('', '_blank');
    if (!preview) {
      host.alert('Please allow pop-ups to export chapter notes.');
      return { mode: 'blocked' };
    }
    preview.document.open();
    preview.document.write(renderChapter(chapter, { ...options, interactive: true }));
    preview.document.close();
    const status = preview.document.getElementById('export-status');
    const print = () => { if (!preview.closed) { preview.focus(); preview.print(); } };
    preview.document.getElementById('export-print').onclick = print;
    const download = preview.document.getElementById('export-download');
    let currentUrl;
    preview.addEventListener('unload', () => { if (currentUrl) host.URL.revokeObjectURL(currentUrl); }, { once: true });
    const generate = async () => {
      download.disabled = true;
      status.textContent = 'Preparing chapter PDF...';
      try {
        const pdfMake = await loadPdfLibrary(host);
        const blob = await createPdfBlob(chapter, options, pdfMake);
        if (!blob.size) throw new Error('Empty PDF');
        if (preview.closed) return { mode: 'closed' };
        if (currentUrl) host.URL.revokeObjectURL(currentUrl);
        currentUrl = host.URL.createObjectURL(blob);
        const link = preview.document.createElement('a');
        link.href = currentUrl;
        link.download = `${String(chapter.name || 'chapter').replace(/[^a-z0-9_-]+/gi, '-').replace(/-+$/, '')}.pdf`;
        link.textContent = 'Download chapter PDF';
        status.textContent = 'PDF ready. ';
        status.appendChild(link);
        link.click();
        return { mode: 'pdf' };
      } catch (error) {
        if (preview.closed) return { mode: 'closed' };
        status.textContent = 'PDF download could not be generated. Retry Download PDF or use Browser Print; turn off Headers and footers in that dialog.';
        return { mode: 'print', error: error.message };
      } finally { if (!preview.closed) download.disabled = false; }
    };
    download.onclick = generate;
    return generate();
  }

  return { escapeHtml, renderNotes, implementation, chapterModel, renderChapter, createPdfDefinition, createPdfBlob, openChapter, pdfOptions };
});
