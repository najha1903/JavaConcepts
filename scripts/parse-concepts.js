const fs = require('fs');
const path = require('path');
const vm = require('vm');

// The concept catalogue. Questions are tagged by CONCEPT rather than by chapter
// name, so a new chapter receives the right material from what its notes cover
// instead of matching nothing.
const conceptCatalogue = require(path.join(__dirname, '..', 'data', 'java-concepts.js'));
const { OCJP_BANK } = require(path.join(__dirname, '..', 'data', 'ocjp-bank.js'));
const { DERIVED_CODE_QUESTIONS } = require(path.join(__dirname, '..', 'data', 'code-questions.js'));
const { PRACTICE_EXPECTATIONS } = require(path.join(__dirname, '..', 'data', 'practice-expectations.js'));
const { CURATED_PRACTICE_CHALLENGES } = require(path.join(__dirname, '..', 'data', 'practice-challenges.js'));
const { buildVerifySource } = require(path.join(__dirname, 'lib', 'lab-verifier.js'));
const noteRules = require(path.join(__dirname, 'lib', 'note-rules.js'));

// ==========================================================================
// The marker vocabulary, in one place.
// Every marker the tool understands is listed here. A marker that is missing
// from this list is not recognised as tool syntax, so it shows up in the
// author's notes as if he had written it. Always add new markers here.
// ==========================================================================
const MARKER_KEYWORDS = 'quiz|answer|option|explain|why|code|challenge|desc|hint|testcase|section|takeaway|gotcha';
const MARKER_AFTER_SLASHES = new RegExp(`^//\\s*@(?:${MARKER_KEYWORDS})\\b`, 'i');
const MARKER_BARE = new RegExp(`^@(?:${MARKER_KEYWORDS})\\b`, 'i');

// ==========================================================================
// Helper: Recursively list all .java files
// ==========================================================================
function getJavaFiles(dir, fileList = []) {
  // Sort entries numerically so Sub_Chapter_10 comes after Sub_Chapter_9, not before Sub_Chapter_2
  const files = fs.readdirSync(dir).sort((a, b) => {
    const aNum = parseInt(a.match(/^(?:Chapter|Sub_Chapter)_(\d+)/)?.[1] || '0', 10);
    const bNum = parseInt(b.match(/^(?:Chapter|Sub_Chapter)_(\d+)/)?.[1] || '0', 10);
    if (aNum !== bNum) return aNum - bNum;
    return a.localeCompare(b);
  });
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'out' && file !== 'revision-dashboard') {
        getJavaFiles(filePath, fileList);
      }
    } else if (file.endsWith('.java')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// ==========================================================================
// Helper: Format chapter/sub-chapter folder names to display names
// ==========================================================================
function formatName(name) {
  let formatted = name
    .replace(/^Chapter_\d+_/, '')
    .replace(/^Sub_Chapter_\d+_/, '');
  formatted = formatted.replace(/_/g, ' ');
  formatted = formatted.replace(/([a-z])([A-Z])/g, '$1 $2');
  formatted = formatted.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
  formatted = formatted.replace(/\bOOPS\b/gi, 'OOP');
  formatted = formatted.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  if (name.startsWith('Chapter_')) {
    const num = name.match(/^Chapter_(\d+)_/)?.[1];
    return `Chapter ${num}: ${formatted}`;
  }
  return formatted;
}

// CONCEPT_BADGES lives in data/java-concepts.js with the rest of the concept
// metadata, so the ledger can check a chapter's badges against it rather than
// guessing from their shape.

// ==========================================================================
// A chapter that is still being written
// ==========================================================================
// The author writes a chapter over several sessions. While he is doing that, the
// tool must not judge the chapter and must not fill it in. Two reasons, both his:
//
//   - flagging a gap in a half-written chapter is double work, because he may cover
//     it in the next session;
//   - anything generated for it may become wrong the moment he edits the notes.
//
// So a chapter is FINISHED only once a higher-numbered chapter exists, and `@draft`
// in the file overrides that in the other direction. For an unfinished chapter the
// tool generates no questions, no takeaways and no gotchas - only what he wrote
// himself appears. Everything arrives the moment he moves on.
//
// The rule lives in scripts/lib/note-rules.js so this parser, the coverage ledger and
// the suggestion engine cannot disagree about what "finished" means.

// ==========================================================================
// Helper: Parse a Java file into structured data
// ==========================================================================
function parseJavaFile(filePath, rootDir) {
  // The source files use CRLF. Splitting on \n alone leaves a stray \r at the end
  // of every line, and a \r inside a code sample makes the browser carry the
  // caret back to the start of the line, which overlaps the text that follows.
  // Normalising once, here, keeps every later stage line-based.
  const content = fs.readFileSync(filePath, 'utf8').replace(/\r\n?/g, '\n');
  const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');

  const parts = relativePath.split('/');
  const fileName = parts[parts.length - 1];
  const topicName = fileName.replace('.java', '').replace(/([A-Z])/g, ' $1').trim();

  let chapter = 'General';
  let subChapter = '';

  const srcIdx = parts.indexOf('src');
  if (srcIdx !== -1 && parts.length > srcIdx + 1) {
    chapter = formatName(parts[srcIdx + 1]);
    if (parts.length > srcIdx + 2 && parts[srcIdx + 2] !== fileName) {
      subChapter = formatName(parts[srcIdx + 2]);
    }
  }

  // Parse header comments (before first real type definition line).
  // Use start-of-line anchor so words like "super class" inside comments
  // are NOT treated as class declarations.
  const classDefRegex = /^\s*(public\s+)?(abstract\s+|final\s+)?(class|interface|record|enum)\s+\w+/m;
  const match = content.match(classDefRegex);
  const headerContent = match ? content.substring(0, match.index) : content;

  // ---- helpers ----------------------------------------------------------------

  // Returns true if a comment line is a meaningful English sentence/phrase.
  function isMeaningfulLine(line) {
    const n = line.replace(/\s+/g, ' ').trim();
    if (!n || n.length < 4) return false;
    // Only decoration (pipes, dashes, asterisks, arrows, underscores)
    if (/^[\W_\-|*_=<>~^]+$/.test(n)) return false;
    // ASCII tree / diagram lines
    if (/^[|\s]*[|_\-/\\|]+[|\s]*$/.test(n)) return false;
    const letters = (n.match(/[A-Za-z]/g) || []).length;
    if (letters < 3) return false;
    // A line that contains a real word is a note, even when it is mostly symbols.
    // This test comes before the ratio below so that a line such as
    // "1) unary: ++ -- ! + -   2) * / %   3) + -" is kept: it is a note about
    // operator precedence, and judging it only on the ratio of letters to length
    // discarded it as if it were decoration.
    if (/[A-Za-z]{3,}/.test(n)) return true;
    const alphaNums = (n.match(/[A-Za-z0-9]/g) || []).length;
    if (alphaNums / n.length < 0.30) return false;
    return true;
  }

  // Returns true if a line is commented-out code rather than an explanation.
  // The rule lives in scripts/lib/note-rules.js so the Revision Bank, the coverage
  // ledger and this parser cannot disagree about what counts as code.
  const isCodeFragment = noteRules.isCodeFragment;

  // Joins lines where the previous line is clearly a continuation. Besides a
  // comma or lowercase continuation, recognize grammatical connector words so
  // wrapped prose such as "the same API as / StringBuilder" stays together.
  function joinContinuationLines(lines) {
    if (lines.length <= 1) return lines;
    const result = [];
    let acc = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!acc) { acc = line; continue; }

      // A list item always starts a new line. Roman numerals count as list
      // markers too, because the author numbers lists as i), ii), iii). Without
      // this, "iii) Value is accessed by ClassName.fieldname" was joined onto the
      // end of the item above it, welding two separate list items into one line.
      // A trailing space is required so that "i.e." is not mistaken for a marker.
      const startsNewItem = /^\d+[\).]/.test(line) || /^[ivx]{1,4}[\).]\s/i.test(line) || /^[-*•]/.test(line);
      const accEndsPunctuation = /[.!?]$/.test(acc) || /:-?$/.test(acc);
      const accEndsComma = /,\s*$/.test(acc);
      const nextStartsLower = /^[a-z]/.test(line);
      const endsWithConnector = /\b(?:as|and|or|but|because|with|from|to|of|for|in|on|is|are|the|a|an|that|which|when|if|than|into|while|until|this|its|their|same|nearly)$/i.test(acc.trim());

      // A run of complete entries is a list, not one wrapped sentence. The
      // challenge files write test cases one per line, such as
      // "sumOdd(1, 100); should return 2500" followed by
      // "sumOdd(-1, 100); should return -1", and each of those is a whole item.
      // Joining them produced one run-on paragraph several hundred characters long.
      // A line counts as an entry when it opens with a call, or when it contains a
      // call followed by an arrow, which catches lists that begin with a heading
      // such as "Example input/output" before the first test case.
      const isEntry = text =>
        /^\w[\w.$]*\s*\([^)]*\)\s*(?:;|,|:|\s*$)/.test(text) ||
        /(?:^|\s)\w[\w.$]*\s*\([^)]*\)\s*[;,]?\s*(?:→|->)/.test(text);
      if (isEntry(acc) && isEntry(line)) {
        result.push(acc);
        acc = line;
        continue;
      }

      if (startsNewItem) {
        result.push(acc);
        acc = line;
      } else if (accEndsComma) {
        // Continuation after comma (unless next is a numbered item — already handled)
        acc = acc.trimEnd() + ' ' + line;
      } else if (!accEndsPunctuation && (nextStartsLower || endsWithConnector)) {
        // Incomplete line → join the next source-comment line.
        acc = acc.trimEnd() + ' ' + line;
      } else {
        result.push(acc);
        acc = line;
      }
    }
    if (acc) result.push(acc);
    return result;
  }

  // Strips trailing comma (with optional space) from a line and replaces with period.
  function fixTrailingComma(line) {
    return /,\s*$/.test(line) ? line.trimEnd().replace(/,\s*$/, '.') : line;
  }

  // Keep the author's note as the source of truth. These narrow rewrites only
  // improve grammar or add clarifying context around the same technical idea.
  function clarifyNoteLine(line) {
    let clarified = String(line || '').trim();
    if (!clarified) return clarified;
    const bulletMatch = clarified.match(/^([-*•]\s*)/);
    const bulletPrefix = bulletMatch ? bulletMatch[1] : '';
    clarified = bulletMatch ? clarified.slice(bulletMatch[0].length).trim() : clarified;

    // The author's note is the source of truth, so nothing below rewords it.
    // The only substitutions are for shorthand he uses as a writing convenience:
    // "For Ex :-" and "Ex:-" become "For example:" and "Example:".
    //
    // Everything else is left exactly as written. His ":-" signposts ("Note :-",
    // "Output :-", "Pitfall :-") are part of his voice, contractions such as
    // "doesn't" are never expanded, and a sentence is never replaced with a
    // rewritten version of itself.
    clarified = clarified
      .replace(/\bFor Ex\s*[:-]+/gi, 'For example:')
      .replace(/\bEx\s*:-\s*/gi, 'Example: ')
      .replace(/\bFor ex\s*[:-]+/gi, 'For example:')
      .replace(/\s{2,}/g, ' ')
      .trim();

    return bulletPrefix + clarified;
  }

  // ---- ASCII / markdown table detection --------------------------------------
  // Recognises pipe-delimited rows so they can be rendered as a real table
  // instead of being mashed into one run-on prose line.
  function isTableRow(line) {
    if (!line.includes('|')) return false;
    const nonEmpty = line.split('|').map(c => c.trim()).filter(c => c !== '');
    return nonEmpty.length >= 2;
  }
  function isSeparatorRow(line) {
    return /-/.test(line) && line.split('|').every(c => /^[\s:|-]*$/.test(c));
  }
  function splitCells(line) {
    return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  }

  function isLikelyCommentCodeLine(line, inCode = false) {
    const t = line.trim();
    if (!t) return inCode;
    if (/^\/\/\s*@/.test(t)) return false;
    if (/^\w[\w\s-]*--?>/.test(t)) return false;
    // A bullet is the author's prose. His notes are written as "- ..." lines, so a
    // bullet is never code even when it mentions braces or ends with a semicolon,
    // which is what turned "- These do NOT end with a semicolon: ... a block { }
    // into a code block.
    if (/^[-*•]\s+\S/.test(t)) return false;
    // A wrapped statement continues the code block: it starts with an operator, a
    // dot, or a closing bracket. Without this, "String message = ..." followed by
    // '    + " World"' broke the sample into alternating code and prose, and the
    // continuation lost its indentation when it was trimmed as a note.
    if (inCode && /^[+\-*/%]|^(?:&&|\|\||==|!=|<=|>=|\?|:)|^[)\]}],?$/.test(t)) {
      if (!/^[-*•]\s+\S/.test(t) && t.split(/\s+/).length <= 8) return true;
    }
    // A genuine table row (cells separated by single pipes, not a || operator,
    // and not ending like a statement) is prose, never code. This keeps tables
    // whose rows start with System./type keywords from being split into code.
    if (isTableRow(t) && !/\|\|/.test(t) && !/[;{}]\s*$/.test(t)) return false;
    // A note can end with a semicolon, for example when it names a statement, and
    // it can be long. Judging only on the semicolon used to turn whole sentences
    // into code blocks, which split the author's notes apart. A line is treated as
    // code only when it also looks like a statement: a call, a keyword, or braces.
    // A trailing // comment is ignored when counting words, because "Integer boxed
    // = 5; // autoboxing, int to Integer" is code with a note beside it, not prose.
    const codePart = t.split('//')[0].trim();
    const wordCount = codePart.split(/\s+/).filter(Boolean).length;
    // A line that only STARTS with a type name is not necessarily code: "char and
    // Unicode: ..." is a note, while "char c = 'D';" is a declaration. So a type
    // keyword counts only when it is followed by an identifier and then = ; or ,.
    const looksLikeStatement =
      /^[A-Za-z_$][\w$.]*\s*\(/.test(codePart) ||
      /^(System|new|return|throw|super|this|break|continue)\b/.test(codePart) ||
      /^(public|private|protected|static|final|void|class|interface)\b/.test(codePart) ||
      /^(int|long|double|float|boolean|char|String|StringBuilder|var|Integer|Double|Long|Float|Boolean|Character|Short|Byte)\s+[\w\[\]]+\s*(=|;|,)/.test(codePart) ||
      /^(if|for|while|switch|try|catch)\s*\(/.test(codePart) ||
      /^}?\s*else\b/.test(codePart) ||
      /^[-*•]\s*\w+\s*[=;]/.test(codePart);
    if (wordCount >= 8 && !looksLikeStatement && !/[{}]/.test(codePart)) return false;
    // Braces on their own are not enough to make a line code: a note that happens
    // to mention "{ }" is still a note. Braces count only alongside a statement
    // shape, which is what a real declaration, call or block header has.
    return (looksLikeStatement && /[{}]/.test(t)) ||
      /;\s*(\/\/.*)?$/.test(t) ||
      isCodeFragment(t) ||
      /^(while|for|if|switch|try|catch)\s*\(/.test(t) ||
      /^}?\s*else\b/.test(t) ||
      /^(case\s+.+:|default:|break\s*;|continue\s*;|return\b|finally\b|System\.)/.test(t) ||
      /^(int|long|double|float|boolean|char|String|StringBuilder|var)\s+[\w\[\]]+\s*(=|;|,)/.test(t) ||
      /^[A-Z]\w*(?:<[^>]+>)?\s+\w+\s*(=|;)/.test(t) ||
      /^[a-zA-Z_$][\w$]*\s*(=|\+\+|--)/.test(t);
  }

  // An ASCII diagram is a picture made of aligned columns. Detecting it matters
  // because joining its rows into a paragraph, or trimming their indentation,
  // destroys the picture. A diagram row either lines up columns with a run of
  // spaces, or draws a rule with a long run of the same character.
  function isDiagramLine(line) {
    const t = String(line || '').replace(/\s+$/, '');
    if (!t.trim()) return false;
    if (/\S {3,}\S/.test(t)) return true;
    if (/[-=_|+~]{6,}/.test(t)) return true;
    if (/^[\s|+\\/.-]+$/.test(t) && /[|+\\/]/.test(t)) return true;
    return false;
  }

  function appendProseSegments(lines, results, type = 'lines') {
    const kept = lines
      .map(raw => ({ raw, text: String(raw || '').trim() }))
      .filter(p => isMeaningfulLine(p.text))
      .filter(p => !MARKER_BARE.test(p.text))
      .filter(p => isTableRow(p.text) || !isCodeFragment(p.text));

    // Split into runs of diagram rows and runs of ordinary prose, so a diagram
    // is emitted as one preformatted block instead of being flattened.
    const groups = [];
    for (const p of kept) {
      const diagram = !isTableRow(p.text) && isDiagramLine(p.raw);
      const last = groups[groups.length - 1];
      if (last && last.diagram === diagram) last.items.push(p);
      else groups.push({ diagram, items: [p] });
    }

    for (const group of groups) {
      if (group.diagram && group.items.length >= 2) {
        results.push({
          type: 'code',
          language: 'text',
          code: group.items.map(p => p.raw.replace(/\s+$/, '')).join('\n'),
          lines: []
        });
        continue;
      }
      const meaningful = group.items.map(p => p.text);
      for (const seg of segmentTables(meaningful)) {
        if (seg.type === 'table') {
          results.push(seg);
        } else {
          const joined = joinContinuationLines(seg.lines).map(fixTrailingComma).map(clarifyNoteLine);
          if (joined.length > 0) results.push({ type, lines: joined });
        }
      }
    }
  }

  // A code sample is shown in a <pre>, so its indentation is part of the meaning.
  // Trailing spaces are dropped, and the whole sample is dedented by its smallest
  // indent so it starts at the left edge while the nesting inside it survives.
  function appendCodeSegment(lines, results) {
    const trimmed = lines.map(line => String(line || '').replace(/\s+$/, ''));
    while (trimmed.length && trimmed[0].trim() === '') trimmed.shift();
    while (trimmed.length && trimmed[trimmed.length - 1].trim() === '') trimmed.pop();
    const indents = trimmed
      .filter(line => line.trim() !== '')
      .map(line => (line.match(/^\s*/) || [''])[0].length);
    const base = indents.length ? Math.min(...indents) : 0;
    const code = trimmed.map(line => line.slice(Math.min(base, (line.match(/^\s*/) || [''])[0].length))).join('\n');
    if (code) results.push({ type: 'code', language: 'java', code, lines: [] });
  }


  // Generated parameter notes are deliberately NOT produced.
  //
  // This used to invent a line for every method parameter that the author had not
  // described, which produced boilerplate such as "the int value supplied to
  // isOdd(); choose a representative value, then test a boundary value". That
  // restates the signature, adds nothing to understanding, and puts the tool's
  // words into the author's notes. The author writes parameter notes himself in
  // the topics where they matter, and those are kept exactly as written.
  function addGeneratedParameterNotes() {
    return;
  }

  // Returns the non-separator rows of a consecutive table run starting at `start`.
  function tableRunInfo(lines, start) {
    let j = start;
    const rowLines = [];
    while (j < lines.length && isTableRow(lines[j])) {
      if (!isSeparatorRow(lines[j])) rowLines.push(lines[j]);
      j++;
    }
    return { end: j, rowLines };
  }
  // Splits an array of note lines into ordered prose / table segments.
  function segmentTables(lines) {
    const segments = [];
    let prose = [];
    const flushProse = () => {
      if (prose.length) { segments.push({ type: 'lines', lines: prose }); prose = []; }
    };
    let i = 0;
    while (i < lines.length) {
      if (isTableRow(lines[i])) {
        const { end, rowLines } = tableRunInfo(lines, i);
        if (rowLines.length >= 2) {
          flushProse();
          const cellRows = rowLines.map(splitCells);
          const colCount = Math.max(...cellRows.map(r => r.length));
          const pad = r => { const c = r.slice(); while (c.length < colCount) c.push(''); return c; };
          segments.push({
            type: 'table',
            headers: pad(cellRows[0]),
            rows: cellRows.slice(1).map(pad),
            lines: cellRows.map(cells => cells.filter(c => c !== '').join(' — '))
          });
          i = end;
          continue;
        }
      }
      prose.push(lines[i]);
      i++;
    }
    flushProse();
    return segments;
  }

  // Extracts and cleans block comments from a text region.
  function extractBlockComments(text) {
    const re = /\/\*([\s\S]*?)\*\//g;
    const results = [];
    let m;
    while ((m = re.exec(text)) !== null) {
      const cleaned = m[1].split('\n')
        .map(l => l.replace(/^\s*\*\s?/, '').replace(/\s+$/, ''));

      while (cleaned.length && cleaned[0].trim() === '') cleaned.shift();
      while (cleaned.length && cleaned[cleaned.length - 1].trim() === '') cleaned.pop();

      const nonBlank = cleaned.filter(l => l.trim() !== '');
      const baseIndent = nonBlank.length
        ? Math.min(...nonBlank.map(l => (l.match(/^\s*/) || [''])[0].length))
        : 0;
      const lines = cleaned.map(l => l.slice(Math.min(baseIndent, (l.match(/^\s*/) || [''])[0].length)));

      const flushProse = proseLines => appendProseSegments(proseLines, results, 'block');
      const flushCode = codeLines => appendCodeSegment(codeLines, results);

      let proseBuffer = [];
      let codeBuffer = [];
      let inCode = false;

      for (const line of lines) {
        const trimmed = line.trim();
        if (MARKER_AFTER_SLASHES.test(trimmed)) {
          if (inCode) { flushCode(codeBuffer); codeBuffer = []; inCode = false; }
          flushProse(proseBuffer); proseBuffer = [];
          continue;
        }

        if (isLikelyCommentCodeLine(line, inCode)) {
          if (!inCode) {
            flushProse(proseBuffer);
            proseBuffer = [];
            inCode = true;
          }
          codeBuffer.push(line);
        } else if (inCode) {
          flushCode(codeBuffer);
          codeBuffer = [];
          inCode = false;
          proseBuffer.push(line);
        } else {
          proseBuffer.push(line);
        }
      }

      if (inCode) flushCode(codeBuffer);
      else flushProse(proseBuffer);
    }
    return results;
  }

  // ---- build header comments --------------------------------------------------

  const headerComments = [];

  // Block comments before the class declaration
  headerComments.push(...extractBlockComments(headerContent));

  // Line comments before the class declaration (strip block-comment regions first)
  const cleanHeader = headerContent.replace(/\/\*([\s\S]*?)\*\//g, '');
  const lineCommentLines = cleanHeader.split('\n')
    .filter(l => l.trim().startsWith('//'))
    .map(l => l.replace(/^\s*\/\/ ?/, '').replace(/^\/\/ ?/, ''))
    .filter(l => !MARKER_BARE.test(l.trim()))
    .filter(l => !/https?:\/\//.test(l));

  let lineProseBuffer = [];
  let lineCodeBuffer = [];
  let inLineCode = false;
  for (const line of lineCommentLines) {
    if (isLikelyCommentCodeLine(line, inLineCode)) {
      if (!inLineCode) {
        appendProseSegments(lineProseBuffer, headerComments, 'lines');
        lineProseBuffer = [];
        inLineCode = true;
      }
      lineCodeBuffer.push(line);
    } else if (inLineCode) {
      appendCodeSegment(lineCodeBuffer, headerComments);
      lineCodeBuffer = [];
      inLineCode = false;
      lineProseBuffer.push(line);
    } else {
      lineProseBuffer.push(line);
    }
  }
  if (inLineCode) appendCodeSegment(lineCodeBuffer, headerComments);
  else appendProseSegments(lineProseBuffer, headerComments, 'lines');

  // Fallback: try block comments inside the class body when header has nothing.
  if (headerComments.length === 0 && match) {
    const bodyComments = extractBlockComments(content.substring(match.index));
    headerComments.push(...bodyComments);
  }

  addGeneratedParameterNotes();

  // ---- collect inline comments ------------------------------------------------
  // Group consecutive // comment lines so multi-line explanations get joined.

  const allSourceLines = content.split('\n');
  const inlineGroups = [];
  let currentGroup = null;

  // ---- parse @quiz / @answer markers -----------------------------------------
  // Syntax:  // @quiz  <question text>
  //          // @quiz  (OCJP, HARD) <question text>      <- tag and level are optional
  //          // @code  <a line of code shown with the question>   (optional, repeatable)
  //          // @option <one possible answer>          (optional; [correct] marks it)
  //          // @explain <why the right answer is right>          (optional)
  //          // @why <why one of the WRONG options is wrong>      (optional, in order)
  //          // @answer <answer line>   (for a written question, one or more lines)
  // The optional parentheses carry a tag such as OCJP, INTERVIEW or INTERVIEW TRAP
  // and/or a level such as EASY, MEDIUM or HARD. Both are removed from the question
  // text and used to drive the quiz filters.
  //
  // A question with @option lines becomes a real multiple-choice question, which is
  // what an exam actually looks like. @why lines are matched to the wrong options in
  // the order they are written, so the learner is told why their choice was wrong.
  const customQuizzes = [];
  let currentQuiz = null;
  const quizHasContent = (quiz) => Boolean(quiz && (quiz.answers.length > 0 || (quiz.options && quiz.options.length > 0)));
  const closeQuiz = () => {
    if (quizHasContent(currentQuiz)) {
      // Attach the why-notes to the wrong options. A note may name its option
      // ("A: ..." or "B) ..."), which is unambiguous. Any note without a letter is
      // given to the remaining wrong options in the order they were written.
      if (currentQuiz.options && currentQuiz.whyNotes && currentQuiz.whyNotes.length) {
        const wrongIdx = currentQuiz.options.map((o, i) => (o.correct ? -1 : i)).filter(i => i >= 0);
        const leftovers = [];
        currentQuiz.whyNotes.forEach(note => {
          const match = note.match(/^([A-Ha-h])\s*[):\-.]\s*(.+)$/);
          if (match) {
            const optionIndex = match[1].toUpperCase().charCodeAt(0) - 65;
            if (currentQuiz.options[optionIndex]) {
              currentQuiz.options[optionIndex].why = match[2].trim();
              return;
            }
          }
          leftovers.push(note);
        });
        const remaining = wrongIdx.filter(i => !currentQuiz.options[i].why);
        remaining.forEach((optionIndex, n) => {
          if (leftovers[n]) currentQuiz.options[optionIndex].why = leftovers[n];
        });
      }
      customQuizzes.push(currentQuiz);
    }
    currentQuiz = null;
  };
  for (const rawLine of allSourceLines) {
    const trimmed = rawLine.trim();
    if (/^\/\/\s*@quiz\s+/.test(trimmed)) {
      closeQuiz();
      const parsedHeader = parseQuizHeader(trimmed.replace(/^\/\/\s*@quiz\s+/, '').trim());
      currentQuiz = { question: parsedHeader.text, answers: [], quizTag: parsedHeader.tag, quizLevel: parsedHeader.level, options: [], code: [], explain: '', whyNotes: [] };
    } else if (/^\/\/\s*@answer\s+/.test(trimmed) && currentQuiz) {
      currentQuiz.answers.push(trimmed.replace(/^\/\/\s*@answer\s+/, '').trim());
    } else if (/^\/\/\s*@code\s+/.test(trimmed) && currentQuiz) {
      currentQuiz.code.push(trimmed.replace(/^\/\/\s*@code\s+/, '').trim());
    } else if (/^\/\/\s*@option\s+/.test(trimmed) && currentQuiz) {
      let optionText = trimmed.replace(/^\/\/\s*@option\s+/, '').trim();
      const isCorrect = /\[correct\]\s*$/i.test(optionText);
      optionText = optionText.replace(/\s*\[correct\]\s*$/i, '').trim();
      if (optionText) currentQuiz.options.push({ text: optionText, correct: isCorrect });
    } else if (/^\/\/\s*@explain\s+/.test(trimmed) && currentQuiz) {
      const text = trimmed.replace(/^\/\/\s*@explain\s+/, '').trim();
      currentQuiz.explain = currentQuiz.explain ? `${currentQuiz.explain} ${text}` : text;
    } else if (/^\/\/\s*@why\s+/.test(trimmed) && currentQuiz) {
      currentQuiz.whyNotes.push(trimmed.replace(/^\/\/\s*@why\s+/, '').trim());
    } else if (quizHasContent(currentQuiz) && !/^\/\//.test(trimmed) && trimmed !== '') {
      // A non-comment, non-blank line ends the question block.
      closeQuiz();
    }
  }
  closeQuiz();

  // ---- parse @challenge annotations for deep coding problems -----------------
  // Syntax:
  //   // @challenge <title>
  //   // @desc <description line> (one or more)
  //   // @hint <hint text>
  //   // @testcase <input> → <expected output>   (one or more)
  const deepChallenges = [];
  let currentChallenge = null;
  for (const rawLine of allSourceLines) {
    const trimmed2 = rawLine.trim();
    if (/^\/\/\s*@challenge\s+/.test(trimmed2)) {
      if (currentChallenge) deepChallenges.push(currentChallenge);
      currentChallenge = {
        title: trimmed2.replace(/^\/\/\s*@challenge\s+/, '').trim(),
        desc: [],
        hints: [],
        testcases: []
      };
    } else if (/^\/\/\s*@desc\s+/.test(trimmed2) && currentChallenge) {
      currentChallenge.desc.push(trimmed2.replace(/^\/\/\s*@desc\s+/, '').trim());
    } else if (/^\/\/\s*@hint\s+/.test(trimmed2) && currentChallenge) {
      currentChallenge.hints.push(trimmed2.replace(/^\/\/\s*@hint\s+/, '').trim());
    } else if (/^\/\/\s*@testcase\s+/.test(trimmed2) && currentChallenge) {
      currentChallenge.testcases.push(trimmed2.replace(/^\/\/\s*@testcase\s+/, '').trim());
    } else if (currentChallenge && !/^\/\//.test(trimmed2) && trimmed2 !== '') {
      deepChallenges.push(currentChallenge);
      currentChallenge = null;
    }
  }
  if (currentChallenge) deepChallenges.push(currentChallenge);

  // Only comments from INSIDE the class declaration are annotations. Scanning the
  // whole file pulled the header notes in a second time, and with them the table
  // rows, which are stored as structured tables and so were never matched by the
  // de-duplication below, and the trailing comments of the worked examples. That
  // is how a panel titled "Key Takeaways & Annotations" filled up with fragments
  // such as "prints 14, because * binds tighter than +".
  const bodyStartLine = (() => {
    const decl = content.match(/^\s*(?:public\s+|final\s+|abstract\s+)*(?:class|interface|enum|record)\s+\w+/m);
    if (!decl) return 0;
    return content.slice(0, decl.index).split('\n').length - 1;
  })();

  allSourceLines.slice(bodyStartLine).forEach((rawLine, offset) => {
    const lineIdx = offset + bodyStartLine;
    const trimmed = rawLine.trim();

    if (trimmed.startsWith('//')) {
      // Skip @quiz / @answer / @challenge / @desc / @hint / @testcase marker lines
      if (MARKER_AFTER_SLASHES.test(trimmed)) {
        if (currentGroup) { inlineGroups.push(currentGroup); currentGroup = null; }
        return;
      }

      // Standalone // comment line
      let text = trimmed.replace(/^\/\/\s*/, '').replace(/^\/\/\s*/, '').trim();

      // If text still contains '//', handle two sub-cases:
      // (a) URL reference (https://) → skip
      // (b) Commented-out code with embedded explanation → extract explanation after last '//'
      if (text.includes('//')) {
        if (/https?:\/\//.test(text)) {
          // URL reference link — not a useful note bullet
          if (currentGroup) { inlineGroups.push(currentGroup); currentGroup = null; }
          return;
        }
        const slashIdx = text.lastIndexOf('//');
        const explanation = text.slice(slashIdx + 2).trim();
        if (explanation && isMeaningfulLine(explanation) && !isCodeFragment(explanation)) {
          text = explanation;
        } else {
          if (currentGroup) { inlineGroups.push(currentGroup); currentGroup = null; }
          return;
        }
      }

      if (!isMeaningfulLine(text) || isCodeFragment(text) || !isSelfContainedAnnotation(text)) {
        if (currentGroup) { inlineGroups.push(currentGroup); currentGroup = null; }
        return;
      }
      if (currentGroup && lineIdx === currentGroup.endLine + 1) {
        currentGroup.lines.push(text);
        currentGroup.endLine = lineIdx;
      } else {
        if (currentGroup) inlineGroups.push(currentGroup);
        currentGroup = { lines: [text], endLine: lineIdx };
      }
    } else {
      // Code line — check for trailing // comment
      const trailMatch = rawLine.match(/[^/]\/\/\s*(.+)$/);
      if (currentGroup) { inlineGroups.push(currentGroup); currentGroup = null; }
      if (trailMatch) {
        let text = trailMatch[1].trim().replace(/^\/\/\s*/, '').trim();
        if (isMeaningfulLine(text) && !isCodeFragment(text) && isSelfContainedAnnotation(text)) {
          inlineGroups.push({ lines: [text], endLine: lineIdx });
        }
      } else if (trimmed === '') {
        // blank line — group already closed above
      }
      // non-comment, non-blank code line also closes group (already done above)
    }
  });
  if (currentGroup) inlineGroups.push(currentGroup);

  // A trailing comment is only an annotation when it stands on its own. Comments
  // such as "condition", "block of statements" or "Similar to if statement"
  // belong to the line they sit on, and once that line is gone they read as
  // fragments, which is what filled the annotations panel with noise.
  function isSelfContainedAnnotation(text) {
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length < 8) return false;
    // A label such as "Compile Error :- Cannot resolve symbol 'x'" has no
    // lowercase word of its own outside quotes, so it is not a sentence either.
    return /(?:^|\s)[a-z]{4,}/.test(text);
  }

  // Flatten groups, join continuations, deduplicate
  const headerLineSet = new Set(headerComments.flatMap(b => b.lines || []));
  // Table rows are held as structured rows rather than as lines, so they are added
  // to the comparison set explicitly. A table in the header must never reappear
  // here as raw pipe text.
  for (const block of headerComments) {
    if (block.type !== 'table') continue;
    (block.rows || []).forEach(row => headerLineSet.add(row.join(' ')));
  }
  const seenInline = new Set();
  const inlineComments = [];
  for (const group of inlineGroups) {
    const joined = joinContinuationLines(group.lines);
    for (const line of joined) {
        const cleanLine = clarifyNoteLine(fixTrailingComma(line));
        if (!headerLineSet.has(cleanLine) && !seenInline.has(cleanLine)) {
          seenInline.add(cleanLine);
          inlineComments.push(cleanLine);
      }
    }
  }

  // ---- auto-generate overview when truly empty --------------------------------
  if (headerComments.length === 0 && inlineComments.length === 0) {
    const typeMatch2 = content.match(/^\s*(public\s+)?(abstract\s+|final\s+)?(class|interface|record|enum)\s+(\w+)/m);
    const typeKind = typeMatch2 ? typeMatch2[3] : 'class';
    const typeName = typeMatch2 ? typeMatch2[4] : topicName.replace(/\s+/g, '');
    const methodCount = (content.match(/\b(public|private|protected)\s+(static\s+)?[\w<>\[\]]+\s+\w+\s*\([^;]*\)\s*\{/g) || []).length;
    const hasMain = /\bpublic\s+static\s+void\s+main\s*\(/.test(content);
    const contextLabel = subChapter ? `${chapter} → ${subChapter}` : chapter;
    const generated = [
      `This topic belongs to ${contextLabel}.`,
      `Review the ${typeKind} ${typeName} and understand its key responsibilities.`
    ];
    if (methodCount > 0) generated.push(`This example defines ${methodCount} method${methodCount === 1 ? '' : 's'}; trace method behavior step by step.`);
    if (hasMain) generated.push(`Run through the main method flow to understand execution order and output.`);
    headerComments.push({ type: 'generated', lines: generated });
  }

  // The panel is titled "Key Takeaways & Annotations". It leads with the takeaways
  // and gotchas the author wrote in THIS file, and then the annotations found
  // inside its code, so the heading describes what is actually listed.
  const authoredPoints = [];
  for (const raw of content.split('\n')) {
    const marker = raw.trim().match(/^(?:\/\/|\*)?\s*@(takeaway|gotcha)\s+(.+)$/i);
    if (marker) authoredPoints.push(marker[2].trim());
  }
  const anchoredPoints = authoredPoints.length
    ? [...authoredPoints, ...inlineComments.filter(line => !authoredPoints.includes(line))]
    : inlineComments;


  // `isExercise` is emitted so the Revision Bank can read a flag instead of
  // re-deriving the rule in the browser, where it could drift from the pipeline.
  const isExercise = noteRules.isExerciseTopic({ fileName, headerComments });

  return { filePath: relativePath, fileName, topicName, chapter, subChapter, isExercise, headerComments, inlineComments: anchoredPoints, customQuizzes, deepChallenges, code: content };
}

// A parameter note is a bullet that names a parameter and then explains it, such
// as "- text.charAt(int index): index is 0 - based". Those lines belong in the
// Notes view. In the concept revision panel they crowd out the real concepts.
function isParameterNoteLine(line) {
  const raw = String(line || '').trim();
  if (!/^[-*•]\s+/.test(raw)) return false;
  const body = raw.replace(/^[-*•]\s+/, '');
  const colonIdx = body.search(/:-?\s/);
  if (colonIdx === -1) return false;
  const head = body.slice(0, colonIdx);
  return head.includes('(') && /\)$/.test(head);
}

// A key point should state a general rule about the topic. A line that refers to
// the file it came from, or that describes one particular example, is a note
// rather than a key point, so it scores lower and is passed over.
function scoreKeyPoint(line, fileName, isGotcha) {
  const text = String(line || '');
  let score = 0;

  // A rule reads like a rule.
  if (/\b(must|cannot|can't|never|always|only|throws?|compile error|does not compile|is not allowed|is required)\b/i.test(text)) score += 4;
  // A definition explains what something is, which is what a key point is for.
  if (/^[A-Z][\w\s]{2,40}\s+(is|are|means|refers to)\b/.test(text)) score += 3;
  else if (/\b(is a|are a|means|refers to)\b/.test(text)) score += 2;
  // An explanation gives a reason, which is more useful than a bare statement.
  if (/\b(because|so that|which is why|otherwise)\b/i.test(text)) score += 2;

  // A line about this particular file is not a key point for the chapter.
  if (/\b(this file|this example|the code below|in this topic|we will|we'll|here we|the example below|as we saw)\b/i.test(text)) score -= 5;
  if (/^(note|important|tip)\b/i.test(text)) score -= 1;
  // A question is not a key point.
  if (/\?\s*$/.test(text)) score -= 6;
  // An exercise file describes a task, so its lines are weaker key points.
  if (/challenge|problem/i.test(String(fileName || ''))) score -= 3;
  // A gotcha line belongs in the gotchas list, so it is not a concept.
  if (isGotcha) score -= 1;

  // Long enough to explain, short enough to scan.
  const length = text.length;
  if (length >= 60 && length <= 190) score += 2;
  else if (length < 40) score -= 1;
  else if (length > 260) score -= 1;

  return score;
}

// Picks the best candidates while still covering every topic, so one long topic
// cannot fill the whole list. Within a topic the highest score wins, and between
// topics the pick moves round so each contributes in turn.
function pickBestKeyPoints(buckets, limit) {
  const ranked = buckets.map(bucket =>
    bucket.slice().sort((a, b) => b.score - a.score));
  const out = [];
  const seen = new Set();
  const takeFrom = bucket => {
    while (bucket.length) {
      const candidate = bucket.shift();
      const key = candidate.line.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      return candidate;
    }
    return null;
  };
  let round = 0;
  while (out.length < limit) {
    let addedThisRound = false;
    for (const bucket of ranked) {
      if (out.length >= limit) break;
      if (bucket.length === 0) continue;
      const candidate = takeFrom(bucket);
      if (candidate) {
        out.push(candidate.line);
        addedThisRound = true;
      }
    }
    if (!addedThisRound) break;
    round++;
    if (round > 40) break;
  }
  return out;
}

// True when a line is a title or a label rather than a statement that can be
// explained, for example "STRING METHODS AND BEST PRACTICES", "Parameters:-" or
// "Challenge: Build a calculator".
function isTitleOrLabel(line) {
  const text = String(line || '').trim();
  if (!text) return true;
  // A heading: capitalised words with no ordinary sentence text.
  if (!/[a-z]/.test(text) && /[A-Z]/.test(text)) return true;
  // A label ending in a colon, such as "Escape Sequences:-" or "Strong points :".
  if (/^[A-Z][\w\s&'()\/.,-]{0,60}:\s*-?\s*$/.test(text)) return true;
  if (/^(challenge|deep problem|hint|testcase|print|write|create|use|build|example|note|output)\s*[:\-]/i.test(text)) return true;
  if (/^output\b/i.test(text)) return true;
  return false;
}

// True when a line is a parameter note, for example
// "- text.charAt(int index): index is 0-based ..." or the "Parameter notes" heading.
function looksLikeParameterNote(line) {
  const raw = String(line || '').trim();
  if (/^parameter notes\b/i.test(raw)) return true;
  if (/what each (argument|constructor|parameter)/i.test(raw)) return true;
  if (/^[A-Za-z0-9_$].*\bhow to choose it\b/i.test(raw)) return true;
  return isParameterNoteLine(raw);
}

// The single gate every generated quiz option and answer must pass. A title, a
// heading, a code line, a parameter note or a fragment can never be a valid
// answer or a valid wrong option: scraped text like "." or a challenge title is
// what used to mark a learner wrong for a correct answer.
function isUsableQuizStatement(line) {
  const text = String(line || '').trim();
  if (text.length < 25) return false;
  if (isTitleOrLabel(text)) return false;
  if (looksLikeParameterNote(text)) return false;
  // Must read like a sentence, not a code line or a path.
  if (!/[a-z]{2,}/.test(text)) return false;
  if (/[{};]\s*$/.test(text)) return false;
  if (/^(package|import)\s/.test(text)) return false;
  if (/\.java\b/.test(text)) return false;
  if (!/\s/.test(text)) return false;
  if (!isClaimStatement(text)) return false;
  return true;
}

// A true/false choice has to be a CLAIM about the topic that can be judged true or
// false. The notes also contain instructions ("Print the result in the format..."),
// headings ("Core Concepts: Java Architecture & Execution Flow") and note
// fragments ("Practises :- ..."), and those used to appear as choices, which made
// the question unanswerable rather than difficult.
function isClaimStatement(text) {
  const t = String(text || '').trim();
  // The author's ":-" signpost marks a heading or a note line, never a claim.
  if (t.includes(':-')) return false;
  // An instruction tells the reader to do something, so it is not a claim.
  if (/^(print|write|create|build|use|then|add|call|implement|make|declare|output|expected|note|hint|practises|challenge|example|try|run|test|remember|avoid|prefer|choose)\b/i.test(t)) return false;
  if (/\b(practises|expected output|core concepts|best practices|method overview|exception hierarchy)\b/i.test(t)) return false;
  // A label ends with a colon and introduces what follows rather than claiming
  // anything, such as "Java supports several looping statements for repetitive execution:".
  if (/:$/.test(t)) return false;
  // A comparison of two forms of syntax is not a claim, and neither is the text an
  // object prints, such as "StudentRecord[id=1, name=Navneet]".
  if (/\s->\s|\+\+|\.\.\./.test(t)) return false;
  if (/^[\w.$]+\[[^\]]*=[^\]]*\]$/.test(t)) return false;
  // A heading ends without sentence punctuation and capitalises most of its words.
  const words = t.split(/\s+/).filter(Boolean);
  const endsLikeSentence = /[.!?]$/.test(t);
  const capitalised = words.filter(word => /^[A-Z]/.test(word)).length;
  if (!endsLikeSentence && words.length <= 10 && capitalised >= Math.ceil(words.length * 0.6)) return false;
  return true;
}

// ==========================================================================
// Auto-generate QUICK_REVISION_BANK entry from parsed chapter topics
// ==========================================================================
function buildQuickRevisionEntry(chapterName, topics, chapterIsFinished = true) {
  const gotchaKeywords = ['gotcha', 'pitfall', 'warning', 'caution', 'error', 'note', 'remember', 'important', 'trick', 'overflow', 'avoid', 'careful', 'trap'];
  const codeSnippets = [];
  const badges = new Set();
  // Comparison tables keep their grid in the Quick Revision panel, so they are
  // carried across as structured rows instead of flattened "cell — cell" text.
  const tables = [];
  // Concept lines are collected per topic so that every topic contributes,
  // instead of the first topic filling every slot with its parameter notes.
  const conceptsByTopic = [];
  const gotchasByTopic = [];
  // The author can state a chapter's key points himself with @takeaway and
  // @gotcha. Those lines are used ahead of anything the tool derives, because a
  // derived list picks whatever line happens to come first in a file, which is
  // how challenge instructions and bare headings used to end up as "takeaways".
  const authoredTakeaways = [];
  const authoredGotchas = [];

  topics.forEach(topic => {
    for (const raw of String(topic.code || '').split('\n')) {
      const marker = raw.trim().match(/^(?:\/\/|\*)?\s*@(takeaway|gotcha)\s+(.+)$/i);
      if (!marker) continue;
      const text = marker[2].trim();
      if (marker[1].toLowerCase() === 'takeaway') authoredTakeaways.push(text);
      else authoredGotchas.push(text);
    }

    const conceptLines = [];
    const gotchaLines = [];

    topic.headerComments.forEach(block => {
      if (block.type === 'code' || block.type === 'generated' || block.type === 'generated-parameters') return;
      if (block.type === 'table' && (block.rows || []).length > 0) {
        if (tables.length < 3) {
          tables.push({
            headers: (block.headers || []).slice(),
            rows: (block.rows || []).map(row => row.slice())
          });
        }
        return;
      }
      if (!Array.isArray(block.lines)) return;
      // Skip a whole parameter-notes block. It explains arguments, not concepts.
      if (block.lines.length && /parameter notes/i.test(block.lines[0])) return;
      block.lines.forEach(rawLine => {
        // A bullet is presentation, not part of the statement.
        const line = String(rawLine || '').replace(/^[-*•]\s+/, '').trim();
        if (!line || line.length < 10) return;
        if (isParameterNoteLine(line)) return;
        // A bare heading such as "STRING METHODS AND BEST PRACTICES" is a title,
        // not a concept, so it is not revision material.
        if (!/[a-z]/.test(line)) return;
        // A line ending in ":-" or ":" introduces what follows rather than stating
        // a concept, so "Types of loop in Java :-" must never become a key point.
        if (/[:-]\s*$/.test(line)) return;
        // The same rule the quiz options use: an instruction, a heading or a note
        // fragment is not a statement about the topic. This is what stops a chapter
        // that has no authored @takeaway from filling the panel with "Print the
        // result in the format..." and other instructions from its challenges.
        if (!isClaimStatement(line)) return;
        // Each candidate keeps its score, so the best lines can be chosen rather
        // than whichever one happened to come first in the file.
        const lowerLine = line.toLowerCase();
        const isGotcha = gotchaKeywords.some(kw => lowerLine.includes(kw));
        const entry = { line, score: scoreKeyPoint(line, topic.fileName, isGotcha) };
        if (isGotcha) gotchaLines.push(entry);
        else conceptLines.push(entry);
      });
    });

    conceptsByTopic.push(conceptLines);
    gotchasByTopic.push(gotchaLines);

    // Badges: the syntax and API the chapter teaches, taken from the concepts it
    // covers. This replaces scraping method names from the source, which put
    // `main` in all 15 chapters and filled the rest with the author's own helpers.
    for (const conceptId of conceptCatalogue.conceptsForChapter(chapterName, [topic])) {
      for (const badge of conceptCatalogue.CONCEPT_BADGES[conceptId] || []) badges.add(badge);
    }

    // A syntax snippet should show the chapter's CENTRAL CONSTRUCT, not the class
    // declaration. Taking the first code block gave every chapter
    // "public class X { public static void main(String[] args) {" which is
    // boilerplate rather than a syntax reference.
    //
    // Candidates are scored by how much of the chapter's own syntax they show, so
    // a `switch` snippet wins in the switch chapter and a `for` snippet wins in
    // the loops chapter.
    for (const block of topic.headerComments || []) {
      if (block.type !== 'code' || !block.code) continue;
      const text = String(block.code);
      if (/^\s*(public\s+)?class\s+\w+\s*\{?\s*$/.test(text.trim())) continue;   // a bare class header
      // A block that OPENS with a class declaration is mostly scaffolding, so it
      // is penalised rather than excluded: it is still better than nothing, but a
      // real statement should win.
      const opensWithClass = /^\s*(public\s+)?class\s+\w+/.test(text);
      let score = opensWithClass ? -3 : 0;
      for (const badge of badges) {
        const escaped = String(badge).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (new RegExp(escaped).test(text)) score += 2;
      }
      // Prefer something with a statement in it.
      if (/;/.test(text)) score += 1;
      if (text.split('\n').length >= 3) score += 1;
      codeSnippets.push({ code: text.trim(), score });
    }
  });

  // The best-scoring snippet across the chapter, or nothing at all rather than
  // boilerplate when no block shows anything distinctive.
  codeSnippets.sort((a, b) => b.score - a.score);

  // Authored lines win. Only a chapter with none of its own falls back to the
  // derived pick. The caps are generous enough that a chapter writing its own
  // points does not silently lose the last few.
  //
  // For a chapter that is STILL BEING WRITTEN there is no derived fallback at all:
  // the panel shows only what the author wrote, because a derived point in a
  // half-written chapter is a guess about a moving target.
  const takeaways = authoredTakeaways.length
    ? authoredTakeaways.slice(0, 12)
    : (chapterIsFinished ? pickBestKeyPoints(conceptsByTopic, 8) : []);
  const gotchas = authoredGotchas.length
    ? authoredGotchas.slice(0, 10)
    : (chapterIsFinished ? pickBestKeyPoints(gotchasByTopic, 6) : []);

  // A FINISHED chapter with no key points says so, as a prompt to the author. A chapter
  // still being written gets NOTHING - not even a prompt.
  //
  // It used to get a prompt, and that was wrong twice over. The rule is that nothing
  // exists for the chapter being written, and the prompt's advice was "add // @takeaway
  // lines", which invites tool markers into a chapter the author has not finished - the
  // exact habit that put 13 quizzes and a "Composition Deep Problem" into Chapter 15. The
  // dashboard explains the empty panel instead, from the `inProgress` flag below, so the
  // explanation lives in the interface rather than in the data.
  if (!takeaways.length && chapterIsFinished) {
    takeaways.push(`No key points are written for ${chapterName} yet. Add // @takeaway lines to state them, and they will appear here instead of this note.`);
  }

  // The snippet is the highest-scoring block, or nothing rather than boilerplate.
  // A chapter whose notes contain no distinctive code shows no syntax panel at all,
  // which is more honest than showing a class declaration.
  //
  // For a chapter still being written, neither the snippet nor the badges are produced.
  // Both are the tool's own output - the snippet is chosen by a scoring rule and the
  // badges are derived from the concepts - and the panel's job is revising finished
  // material. A half-written chapter would show a summary that is incomplete by
  // definition and changes every time the notes do. Only the author's own @takeaway and
  // @gotcha lines appear, which is what he asked for.
  const syntax = chapterIsFinished && codeSnippets[0] && codeSnippets[0].score > 0
    ? codeSnippets[0].code
    : '';
  const badgeList = chapterIsFinished ? Array.from(badges).slice(0, 5) : [];

  // `inProgress` is a fact about the chapter, not content of the tool's, so the interface
  // can explain an empty panel without any text being stored as revision material. It is
  // deliberately not in the fail set of check-in-progress.js for that reason.
  return { takeaways, gotchas, syntax, badges: badgeList, tables, inProgress: !chapterIsFinished };
}

// ==========================================================================
// Helper: Stable question ID generator
// ==========================================================================
function makeQid(chapter, topic, type, index) {
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  return `${slug(chapter)}_${slug(topic)}_${type}_${index}`;
}

// Deterministic string hash, so generated content is reproducible between runs.
function stableHash(value) {
  const text = String(value);
  let result = 2166136261;
  for (let i = 0; i < text.length; i++) {
    result ^= text.charCodeAt(i);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function shuffleArr(arr) {
  // Generated artifacts must be reproducible. Runtime quiz selection is still
  // randomized in the dashboard; only build-time option ordering is fixed.
  return arr.slice().sort((a, b) => {
    const textA = String(a);
    const textB = String(b);
    return stableHash(textA) - stableHash(textB) || textA.localeCompare(textB);
  });
}

// Puts the answer options in a stable but non-obvious order. Without this, every
// authored answer sat in position A, so a learner could score 100% by always
// picking the first option.
function orderOptionsForQuestion(options, seed) {
  return options
    .map((option, index) => ({ option, index }))
    .sort((a, b) => {
      const hashA = stableHash(`${seed}|${a.option.text}`);
      const hashB = stableHash(`${seed}|${b.option.text}`);
      return hashA - hashB || a.index - b.index;
    })
    .map(entry => entry.option);
}

// Helper: create a simple slug for qid
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// ==========================================================================
// The hand-researched OCJP bank
// ==========================================================================
// Questions generated from the notes test what the author wrote. They cannot be
// exam-grade, because a generator can only reformat his sentences. An exam
// question needs a distractor that is wrong for a reason an examiner would test,
// so those are researched and written by hand in data/ocjp-bank.js and merged in
// here. They carry kind 'bank' so the ledger can tell them apart from both the
// generated questions and the ones the author wrote in his own notes.
function buildBankQuestions(chapterName, topics, conceptsByPath) {
  const questions = [];
  // A bank question is written for a chapter, but it still has to point at a real
  // topic file so the audit can trace it and the Revision Bank can group it. The
  // topic is chosen by concept overlap, which is structural: the question tagged
  // `constructors` lands on the chapter's constructors topic. No overlap falls
  // back to the first topic, so a question is never dropped.
  const topicFor = (entry) => {
    const wanted = new Set(entry.concepts || []);
    let best = null;
    let bestScore = 0;
    for (const topic of topics || []) {
      const own = conceptsByPath.get(topic.filePath) || [];
      const score = own.filter(id => wanted.has(id)).length;
      if (score > bestScore) { bestScore = score; best = topic; }
    }
    return best || (topics || [])[0] || null;
  };

  for (const entry of OCJP_BANK) {
    if (entry.chapter !== chapterName) continue;
    const correct = entry.options.filter(o => o.correct);
    if (correct.length !== 1) {
      console.warn(`   ⚠️  OCJP bank entry "${entry.id}" has ${correct.length} correct options and was skipped.`);
      continue;
    }
    const topic = topicFor(entry);
    // Options are reordered so the answer is not always first, exactly as for the
    // questions authored in the notes. The "why this is wrong" note travels with
    // its option.
    const ordered = orderOptionsForQuestion(entry.options, entry.id);
    const answerIndex = ordered.findIndex(o => o.correct);
    const whyByOption = {};
    ordered.forEach((o, i) => { if (!o.correct && o.why) whyByOption[i] = o.why; });

    questions.push({
      type: 'scq',
      kind: 'bank',
      qid: makeQid(chapterName, entry.topic || entry.concepts.join('-'), 'bank', entry.id),
      difficulty: entry.difficulty || 'medium',
      chapter: chapterName,
      topic: entry.topic || (topic && topic.topicName) || (entry.concepts || []).join(', '),
      topicPath: topic ? topic.filePath : undefined,
      tags: ['ocjp', ...(entry.concepts || [])],
      concepts: entry.concepts || [],
      question: entry.question,
      code: entry.code || undefined,
      options: ordered.map(o => o.text),
      answer: answerIndex,
      whyByOption: Object.keys(whyByOption).length ? whyByOption : undefined,
      explanation: entry.explanation,
      source: 'ocjp-bank'
    });
  }
  return questions;
}

// ==========================================================================
// Quiz levels and tags
// ==========================================================================
// A question's level is decided by WHAT THE QUESTION ASKS. It is never derived
// from the position of its topic inside the chapter, because that produced
// meaningless levels (first topic = easy, last topic = hard).
const KIND_LEVELS = {
  'mask-keyword': 'easy',     // recognise the right keyword in a code line
  'concept': 'easy',          // recognise the correct description of a topic
  'fill-blank': 'easy',       // recall a word from the notes
  'return-type': 'easy',      // read a method signature
  'class-relation': 'medium', // read the class declaration
  'true-false': 'medium',     // multi-select over mixed statements
  'predict': 'medium',        // trace a small snippet
  'codefill': 'medium',       // recall a keyword in a code context
  'explain': 'medium',        // open written explanation
  'gotcha': 'hard',           // pick the trap
  'ocjp-tricky': 'hard'       // exam style trap
};

function levelForKind(kind) {
  return KIND_LEVELS[kind] || 'medium';
}

// Accepts EASY / MEDIUM / HARD and the common synonyms.
function normalizeLevel(value) {
  const v = String(value || '').trim().toLowerCase();
  if (v === 'easy' || v === 'e') return 'easy';
  if (v === 'medium' || v === 'm') return 'medium';
  if (v === 'hard' || v === 'difficult' || v === 'h' || v === 'd') return 'hard';
  return null;
}

// Level for an authored @quiz marker.
//
// The author's own level always wins, and a trap is always hard. Everything else
// used to fall to medium, which made 643 of 760 questions medium and left almost
// nothing easy, so a beginner had no way in. The level is now read from what the
// question actually asks:
//
//   something that goes wrong   -> hard   (a compile error, an exception, a trap)
//   code to trace               -> medium (it has to be read and run in the head)
//   a "why" question            -> medium (it asks for reasoning, not recall)
//   recognising a fact          -> easy   (the fact IS the concept, which the
//                                          anti-memory rule allows)
function levelForCustomQuiz(quiz) {
  if (quiz.quizLevel) return quiz.quizLevel;
  const tag = String(quiz.quizTag || '');
  if (/trap/i.test(tag)) return 'hard';

  const text = String(quiz.question || '');
  const options = (quiz.options || []).map(o => String(o && o.text ? o.text : o)).join(' ');
  const hasCode = Array.isArray(quiz.code) && quiz.code.length > 0;

  // A question about something failing is a trap by nature.
  if (/\b(does not compile|will not compile|compile error|compile-time error|does not run|runtime error|exception|stack trace|throws|fails?)\b/i.test(`${text} ${options}`)) {
    return 'hard';
  }

  // Tracing code is medium: the answer is not stated, it has to be worked out.
  if (hasCode) return 'medium';

  // Asking why wants a reason, not a fact.
  if (/^\s*why\b/i.test(text)) return 'medium';

  // Recognising a fact is recall, and recall of a definition is easy.
  if (/^\s*(what is|what are|what does|what do|which statement|which of these|which one|which single|what actually)\b/i.test(text)) return 'easy';
  if (/\b(correctly describes|is the difference between|refers to|means)\b/i.test(text)) return 'easy';

  return 'medium';
}

// Words that may start a @quiz tag, so ordinary parentheses in a question
// text are never mistaken for a tag.
const QUIZ_TAG_WORDS = ['OCJP', 'INTERVIEW', 'EXAM', 'TRAP', 'SCJP'];

// Splits "(OCJP, HARD) What is the result?" into { tag, level, text }.
function parseQuizHeader(raw) {
  const match = String(raw || '').match(/^\(([^)]*)\)\s*(.*)$/);
  if (!match) return { tag: null, level: null, text: String(raw || '').trim() };
  const inside = match[1];
  const rest = (match[2] || '').trim();
  const looksLikeTag = QUIZ_TAG_WORDS.some(w => new RegExp(`\\b${w}\\b`, 'i').test(inside));
  if (!/\b(easy|medium|hard|difficult)\b/i.test(inside) && !looksLikeTag) {
    return { tag: null, level: null, text: String(raw || '').trim() };
  }
  let tag = null;
  let level = null;
  inside.split(',').forEach(part => {
    const lv = normalizeLevel(part);
    if (lv) { level = lv; return; }
    const t = part.trim();
    if (t) tag = tag ? `${tag}, ${t}` : t;
  });
  return { tag, level, text: rest };
}

// Word-boundary chapter matching. Plain substring matching is dangerous here:
// "looping" contains "oop", which is how the Looping chapters used to receive
// the whole OOP exam block.
function labelHas(label, word) {
  return new RegExp(`\\b${word}(s|es|ing|ance|ed)?\\b`).test(label);
}

// ==========================================================================
// Tag assignment for quiz questions
// ==========================================================================
function assignTags(q) {
  const tags = [...(q.tags || [])];
  const kind = q.kind || '';
  if (q.type === 'interview') tags.push('interview');
  if (q.type === 'predict' || kind === 'predict') tags.push('predict');
  if (q.type === 'codefill' || kind === 'codefill') tags.push('codefill');
  if (q.type === 'mcq') tags.push('concept');
  if (['mask-keyword', 'concept', 'fill-blank', 'return-type', 'class-relation', 'true-false'].includes(kind)) tags.push('concept');
  if (kind === 'gotcha' || kind === 'ocjp-tricky') tags.push('tricky');
  if (['concept-scq', 'true-false-mcq', 'fill-blank'].includes(q.type)) tags.push('concept');
  if (q.type === 'gotcha-scq') tags.push('tricky');
  const qText = (q.question || '').toLowerCase();
  if (qText.includes('pitfall') || qText.includes('gotcha') || qText.includes('trap') ||
      qText.includes('caution') || qText.includes('warning')) tags.push('tricky');
  if (qText.includes('ocjp')) tags.push('ocjp');
  q.tags = [...new Set(tags)];
  return q;
}

// ==========================================================================
// OCJP-style tricky questions per chapter type
// ==========================================================================
// Each OCJP template belongs to a kind of topic, so it can be revised topic by
// topic instead of only chapter by chapter. The key is matched against the end of
// the question id, for example "...-string-pool-1" -> "string-pool".
const OCJP_TOPIC_HINTS = {
  'string-pool': ['string'],
  'string-concat': ['string'],
  'int-cast': ['operator', 'primitive'],
  'prefix-postfix': ['operator'],
  'short-circuit': ['operator'],
  'polymorphism': ['inherit', 'overrid', 'oops'],
  'constructor-chain': ['constructor'],
  'override-overload': ['overrid', 'overload'],
  'final-keyword': ['inherit', 'class'],
  'static-hiding': ['static', 'class'],
  'covariant-return': ['overrid', 'inherit'],
  'access-modifier-override': ['overrid', 'encapsul'],
  'finally': ['exception'],
  'checked-unchecked': ['exception'],
  'switch-fallthrough': ['switch', 'if'],
  'for-scope': ['for', 'loop', 'while'],
  'pass-by-value': ['method'],
  'overload-resolution': ['overload', 'method']
};

// Finds the topics an OCJP question belongs to. The best scoring topics are
// returned, so several questions of the same kind can be spread across the
// related topics of a chapter instead of all landing on one.
function ocjpCandidateTopics(qid, hintKeys, topics) {
  const bare = String(qid || '').replace(/-\d+$/, '');
  const key = hintKeys.find(k => bare.endsWith('-' + k));
  if (!key) return [];
  const hints = OCJP_TOPIC_HINTS[key];
  const scored = topics.map(topic => {
    const headings = `${topic.topicName} ${topic.fileName} ${topic.subChapter || ''}`.toLowerCase();
    const notes = (topic.headerComments || []).flatMap(b => b.lines || []).join(' ').toLowerCase();
    let score = 0;
    hints.forEach(hint => {
      if (headings.includes(hint)) score += 3;
      else if (notes.includes(hint)) score += 1;
    });
    return { topic, score };
  }).filter(entry => entry.score > 0);
  if (scored.length === 0) return [];
  const best = Math.max(...scored.map(entry => entry.score));
  return scored.filter(entry => entry.score === best).map(entry => entry.topic);
}

function buildOCJPQuestions(chapterName, topics) {
  const label = chapterName.toLowerCase();
  const questions = [];

  // ── String / Primitives ──────────────────────────────────────────────────
  if (labelHas(label, 'primitive') || labelHas(label, 'string')) {
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-string-pool-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output of this code? (OCJP)',
      code: 'String a = "hello";\nString b = "hello";\nSystem.out.println(a == b);',
      answer: ['true'],
      explanation: 'String literals are stored in the String Pool. "hello" is the same pooled reference, so == returns true. This is a classic OCJP trap — always use .equals() for value comparison.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-string-pool-2`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output of this code? (OCJP)',
      code: 'String a = new String("hello");\nString b = new String("hello");\nSystem.out.println(a == b);',
      answer: ['false'],
      explanation: 'new String() always creates a new heap object. a and b point to different objects, so == compares references and returns false. Always use .equals() to compare String values.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-string-concat-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'String s = "Java";\ns.concat(" is fun");\nSystem.out.println(s);',
      answer: ['Java'],
      explanation: 'Strings are immutable. concat() returns a NEW String but does not modify s. Since the return value is ignored, s still holds "Java". This is a top OCJP gotcha.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-int-cast-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'int x = 5;\ndouble y = x / 2;\nSystem.out.println(y);',
      answer: ['2.0'],
      explanation: 'x and 2 are both int — integer division gives 2 (truncated). Then 2 is widened to 2.0 when assigned to double. To get 2.5, you need (double)x / 2.'
    });
  }

  // ── Operators ───────────────────────────────────────────────────────────
  if (labelHas(label, 'operator')) {
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-prefix-postfix-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'int a = 5;\nint b = a++ + ++a;\nSystem.out.println(b);',
      answer: ['12'],
      explanation: 'a++ uses a (5) then increments to 6. ++a increments a to 7 then uses 7. So b = 5 + 7 = 12. Post-increment vs pre-increment is a classic OCJP trap.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-short-circuit-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'int x = 0;\nboolean r = (x != 0) && (10/x > 1);\nSystem.out.println(r);',
      answer: ['false'],
      explanation: 'Short-circuit evaluation: since (x != 0) is false, the right side (10/x) is never evaluated — no ArithmeticException. The result is false. This is a key OCJP concept.'
    });
  }

  // ── OOP / Inheritance ───────────────────────────────────────────────────
  // These must match whole words. "looping" contains "oop", which is why the
  // looping chapters used to be given the whole OOP exam block.
  // Chapter 13 is the OOP chapter. Matching on bare "class" also caught Chapter 10
  // ("Class Object Static And Instance Fields"), which then received the same exam
  // block as Chapter 13. The block belongs to the inheritance chapter only.
  if (labelHas(label, 'oop') || labelHas(label, 'inherit') || labelHas(label, 'override') || labelHas(label, 'overload')) {
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-polymorphism-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'class Animal {\n  String type = "Animal";\n  void speak() { System.out.println("Animal"); }\n}\nclass Dog extends Animal {\n  String type = "Dog";\n  void speak() { System.out.println("Dog"); }\n}\nAnimal a = new Dog();\nSystem.out.println(a.type);\na.speak();',
      answer: ['Animal\nDog'],
      explanation: 'Method calls are resolved at runtime (dynamic dispatch) → a.speak() calls Dog.speak(). But field access is resolved at compile time (static binding) → a.type uses Animal\'s type. This is a critical OCJP polymorphism trap.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-constructor-chain-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'class A {\n  A() { System.out.println("A"); }\n}\nclass B extends A {\n  B() { System.out.println("B"); }\n}\nclass C extends B {\n  C() { System.out.println("C"); }\n}\nnew C();',
      answer: ['A\nB\nC'],
      explanation: 'Constructor chaining: the JVM always calls super() implicitly at the top of each constructor. So A() runs, then B(), then C(). Output is A, B, C — top to bottom in the hierarchy.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-override-overload-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'Which is true about method overriding in Java? (OCJP)',
      options: [
        'Overriding is resolved at compile time based on the reference type',
        'Overriding is resolved at runtime based on the actual object type (dynamic dispatch)',
        'A private method can be overridden in a subclass',
        'A static method can be overridden to behave polymorphically'
      ],
      answer: 1,
      explanation: 'Overriding is resolved at RUNTIME — the JVM looks at the actual object, not the reference type. Private methods are not inherited and cannot be overridden. Static methods are hidden, not overridden.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-final-keyword-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What does marking a method as final mean in Java? (OCJP)',
      options: [
        'The method cannot be called more than once',
        'The method cannot be overridden by any subclass',
        'The method must return a non-null value',
        'The method is automatically made static'
      ],
      answer: 1,
      explanation: 'final on a method means no subclass can override it. final on a class means no class can extend it. final on a variable means it can only be assigned once.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-static-hiding-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What happens when you define a static method with the same name in a subclass? (OCJP)',
      options: [
        'It overrides the parent static method — dynamic dispatch applies',
        'It hides the parent static method — method called depends on reference type, not object type',
        'It causes a compile-time error',
        'It calls both parent and child static methods'
      ],
      answer: 1,
      explanation: 'Static methods are HIDDEN, not overridden. With hiding, which method is called depends on the REFERENCE type at compile time. With overriding, it depends on the OBJECT type at runtime. @Override on a static method causes a compile error.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-covariant-return-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'Which return type change is VALID when overriding a method that returns Animal? (OCJP)',
      options: [
        'Return Object (supertype of Animal)',
        'Return Dog (subtype of Animal — covariant return)',
        'Return String (unrelated type)',
        'Return void'
      ],
      answer: 1,
      explanation: 'Covariant return type (Java 5+): the overriding method can return a subtype of the declared return type. Dog IS-A Animal, so returning Dog is valid. Returning a supertype (Object) or unrelated type is NOT valid.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-access-modifier-override-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'Parent has: protected void show(). Which access modifier is INVALID in the overriding method? (OCJP)',
      options: [
        'public void show() — more accessible, allowed',
        'protected void show() — same, allowed',
        'private void show() — more restrictive, NOT allowed',
        'default (package) void show() — less accessible than protected in some cases'
      ],
      answer: 2,
      explanation: 'Overriding cannot make the method MORE restrictive. protected → private is not allowed (private is more restrictive). protected → public is fine (more accessible). This is rule 3 of method overriding.'
    });
  }

  // ── Exception Handling ──────────────────────────────────────────────────
  if (labelHas(label, 'exception')) {
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-finally-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'try {\n  System.out.println("try");\n  return;\n} finally {\n  System.out.println("finally");\n}',
      answer: ['try\nfinally'],
      explanation: 'finally ALWAYS executes — even after a return statement. The method only actually returns after finally completes. This is a top OCJP gotcha.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-checked-unchecked-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'Which of these is an UNCHECKED exception in Java? (OCJP)',
      options: [
        'IOException',
        'SQLException',
        'NullPointerException',
        'FileNotFoundException'
      ],
      answer: 2,
      explanation: 'NullPointerException extends RuntimeException → unchecked (compiler does not force you to handle it). IOException, SQLException, FileNotFoundException extend Exception directly → checked (must be caught or declared).'
    });
  }

  // ── Switch / Control Flow ───────────────────────────────────────────────
  if (labelHas(label, 'switch') || labelHas(label, 'statement') || labelHas(label, 'if')) {
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-switch-fallthrough-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'int x = 2;\nswitch(x) {\n  case 1: System.out.println("one");\n  case 2: System.out.println("two");\n  case 3: System.out.println("three");\n  default: System.out.println("default");\n}',
      answer: ['two\nthree\ndefault'],
      explanation: 'Classic switch fall-through! Without break statements, execution falls through to every case below the match. case 2 matches, then falls to case 3, then default. Always add break unless fall-through is intentional.'
    });
  }

  // ── Loops ────────────────────────────────────────────────────────────────
  // This question is about for loops, so it belongs to the for-loop chapter. Both
  // looping chapters contain the word "looping", so the while chapter is excluded
  // explicitly to stop the same question appearing in two chapters.
  if (labelHas(label, 'loop') && !labelHas(label, 'while')) {
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-for-scope-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'Which statement about for-loop variable scope is correct? (OCJP)',
      options: [
        'The loop variable (int i) is accessible after the loop ends',
        'The loop variable (int i) declared in for() is scoped only to the loop block',
        'You can reuse the same variable name in two nested for-loops',
        'The loop variable persists between method calls'
      ],
      answer: 1,
      explanation: 'A variable declared in the for-loop initializer (for(int i=0;...)) is scoped to that loop only. It cannot be accessed after the loop. You CANNOT reuse the same name in an inner nested loop — that would shadow it and cause a compile error.'
    });
  }

  // ── Methods ──────────────────────────────────────────────────────────────
  if (labelHas(label, 'method')) {
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-pass-by-value-1`,
      type: 'predict', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'What is the output? (OCJP)',
      code: 'static void change(int x) { x = 99; }\nint a = 5;\nchange(a);\nSystem.out.println(a);',
      answer: ['5'],
      explanation: 'Java is ALWAYS pass-by-value. The method gets a copy of a. Changing x inside the method has no effect on a. This is one of the most common OCJP traps.'
    });
    questions.push({
      qid: `ocjp-${slugify(chapterName)}-overload-resolution-1`,
      type: 'scq', difficulty: 'hard', chapter: chapterName, topic: 'OCJP Tricky',
      question: 'When does method overloading resolution happen in Java? (OCJP)',
      options: [
        'At runtime, based on the actual argument type',
        'At compile time, based on the declared (reference) type of arguments',
        'At runtime, based on the method name only',
        'At compile time, based on return type'
      ],
      answer: 1,
      explanation: 'Overloading is resolved at COMPILE time based on the reference type of arguments (not actual type). Overriding is resolved at RUNTIME. This distinction is essential for OCJP.'
    });
  }

  const hintKeys = Object.keys(OCJP_TOPIC_HINTS).sort((a, b) => b.length - a.length);
  const groups = new Map();
  questions.forEach(q => {
    const candidates = ocjpCandidateTopics(q.qid, hintKeys, topics);
    if (candidates.length === 0) return;
    const key = q.qid.replace(/-\d+$/, '').split('-').slice(-1)[0];
    const groupKey = candidates.map(t => t.filePath).join('|');
    if (!groups.has(groupKey)) groups.set(groupKey, { candidates, questions: [] });
    groups.get(groupKey).questions.push(q);
  });
  groups.forEach(({ candidates, questions: groupQuestions }) => {
    groupQuestions.forEach((q, index) => {
      const target = candidates[index % candidates.length];
      q.topicPath = target.filePath;
    });
  });

  return questions.map(q => {
    q.kind = q.kind || 'ocjp-tricky';
    if (!q.tags) q.tags = ['ocjp', 'tricky'];
    else { q.tags.push('ocjp', 'tricky'); }
    return assignTags(q);
  });
}

// ==========================================================================
// Auto-generate starter QUESTIONS_BANK entries from current chapter topics
// ==========================================================================
function buildStarterQuestions(chapterName, topics) {
  const chapterLabel = chapterName.replace(/Chapter \d+: /, '');
  const questions = [];

  // Pre-collect all header comment lines per topic (index == topics array index).
  // Table rows are excluded: their flattened "cell — cell" form is display text,
  // not a sentence, so it must not become a quiz option or distractor.
  const allTopicNoteLines = topics.map(t => t.headerComments
    .filter(block => block.type !== 'table')
    .flatMap(block => block.lines || [])
    .filter(Boolean));

  // Several sub-chapters contain a file with the same name, for example Main.java
  // and Dog.java. Those topics then share one label, which produced questions such
  // as "Explain the main ideas in Main." six times in one chapter. Where a label
  // repeats inside the chapter, the sub-chapter is added to keep it unambiguous.
  const labelCounts = new Map();
  topics.forEach(topic => {
    const base = topic.topicName || topic.fileName.replace('.java', '');
    labelCounts.set(base, (labelCounts.get(base) || 0) + 1);
  });
  const uniqueLabel = (topic) => {
    const base = topic.topicName || topic.fileName.replace('.java', '');
    if ((labelCounts.get(base) || 0) <= 1) return base;
    return topic.subChapter ? `${base} (${topic.subChapter})` : `${base} (${topic.fileName.replace('.java', '')})`;
  };

  topics.forEach((topic, topicIndex) => {
    const topicLabel = uniqueLabel(topic);
    const topicIdentity = topic.filePath || topic.fileName || topicLabel;
    const addQuestion = (question) => {
      question.topicPath = topicIdentity;
      question.qid = question.qid || makeQid(chapterName, topicIdentity, question.type, questions.length);
      questions.push(question);
    };
    // Levels come from the question kind (see KIND_LEVELS), never from the
    // topic's position in the chapter.
    const lines = topic.code.split('\n');
    // A bare heading such as "STRING METHODS AND BEST PRACTICES" is a title, not a
    // statement, so it must never become a quiz option or a blank to fill in.
    const isHeadingLine = (line) => {
      const text = String(line || '').trim();
      return text.length > 0 && !/[a-z]/.test(text) && /[A-Z]/.test(text);
    };
    const topicNotes = (allTopicNoteLines[topicIndex] || []).filter(line => !isHeadingLine(line));

    // Predict: a genuine code-tracing exercise.
    //
    // This used to accept a plain println("text"), where the answer is already
    // visible in the code, so the question tested nothing. It now accepts only a
    // concatenation of literals and numbers, and works out the real output, so the
    // learner has to apply the left-to-right rule to get it right.
    let printLine = null;
    let printAnswer = null;
    let inBlockComment = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!inBlockComment && (trimmed.startsWith('/*') || trimmed.includes('/*'))) inBlockComment = true;
      if (inBlockComment) {
        if (trimmed.endsWith('*/') || trimmed.includes('*/')) inBlockComment = false;
        continue;
      }
      if (trimmed.startsWith('//') || trimmed.startsWith('*')) continue;
      const concatMatch = trimmed.match(/System\.out\.println\(\s*((?:"[^"]*"|-?\d+(?:\.\d+)?)(?:\s*\+\s*(?:"[^"]*"|-?\d+(?:\.\d+)?)){1,})\s*\)/);
      if (!concatMatch) continue;
      // Work out what Java would print: each quoted part contributes its text, and
      // each number contributes its own digits, because the first quoted part makes
      // every later + a concatenation.
      const parts = concatMatch[1].split(/\s*\+\s*/);
      const hasText = parts.some(part => /^"/.test(part));
      if (!hasText) continue;                       // pure arithmetic is a different question
      const rendered = parts.map(part => /^"/.test(part)
        ? part.replace(/^"|"$/g, '')
        : part).join('');
      if (!rendered.trim()) continue;
      printLine = trimmed;
      printAnswer = rendered;
      break;
    }

    if (printLine && printAnswer) {
      addQuestion({
        type: 'predict',
        kind: 'predict',
        qid: makeQid(chapterName, topicIdentity, 'predict', 3),
        difficulty: levelForKind('predict'),
        chapter: chapterName,
        topic: topicLabel,
        question: `What does this code print?`,
        code: printLine,
        answer: [printAnswer],
        explanation: `+ is evaluated left to right. The first part is text, so every following + joins rather than adds, which gives ${printAnswer}.`
      });
    }

    // ---- @quiz / @answer custom questions from Java source comments -----------
    (topic.customQuizzes || []).forEach((q, customIndex) => {
      const qidBase = makeQid(chapterName, topicIdentity, 'custom', `${customIndex}-${slugify(q.question).slice(0, 40)}`);
      const tagList = [
        ...(q.quizTag && /ocjp/i.test(q.quizTag) ? ['ocjp'] : []),
        ...(q.quizTag && /trap/i.test(q.quizTag) ? ['tricky'] : []),
        ...(q.quizTag && /interview|exam/i.test(q.quizTag) ? ['interview'] : []),
        ...(q.quizTag && /concept/i.test(q.quizTag) ? ['concept'] : [])
      ];

      // A question written with @option lines becomes a real multiple-choice
      // question, which is what an exam actually looks like.
      if (Array.isArray(q.options) && q.options.length >= 2) {
        // Reorder the options so the correct answer is not always first. The
        // correct flag and the "why this is wrong" note travel with their option.
        const orderedOptions = orderOptionsForQuestion(q.options, `${topicIdentity}|${q.question}`);
        const answerIndices = orderedOptions.map((o, i) => (o.correct ? i : -1)).filter(i => i >= 0);
        if (answerIndices.length > 0) {
          const isMulti = answerIndices.length > 1;
          const whyByOption = {};
          orderedOptions.forEach((o, i) => { if (!o.correct && o.why) whyByOption[i] = o.why; });
          addQuestion({
            type: isMulti ? 'mcq' : 'scq',
            kind: 'custom',
            qid: qidBase,
            difficulty: levelForCustomQuiz(q),
            chapter: chapterName,
            topic: topicLabel,
            tags: tagList,
            question: q.question,
            code: q.code && q.code.length ? q.code.join('\n') : undefined,
            options: orderedOptions.map(o => o.text),
            answer: isMulti ? answerIndices : answerIndices[0],
            whyByOption: Object.keys(whyByOption).length ? whyByOption : undefined,
            explanation: q.explain || (q.answers || []).join(' ') || `Written in the source file with the @quiz marker.`
          });
          return;
        }
      }

      // Otherwise it stays a written question, exactly as before.
      addQuestion({
        type: 'interview',
        kind: 'custom',
        qid: qidBase,
        difficulty: levelForCustomQuiz(q),
        chapter: chapterName,
        topic: topicLabel,
        tags: tagList,
        question: q.question,
        code: q.code && q.code.length ? q.code.join('\n') : undefined,
        modelAnswer: q.answers.join(' '),
        keyPoints: q.answers,
        explanation: q.quizTag
          ? `This question was authored directly in the source file with the @quiz marker, tagged ${q.quizTag}.`
          : `This question was authored directly in the source file using @quiz/@answer markers.`
      });
    });

    // ---- New question types A–F ------------------------------------------------

    // ---- Concept check: which of these statements are true? --------------------
    // The statements come from this topic and from other topics, so the learner has
    // to recognise what really belongs to the concept rather than match a phrase.
    const conceptPool = topicNotes
      .map(line => String(line).replace(/^[-*•]\s+/, '').trim())
      .filter(isUsableQuizStatement);
    const trueOptions = conceptPool.slice(0, 3);
    const falseOptions = [];
    for (let i = 0; i < topics.length; i++) {
      if (i === topicIndex) continue;
      const otLines = (allTopicNoteLines[i] || [])
        .map(line => String(line).replace(/^[-*•]\s+/, '').trim())
        .filter(isUsableQuizStatement);
      if (otLines.length > 0) {
        // The topic the distractor came FROM is kept, because that is the whole
        // reason it is wrong and the only honest feedback that can be given for it.
        falseOptions.push({ line: otLines[0], from: topics[i].topicName });
        if (falseOptions.length >= 2) break;
      }
    }
    // Require at least 3 true notes AND 2 plausible false statements — avoids low-quality MCQs for thin topics
    if (trueOptions.length >= 3 && falseOptions.length >= 2) {
      const selectedTrue = trueOptions.slice(0, Math.min(3, trueOptions.length));
      const selectedFalse = falseOptions.slice(0, Math.min(2, falseOptions.length));
      // Options are tagged rather than matched back by text, so a distractor that
      // happened to read the same as a true statement could not be miscounted.
      const tagged = [
        ...selectedTrue.map(text => ({ text, correct: true })),
        ...selectedFalse.map(f => ({ text: f.line, correct: false, from: f.from }))
      ];
      const seed = makeQid(chapterName, topicIdentity, 'true-false-mcq', 5);
      const ordered = orderOptionsForQuestion(tagged, seed);
      const shuffledOpts = ordered.map(o => o.text);
      const correctIndices = ordered.map((o, idx) => (o.correct ? idx : -1)).filter(idx => idx >= 0);
      // Each distractor is a real statement from ANOTHER topic, so the reason it is
      // wrong can be stated exactly instead of left blank. Without this the learner
      // was told only that they were wrong, never why.
      const whyByOption = {};
      ordered.forEach((o, idx) => {
        if (!o.correct && o.from) {
          whyByOption[idx] = `This statement is true of "${o.from}", not of "${topicLabel}". It is a real statement taken from another topic, which is exactly what makes it the wrong choice here — the question asks what your notes say about this topic.`;
        }
      });
      if (correctIndices.length > 0) {
        addQuestion({
          type: 'mcq',
          kind: 'true-false',
          qid: seed,
          difficulty: levelForKind('true-false'),
          chapter: chapterName,
          topic: topicLabel,
          question: `Which of the following are TRUE about ${topicLabel}? Select all that apply.`,
          options: shuffledOpts,
          answer: correctIndices,
          whyByOption: Object.keys(whyByOption).length ? whyByOption : undefined,
          explanation: `A statement belongs here only if your notes make it about ${topicLabel}. Every wrong option is a true statement about a different topic, so this tests whether you know which topic a fact belongs to — not whether the fact is true. ${correctIndices.length} of the ${shuffledOpts.length} statements are about ${topicLabel}.`
        });
      }
    }

  });

  return questions.map(q => assignTags(q));
}

// ==========================================================================
// The derived "what does this print?" questions
// ==========================================================================
// Real code from the notes, with the answer PROVED by compiling and running it in
// scripts/derive-code-questions.js. Nothing is inferred here; this only carries
// them into the question set. They are tagged `predict` and `code` so they are
// filterable, and kind 'derived' keeps them distinguishable from the questions
// generated from note text, the ones the author wrote, and the researched bank.
function buildDerivedCodeQuestions(chapterName) {
  const questions = [];
  for (const entry of DERIVED_CODE_QUESTIONS) {
    if (entry.chapter !== chapterName) continue;
    questions.push({
      type: 'predict',
      kind: 'derived',
      qid: makeQid(chapterName, entry.topic, 'code', entry.id),
      difficulty: 'medium',
      chapter: chapterName,
      topic: entry.topic,
      topicPath: entry.topicPath,
      tags: ['predict', 'ocjp', 'code'],
      concepts: [],
      question: 'What does this code print?',
      code: entry.code,
      answer: [entry.answer],
      explanation: entry.explanation
        ? `${entry.explanation} — your own note beside this code. The real output is above, and it was produced by running the code rather than by reading it.`
        : `The output above is what the code really printed when it was run.`
    });
  }
  return questions;
}

// ==========================================================================
// Build practice challenges from *Challenge*.java files
// ==========================================================================
// Rejects a scraped test case that is not trustworthy. An expectation of "." or a
// value whose type cannot match the method's return type means the pattern caught
// prose rather than a result, and such a case must never be used to mark a learner
// wrong.
function isPlausibleTestCase(testCase, returnType) {
  const args = testCase.args || [];
  if (args.length === 0) return false;
  // A type declaration such as "double radius" is a signature that the scraper
  // caught by mistake, not an argument. Ordinary text such as a sentence passed to
  // a String parameter is legitimate, so the test is specific: a type name
  // followed by exactly one identifier.
  if (args.some(arg => typeof arg === 'string' && /\s/.test(arg) && /^[A-Za-z_$][\w$.<>\[\]]*\s+[A-Za-z_$]\w*$/.test(arg.trim()))) return false;
  const expected = testCase.expected;
  if (expected === null || expected === undefined) return false;
  if (typeof expected === 'string') {
    if (expected.trim() === '') return false;
    // Punctuation only, for example ".", means the regex caught prose.
    if (/^[\s.,;:!?"'\-]*$/.test(expected)) return false;
  }
  if (returnType === 'boolean') return typeof expected === 'boolean';
  if (['int', 'long', 'short', 'byte', 'double', 'float'].includes(returnType)) {
    return typeof expected === 'number' && Number.isFinite(expected);
  }
  if (returnType === 'String') return typeof expected === 'string';
  return true;
}

// ==========================================================================
// Practice challenges
// ==========================================================================
// The body of the method whose signature starts at `index`, found by matching braces.
// Used to ask what a method actually does - whether it reads console input, for
// instance - rather than guessing from its name.
function bodyOfMethod(source, index) {
  const open = String(source).indexOf('{', index);
  if (open === -1) return '';
  let depth = 0;
  for (let i = open; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) return source.slice(open, i + 1);
    }
  }
  return source.slice(open);
}

// `finishedChapters` is the set of chapter names that are finished. A chapter still being
// written gets NO practice challenges, for the same reason it gets no generated questions:
// the tool derives the test cases and the checker from the author's file, and that
// derivation is wrong the moment he edits it. This was missed when the rule was added -
// Chapter 15, the chapter being written, was shipping a generated challenge with test
// cases the tool had derived from its `main` method.
function buildPracticeChallenges(parsedData, finishedChapters) {
  const challenges = [];

  // Every topic of each chapter, so a topic's concepts can be narrowed to the ones its
  // chapter is actually responsible for. Built once rather than per challenge.
  const topicsByChapter = new Map();
  for (const topic of parsedData) {
    if (!topicsByChapter.has(topic.chapter)) topicsByChapter.set(topic.chapter, []);
    topicsByChapter.get(topic.chapter).push(topic);
  }

  for (const topic of parsedData) {
    // Nothing is generated for a chapter still being written.
    if (finishedChapters && !finishedChapters.has(topic.chapter)) continue;

    // Practice is built from files that contain an exercise: the *Challenge* files,
    // and also the *DeepProblem* files. Several chapters keep their practice methods
    // only in the DeepProblem file while their Challenge file holds just main(), so
    // those chapters used to receive no practice at all.
    //
    // A file that is NOT an exercise is also considered, but only when it holds a
    // method worth practising. That is decided below by the method search, which
    // requires a non-void public static method: a method that returns nothing can
    // only be checked from an expectation the author wrote by hand. Measured before
    // this was allowed: of 72 non-exercise files, 10 hold such a method, and 3 of
    // those read console input and are excluded.
    const isExercise = noteRules.isExerciseTopic(topic);

    const code = topic.code;
    const fileName = topic.fileName.replace('.java', '');

    // Slugify
    const slug = fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

    // Human-readable title
    const title = fileName
      .replace(/CodingChallenge$/, '')
      .replace(/DeepProblem$/, '')
      .replace(/Challenge$/, '')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\s+/g, ' ');

    // Difficulty is judged from the problem itself (see the block after the
    // method signature is parsed), never from the chapter number.

    // Problem description from header comments
    const descLines = topic.headerComments.flatMap(b => b.lines);
    const descHtml = descLines.length > 0
      ? '<p>' + descLines.join('</p><p>') + '</p>'
      : `<p>Implement the method in <code>${topic.fileName}</code>. Read the source code for details.</p>`;

    // Find first non-main public static method.
    //
    // The search runs over the source with comments and string literals blanked out.
    // Without that it matched methods that were only MENTIONED in prose - the notes
    // discuss `calculateScore(...)` and `getQuarter(...)` in comments - and reported
    // 36 candidates where there are really 10.
    //
    // The blanking replaces each removed character with a space rather than deleting
    // it, so every index still lines up with the original source. The rest of this
    // function slices `code` using `methodMatch.index`.
    const searchable = String(code)
      .replace(/\/\*[\s\S]*?\*\//g, blank => ' '.repeat(blank.length))
      .replace(/\/\/[^\n]*/g, blank => ' '.repeat(blank.length))
      .replace(/"(?:\\.|[^"\\])*"/g, blank => '"' + ' '.repeat(Math.max(0, blank.length - 2)) + '"');
    const methodRegex = /public\s+static\s+(\w[\w<>\[\]]*)\s+(\w+)\s*\(([^)]*)\)\s*(?:throws\s+[\w,\s]+)?\s*\{/g;
    let methodMatch = null;
    let m;
    while ((m = methodRegex.exec(searchable)) !== null) {
      if (m[2] === 'main') continue;
      // In a file that is not an exercise, the method has to be one a challenge can
      // actually check. A void method returns nothing, so its only usable
      // expectation is one written by hand, which these files do not have.
      if (!isExercise && m[1] === 'void') continue;
      methodMatch = m;
      break;
    }

    if (!methodMatch) continue; // Skip if no suitable method found

    const returnType = methodMatch[1];
    const methodName = methodMatch[2];
    const params = methodMatch[3];

    // A method that reads console input cannot be given an expected value without a
    // person at the keyboard, so it can never be auto-checked. Three of the ten
    // candidates in non-exercise files are of this kind.
    if (!isExercise && /\bScanner\b|System\.console\s*\(|BufferedReader|System\.in\b/.test(bodyOfMethod(code, methodMatch.index))) continue;

    // Difficulty from the problem itself: extra parameters, loops, branches and
    // recursion all make a coding challenge harder. The old rule used the chapter
    // number, so every challenge in a late chapter was "Hard" even when trivial.
    const argCount = params.split(',').filter(p => p.trim()).length;
    const bodyStart = code.indexOf('{', methodMatch.index);
    const body = bodyStart === -1 ? code : code.slice(bodyStart);
    const loopCount = (body.match(/\b(for|while|do)\s*\(/g) || []).length;
    const branchCount = (body.match(/\b(if|switch)\s*\(/g) || []).length;
    const helperCount = (body.match(/(public|private|protected)\s+static\s+\w[\w<>\[\]]*\s+\w+\s*\(/g) || []).length;
    let diffScore = 0;
    if (argCount >= 2) diffScore++;
    if (argCount >= 4) diffScore++;
    if (loopCount >= 1) diffScore++;
    if (loopCount >= 2) diffScore++;
    if (branchCount >= 2) diffScore++;
    if (helperCount >= 1) diffScore++;
    const difficulty = diffScore <= 1 ? 'Easy' : diffScore <= 3 ? 'Medium' : 'Hard';

    // Default return value
    let defaultReturn = '';
    if (returnType === 'boolean') defaultReturn = 'return false;';
    else if (['int', 'long', 'double', 'float', 'short', 'byte'].includes(returnType)) defaultReturn = 'return 0;';
    else if (returnType === 'String') defaultReturn = 'return "";';
    else if (returnType !== 'void') defaultReturn = 'return null;';

    // Parse param names
    const paramList = params.split(',').map(p => p.trim()).filter(Boolean);
    const paramNames = paramList.map(p => {
      const parts = p.split(/\s+/);
      return parts[parts.length - 1];
    });

    // Template
    const paramStr = paramList.join(', ');
    const returnLine = defaultReturn ? `\n        ${defaultReturn}` : '';
    const template = `public class PracticeWorkspace {\n    public static ${returnType} ${methodName}(${paramStr}) {\n        // Write your code here${returnLine}\n    }\n}`;

    // Extract test cases from the notes.
    // Only an explicit arrow or the word "returns" directly after the call is
    // trusted. The looser pattern this replaced scraped a method signature as the
    // arguments and a stray "." as the expected value, which told learners their
    // correct code was wrong.
    const testCases = [];
    const commentText = topic.headerComments.flatMap(b => b.lines).join('\n');
    const rawCode = code;

    const normalizeValue = (value) => {
      const v = String(value || '').trim();
      if (v === 'true') return true;
      if (v === 'false') return false;
      if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
      if (/^-?\d+$/.test(v)) return parseInt(v, 10);
      return v.replace(/^["']|["']$/g, '');
    };

    // An explicit @testcase line is the most reliable source, because the author
    // writes the call and the expected result together. This is what makes a
    // challenge verifiable when the notes contain no worked examples.
    //   // @testcase isOdd(3) -> true
    const testcaseLines = code.split('\n')
      .map(l => l.trim())
      .filter(l => /^\/\/\s*@testcase\s+/.test(l))
      .map(l => l.replace(/^\/\/\s*@testcase\s+/, '').trim());
    testcaseLines.forEach(line => {
      const match = line.match(new RegExp(`(?:^|\\W)${methodName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\(([^()]*)\\)\\s*(?:->|→|=>|returns?|gives)\\s*(.+)$`, 'i'));
      if (!match) return;
      const args = match[1].trim() === '' ? [] : match[1].split(',').map(normalizeValue);
      // A void method communicates through what it prints, so its expected value is
      // the text the call should produce, not a returned value. The quotes around a
      // quoted expectation are removed so both forms read the same way.
      //
      // A method that prints several lines needs several lines of expectation, and a
      // @testcase marker is a single comment line, so "\n" in the expectation is
      // turned into a real newline. Without this, a multi-line challenge could never
      // be checked at all.
      const expectedText = match[2].trim().replace(/\s*;+\s*$/, '');
      const expected = returnType === 'void'
        ? expectedText.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n').replace(/\\t/g, '\t')
        : normalizeValue(expectedText);
      const candidate = { args, expected };
      if (isPlausibleTestCase(candidate, returnType)) testCases.push(candidate);
    });

    // A void method returns nothing, so the only reliable expectation is one the
    // author wrote with an explicit @testcase line. Scraping prose for a printed
    // result would guess, and a guess can mark correct code as wrong.
    const capturesOutput = returnType === 'void';

    if (!capturesOutput) {
      const testPattern = new RegExp(
      methodName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
      '\\(([^()]*)\\)\\s*;?\\s*(?:→|->|=>|returns?|gives)\\s+[^\\n]*?(?<![\\w.])(-?\\d+(?:\\.\\d+)?|true|false|"[^"]*")(?!\\d)',
      'g'
    );
    let tm;
    while ((tm = testPattern.exec(commentText)) !== null && testCases.length < 4) {
      const candidate = {
        args: tm[1].split(',').map(normalizeValue),
        expected: normalizeValue(tm[2])
      };
      // Only cases written for THIS overload are usable. A case for a different
      // overload can never match, and would mark a correct answer as wrong.
      if (candidate.args.length !== paramNames.length) continue;
      if (isPlausibleTestCase(candidate, returnType)) testCases.push(candidate);
    }

    // Fallback: extract from System.out.println(methodName(...)) calls in main()
    if (testCases.length === 0 && returnType !== 'void') {
      const printPattern = new RegExp(
        'System\\.out\\.println\\(\\s*' +
        methodName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
        '\\(([^)]+)\\)\\s*\\)',
        'g'
      );
      let pm;
      while ((pm = printPattern.exec(rawCode)) !== null && testCases.length < 3) {
        try {
          const rawArgs = pm[1].split(',').map(a => {
            const v = a.trim();
            if (v === 'true') return true;
            if (v === 'false') return false;
            if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
            if (/^-?\d+$/.test(v)) return parseInt(v, 10);
            return v.replace(/^["']|["']$/g, '');
          });
          testCases.push({ args: rawArgs, expected: null });
        } catch (e) { /* skip */ }
      }
    }
    }

    // Expected values computed by scripts/fill-practice-expectations.js, which calls
    // the author's OWN method and records what it returned. Without these, a test case
    // scraped from `println(method(args))` knows the arguments but not the result, so
    // the challenge can only be self-checked. Applying them is what makes it
    // auto-checked, and the value is the author's own answer rather than a guess.
    const computedExpectations = PRACTICE_EXPECTATIONS[slug];
    if (computedExpectations && computedExpectations.length) {
      testCases.length = 0;
      for (const entry of computedExpectations) testCases.push({ args: entry.args, expected: entry.expected });
    }

    const selfCheck = testCases.length === 0 ||
      testCases.every(tc => tc.expected === null);

    // Build verifyFn string (evaluated in browser context). It returns true, false,
    // or null. null means the code could not be run automatically, which must be
    // reported as "not checked" rather than as a wrong answer.
    // The verifier is built for every challenge that can have one, not only for the
    // auto-checked ones. fill-practice-expectations.js needs it in order to test an
    // expectation BEFORE writing it: without that it could record a value the lab
    // rejects, and the lab would mark the author's own correct code wrong.
    let verifyFnStr = null;
    if (paramNames.length > 0) {
      verifyFnStr = buildVerifySource({ methodName, paramNames, capturesOutput });
    }

    // Which concepts this challenge teaches, taken from the topic it came from - the
    // same tag the questions carry. The audit REQUIRES this, because a challenge
    // without concepts silently drops out of the weakest-first ordering and can never
    // be reached from the Mastery view.
    //
    // A challenge file is mostly code with little prose, so inference often finds
    // nothing and the chapter's own concepts are the honest fallback: the challenge
    // belongs to that chapter, so it teaches what that chapter teaches.
    //
    // `conceptsSource` records WHICH of those happened, because the two mean different
    // things and only one supports claiming a specific concept. Measured: 8 of 69 are
    // narrowed from the topic, and 61 fall back to the chapter. A concept match on a
    // chapter fallback means "this chapter teaches it", NOT "this challenge teaches
    // it" - and offering a challenge about `abstract` that turns out to be about method
    // overloading is worse than offering nothing.
    const chapterConcepts = conceptCatalogue.conceptsForChapter(
      topic.chapter,
      topicsByChapter.get(topic.chapter) || []
    );
    const inferred = conceptCatalogue.conceptsForTopicWithSource(topic, chapterConcepts);
    const concepts = inferred.concepts.length ? inferred.concepts : chapterConcepts.slice();
    const conceptsSource = inferred.concepts.length ? inferred.source : 'chapter';

    challenges.push({
      id: slug,
      title: title.trim(),
      difficulty,
      chapter: topic.chapter,
      concepts,
      // 'topic' means the concepts were narrowed from this file's own notes, so a
      // concept match is precise. 'chapter' means they are the whole chapter's list,
      // so a match only means the chapter teaches it. See the note above.
      conceptsSource,
      description: descHtml,
      template,
      testCases: selfCheck ? [{ args: [], expected: null }] : testCases,
      selfCheck,
      methodName,
      verifyFnStr: verifyFnStr || null
    });
  }

  return challenges;
}

// ==========================================================================
// Build deep coding challenge problems per chapter
// ==========================================================================
function buildDeepChallenges(chapterName, topics) {
  const challenges = [];
  const label = chapterName.toLowerCase();

  // --- User-authored @challenge annotations ---
  topics.forEach(topic => {
    (topic.deepChallenges || []).forEach(dc => {
      challenges.push({
        id: `deep-${slugify(chapterName)}-${slugify(dc.title)}`,
        title: dc.title,
        chapter: chapterName,
        topic: topic.topicName,
        difficulty: 'Hard',
        tags: ['deep', 'coding'],
        source: 'custom',
        description: dc.desc.join('\n'),
        hints: dc.hints,
        testcases: dc.testcases,
        selfCheck: true
      });
    });
  });

  // --- Auto-generated deep challenges per chapter type ---

  if (labelHas(label, 'method')) {
    challenges.push({
      id: `deep-${slugify(chapterName)}-calculator`,
      title: 'Build a Multi-Operation Calculator',
      chapter: chapterName, topic: 'Methods Deep Challenge',
      difficulty: 'Medium', tags: ['deep', 'coding', 'methods'],
      source: 'auto',
      description: `Create a Calculator class with static methods:\n- add(double a, double b) → returns sum\n- subtract(double a, double b) → returns difference\n- multiply(double a, double b) → returns product\n- divide(double a, double b) → returns quotient; throws ArithmeticException if b is 0\n- power(double base, int exp) → returns base^exp (do NOT use Math.pow)\n\nAll methods must be public static. Handle edge cases: negative numbers, zero division.`,
      hints: ['Use a loop for power()', 'Return special value -1 for invalid divide input if not throwing exception'],
      testcases: ['add(3.5, 2.5) → 6.0', 'divide(10, 0) → ArithmeticException', 'power(2, 8) → 256.0'],
      selfCheck: true
    });
  }

  // Word-boundary matching: "looping" contains "oop", which is how the Looping
  // chapters used to receive abstract class and polymorphism challenges before
  // that topic had been studied.
  if (labelHas(label, 'oop') || labelHas(label, 'class') || labelHas(label, 'inherit')) {
    challenges.push({
      id: `deep-${slugify(chapterName)}-bank`,
      title: 'Design a BankAccount System (OOP)',
      chapter: chapterName, topic: 'OOP Deep Challenge',
      difficulty: 'Hard', tags: ['deep', 'coding', 'oop', 'interview'],
      source: 'auto',
      description: `Design three classes:\n\n1. BankAccount (base class)\n   - Fields: accountNumber (String), balance (double), ownerName (String)\n   - Constructor: BankAccount(String accountNumber, String ownerName)\n   - Methods: deposit(double amount), withdraw(double amount) throws InsufficientFundsException, getBalance(), toString()\n\n2. SavingsAccount extends BankAccount\n   - Extra field: interestRate (double)\n   - Method: applyInterest() — adds balance * interestRate to balance\n\n3. CurrentAccount extends BankAccount\n   - Extra field: overdraftLimit (double)\n   - Override withdraw() to allow overdraft up to overdraftLimit\n\nThis tests: inheritance, method overriding, constructors, exceptions, encapsulation.`,
      hints: ['Call super(accountNumber, ownerName) in subclass constructors', 'In CurrentAccount.withdraw(), check balance + overdraftLimit >= amount', 'Use private fields with public getters'],
      testcases: ['new SavingsAccount("S001", "Alice").deposit(1000) → balance=1000', 'applyInterest() at 5% on 1000 → balance=1050', 'new CurrentAccount("C001", "Bob", 500.0).withdraw(600) on empty account → throws if > overdraftLimit'],
      selfCheck: true
    });

    challenges.push({
      id: `deep-${slugify(chapterName)}-shape`,
      title: 'Polymorphism: Shape Area Calculator',
      chapter: chapterName, topic: 'Polymorphism Deep Challenge',
      difficulty: 'Hard', tags: ['deep', 'coding', 'oop', 'ocjp'],
      source: 'auto',
      description: `Create an abstract class Shape with:\n- abstract double area()\n- abstract double perimeter()\n- toString() returns "ShapeType: area=X, perimeter=Y"\n\nImplement:\n- Circle(double radius) — area = π*r², perimeter = 2*π*r\n- Rectangle(double width, double height)\n- Triangle(double a, double b, double c) — use Heron's formula for area\n\nStore shapes in a Shape[] array and print each. Demonstrate runtime polymorphism.\n\nOCJP focus: abstract classes, method overriding, runtime dispatch, array of parent type.`,
      hints: ['Math.PI for π, Math.sqrt() for Heron formula', 'Shape[] shapes = {new Circle(5), new Rectangle(4,3)}; — runtime dispatch', 'Abstract class cannot be instantiated directly'],
      testcases: ['new Circle(5).area() → ~78.54', 'new Rectangle(4,3).perimeter() → 14.0', 'Heron Triangle(3,4,5) → area = 6.0'],
      selfCheck: true
    });
  }

  if (labelHas(label, 'exception')) {
    challenges.push({
      id: `deep-${slugify(chapterName)}-validation`,
      title: 'Custom Exception Hierarchy & Input Validation',
      chapter: chapterName, topic: 'Exception Handling Deep Challenge',
      difficulty: 'Hard', tags: ['deep', 'coding', 'exceptions', 'interview'],
      source: 'auto',
      description: `Build a user registration validator:\n\n1. Create custom exceptions:\n   - ValidationException extends Exception (checked)\n   - InvalidAgeException extends ValidationException\n   - InvalidEmailException extends ValidationException\n\n2. Create UserValidator class with:\n   - validateAge(int age) throws InvalidAgeException — valid range: 18-120\n   - validateEmail(String email) throws InvalidEmailException — must contain @ and .\n   - validateUser(String email, int age) throws ValidationException — calls both\n\n3. In main(), demonstrate try-catch-finally with multiple catch blocks.\n\nFocus: checked exceptions, custom exception hierarchy, multi-catch, finally.`,
      hints: ['Checked exceptions must be declared with throws or caught', 'multi-catch: catch (InvalidAgeException | InvalidEmailException e)', 'finally runs even when exception is thrown'],
      testcases: ['validateAge(17) → InvalidAgeException', 'validateEmail("notanemail") → InvalidEmailException', 'finally block always executes'],
      selfCheck: true
    });
  }

  if (labelHas(label, 'loop') || labelHas(label, 'while') || labelHas(label, 'for')) {
    challenges.push({
      id: `deep-${slugify(chapterName)}-patterns`,
      title: 'Number Patterns & Algorithm Challenges',
      chapter: chapterName, topic: 'Loops Deep Challenge',
      difficulty: 'Medium', tags: ['deep', 'coding', 'loops'],
      source: 'auto',
      description: `Implement these loop-based methods:\n\n1. isPrime(int n) → boolean — return true if n is prime\n2. fibonacci(int n) → int — return the nth Fibonacci number (0-indexed)\n3. sumDigits(int n) → int — return sum of all digits of n\n4. reverseNumber(int n) → int — reverse the digits of n\n5. printPyramid(int rows) — print a right-angled star pyramid\n\nAll without converting to String. Use only loops.\n\nThis tests: loop logic, integer math (%, /), algorithm thinking.`,
      hints: ['isPrime: check divisors from 2 to Math.sqrt(n)', 'fibonacci(0)=0, fibonacci(1)=1, fibonacci(n)=f(n-1)+f(n-2)', 'sumDigits: use % 10 to get last digit, / 10 to remove it'],
      testcases: ['isPrime(7) → true', 'fibonacci(6) → 8', 'sumDigits(123) → 6', 'reverseNumber(1234) → 4321'],
      selfCheck: true
    });
  }

  if (labelHas(label, 'switch') || labelHas(label, 'if') || labelHas(label, 'statement')) {
    challenges.push({
      id: `deep-${slugify(chapterName)}-grading`,
      title: 'Grade & Decision Engine',
      chapter: chapterName, topic: 'Control Flow Deep Challenge',
      difficulty: 'Easy', tags: ['deep', 'coding'],
      source: 'auto',
      description: `Build a student grade calculator:\n\n1. getGrade(int score) → String\n   - 90-100: "A"\n   - 80-89: "B"\n   - 70-79: "C"\n   - 60-69: "D"\n   - Below 60: "F"\n   - Outside 0-100: "Invalid"\n\n2. getDayType(String day) → String\n   - "Monday"..."Friday" → "Weekday"\n   - "Saturday", "Sunday" → "Weekend"\n   - anything else → "Unknown"\n   - Use switch statement (not if-else)\n\n3. getFizzBuzz(int n) → String\n   - Multiple of 15: "FizzBuzz"\n   - Multiple of 3: "Fizz"\n   - Multiple of 5: "Buzz"\n   - Otherwise: String.valueOf(n)`,
      hints: ['Use enhanced switch for getDayType()', 'FizzBuzz: check 15 FIRST (before 3 and 5)', 'int score → score / 10 gives you the tens digit'],
      testcases: ['getGrade(85) → "B"', 'getDayType("Saturday") → "Weekend"', 'getFizzBuzz(15) → "FizzBuzz"'],
      selfCheck: true
    });
  }

  if (labelHas(label, 'primitive') || labelHas(label, 'string')) {
    challenges.push({
      id: `deep-${slugify(chapterName)}-string-ops`,
      title: 'String Manipulation Mastery',
      chapter: chapterName, topic: 'Strings Deep Challenge',
      difficulty: 'Medium', tags: ['deep', 'coding', 'strings', 'ocjp'],
      source: 'auto',
      description: `Implement these String utility methods WITHOUT using external libraries:\n\n1. isPalindrome(String s) → boolean — ignore case and spaces\n2. countVowels(String s) → int\n3. reverseWords(String sentence) → String — reverse word order, not characters\n4. titleCase(String sentence) → String — capitalize first letter of each word\n5. countOccurrences(String text, String word) → int — count non-overlapping occurrences\n\nOCJP focus: String immutability, .equals() vs ==, StringBuilder for efficiency, String methods: .split(), .trim(), .toLowerCase(), .charAt(), .length().`,
      hints: ['Use StringBuilder for reverseWords() for efficiency', 'Split on "\\\\s+" to handle multiple spaces', 'isPalindrome: strip spaces, toLowerCase, then compare char by char'],
      testcases: ['isPalindrome("A man a plan a canal Panama") → true', 'countVowels("Hello World") → 3', 'reverseWords("Hello World") → "World Hello"'],
      selfCheck: true
    });
  }

  return challenges;
}

// ==========================================================================
// Main pipeline
// ==========================================================================
// ==========================================================================
// Content change review (the approval gate)
// ==========================================================================
// Nothing about the notes is ever changed behind the author's back. The applied
// data.js is the baseline that was already approved, so a fresh parse is compared
// against it. When something differs, a readable report is written and the run
// stops, so the author can review the change and then run 'npm run approve'.

function readApprovedData(dashboardDir) {
  const dataFile = path.join(dashboardDir, 'data.js');
  if (!fs.existsSync(dataFile)) return null;
  const source = fs.readFileSync(dataFile, 'utf8');
  const context = {};
  try {
    vm.runInNewContext(`${source}\nthis.__value = CONCEPTS_DATA;`, context, { filename: 'data.js' });
  } catch (err) {
    return null;
  }
  return Array.isArray(context.__value) ? context.__value : null;
}

// Flattens one comment block into plain text lines for comparison.
function notesOfBlock(block) {
  if (!block) return [];
  if (block.type === 'table') {
    return ['| ' + (block.headers || []).join(' | ')].concat((block.rows || []).map(r => '| ' + r.join(' | ')));
  }
  if (block.type === 'code') return ['```'].concat((block.code || '').split('\n')).concat(['```']);
  return (block.lines || []).filter(Boolean);
}

function notesOfTopic(topic) {
  return (topic.headerComments || []).flatMap(notesOfBlock);
}

function quizzesOfTopic(topic) {
  return (topic.customQuizzes || []).map(q =>
    `[${q.quizTag || 'untagged'}${q.quizLevel ? ', ' + q.quizLevel.toUpperCase() : ''}] ${q.question} -> ${(q.answers || []).join(' ')}`);
}

// Multiset difference: what was removed and what was added, ignoring order.
function diffLines(oldLines, newLines) {
  const tally = arr => {
    const map = new Map();
    arr.forEach(l => map.set(l, (map.get(l) || 0) + 1));
    return map;
  };
  const oldTally = tally(oldLines);
  const newTally = tally(newLines);
  const removed = [];
  const added = [];
  oldTally.forEach((n, line) => {
    const now = newTally.get(line) || 0;
    for (let i = 0; i < n - now; i++) removed.push(line);
  });
  newTally.forEach((n, line) => {
    const before = oldTally.get(line) || 0;
    for (let i = 0; i < n - before; i++) added.push(line);
  });
  return { removed, added };
}

function indexByFile(chapters) {
  const map = new Map();
  (chapters || []).forEach(chapter => {
    (chapter.topics || []).forEach(topic => {
      map.set(topic.filePath, { chapter: chapter.name, topic });
    });
  });
  return map;
}

// Builds the full change report between the approved baseline and a fresh parse.
function collectContentChanges(chaptersList, approved) {
  const changes = [];
  if (!approved) return changes;
  const oldIndex = indexByFile(approved);
  const newIndex = indexByFile(chaptersList);

  newIndex.forEach((entry, filePath) => {
    const previous = oldIndex.get(filePath);
    if (!previous) {
      changes.push({ filePath, chapter: entry.chapter, topic: entry.topic.topicName, isNew: true, noteChanges: diffLines([], notesOfTopic(entry.topic)), quizChanges: diffLines([], quizzesOfTopic(entry.topic)), codeChanged: true });
      return;
    }
    const noteChanges = diffLines(notesOfTopic(previous.topic), notesOfTopic(entry.topic));
    const quizChanges = diffLines(quizzesOfTopic(previous.topic), quizzesOfTopic(entry.topic));
    const oldInline = (previous.topic.inlineComments || []).join('\n');
    const newInline = (entry.topic.inlineComments || []).join('\n');
    const inlineChanges = diffLines(oldInline ? oldInline.split('\n') : [], newInline ? newInline.split('\n') : []);
    const codeChanged = String(previous.topic.code || '') !== String(entry.topic.code || '');
    const moved = previous.chapter !== entry.chapter;
    const hasChange = noteChanges.added.length || noteChanges.removed.length ||
      quizChanges.added.length || quizChanges.removed.length ||
      inlineChanges.added.length || inlineChanges.removed.length || codeChanged || moved;
    if (hasChange) {
      changes.push({ filePath, chapter: entry.chapter, previousChapter: previous.chapter, topic: entry.topic.topicName, isNew: false, noteChanges, quizChanges, inlineChanges, codeChanged, moved });
    }
  });

  oldIndex.forEach((entry, filePath) => {
    if (!newIndex.has(filePath)) {
      changes.push({ filePath, chapter: entry.chapter, topic: entry.topic.topicName, isRemoved: true, noteChanges: { added: [], removed: notesOfTopic(entry.topic) }, quizChanges: { added: [], removed: quizzesOfTopic(entry.topic) } });
    }
  });

  return changes;
}

// A change to notes or @quiz markers is authored content, so it must be reviewed.
// A change to Java code alone is normally just practising, so it is reported and
// applied without blocking the dashboard refresh.
function isAuthoredChange(change) {
  return Boolean(change.isNew || change.isRemoved || change.moved ||
    (change.noteChanges && (change.noteChanges.added.length || change.noteChanges.removed.length)) ||
    (change.quizChanges && (change.quizChanges.added.length || change.quizChanges.removed.length)) ||
    (change.inlineChanges && (change.inlineChanges.added.length || change.inlineChanges.removed.length)));
}

function writeChangeReport(changes, dashboardDir, awaitingReview) {
  const out = [];
  const totals = { notesAdded: 0, notesRemoved: 0, quizzesAdded: 0, quizzesRemoved: 0, code: 0, added: 0, removed: 0, moved: 0 };
  changes.forEach(c => {
    totals.notesAdded += c.noteChanges.added.length;
    totals.notesRemoved += c.noteChanges.removed.length;
    totals.quizzesAdded += c.quizChanges.added.length;
    totals.quizzesRemoved += c.quizChanges.removed.length;
    if (c.codeChanged) totals.code++;
    if (c.isNew) totals.added++;
    if (c.isRemoved) totals.removed++;
    if (c.moved) totals.moved++;
  });

  out.push(awaitingReview ? '# Content changes waiting for review' : '# Content changes (already applied)');
  out.push('');
  out.push(`Generated: ${(() => { const d = new Date(); const p = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`; })()}`);
  out.push('');
  out.push('Baseline: `revision-dashboard/data.js` (your last approved version).');
  out.push('');
  out.push('## Summary');
  out.push('');
  out.push(`- Topics changed: **${changes.length}** (new: ${totals.added}, removed: ${totals.removed}, moved chapter: ${totals.moved})`);
  out.push(`- Note lines: **+${totals.notesAdded} / -${totals.notesRemoved}**`);
  out.push(`- @quiz questions: **+${totals.quizzesAdded} / -${totals.quizzesRemoved}**`);
  out.push(`- Topics whose Java code was edited: **${totals.code}**`);
  out.push('');
  if (awaitingReview) {
    out.push('Nothing has been applied yet. Review the changes below, then run:');
    out.push('');
    out.push('```bash');
    out.push('npm run approve');
    out.push('```');
    out.push('');
    out.push('Nothing about your notes is ever changed without this review.');
  } else {
    out.push('Only Java code changed, so these were applied automatically. No note or @quiz text was touched,');
    out.push('so there is nothing to approve. This file is kept as a record.');
  }
  out.push('');
  out.push('---');

  let currentChapter = null;
  changes.forEach(c => {
    if (c.chapter !== currentChapter) {
      currentChapter = c.chapter;
      out.push('');
      out.push(`## ${currentChapter}`);
    }
    out.push('');
    out.push(`### ${c.topic}`);
    out.push('');
    out.push('`' + c.filePath + '`');
    out.push('');
    if (c.isNew) out.push('**NEW topic** — none of this was in the approved version.');
    if (c.isRemoved) out.push('**REMOVED topic** — this file is gone from src/.');
    if (c.moved) out.push(`**Moved** from "${c.previousChapter}" to "${c.chapter}".`);

    const section = (title, diff) => {
      if (!diff || (!diff.added.length && !diff.removed.length)) return;
      out.push('');
      out.push(`**${title}**`);
      out.push('');
      out.push('```diff');
      diff.removed.forEach(l => out.push('- ' + l));
      diff.added.forEach(l => out.push('+ ' + l));
      out.push('```');
    };
    section('Notes', c.noteChanges);
    section('Inline notes', c.inlineChanges);
    section('@quiz questions', c.quizChanges);
    if (c.codeChanged && !c.isNew) {
      out.push('');
      out.push('_Java code edited (the dashboard code view will update)._');
    }
  });

  out.push('');
  const reportFile = path.join(dashboardDir, 'content-changes.md');
  fs.writeFileSync(reportFile, out.join('\n') + '\n', 'utf8');

  // The same review in a machine-readable form, so the browser review page can
  // render it with Apply and Discard buttons instead of the author having to read
  // a markdown file and then type a command.
  const jsonFile = path.join(dashboardDir, 'content-changes.json');
  if (awaitingReview) {
    fs.writeFileSync(jsonFile, JSON.stringify({
      generated: new Date().toISOString(),
      awaitingReview: true,
      totals,
      changes: changes.map(c => ({
        filePath: c.filePath,
        chapter: c.chapter,
        previousChapter: c.previousChapter || null,
        topic: c.topic,
        isNew: Boolean(c.isNew),
        isRemoved: Boolean(c.isRemoved),
        moved: Boolean(c.moved),
        codeChanged: Boolean(c.codeChanged),
        noteChanges: c.noteChanges || { added: [], removed: [] },
        inlineChanges: c.inlineChanges || { added: [], removed: [] },
        quizChanges: c.quizChanges || { added: [], removed: [] }
      }))
    }, null, 2), 'utf8');
  } else if (fs.existsSync(jsonFile)) {
    fs.unlinkSync(jsonFile);
  }

  return { reportFile, totals };
}

// Asks the author to confirm before anything is applied. Returns false when the
// run is not interactive, so a piped or automated run can never hang waiting.
function askApplyChanges(promptText) {
  return new Promise(resolve => {
    if (!process.stdin.isTTY) {
      resolve(false);
      return;
    }
    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(promptText, answer => {
      rl.close();
      resolve(/^y(es)?$/i.test(String(answer || '').trim()));
    });
  });
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const proposeOnly = process.argv.includes('--propose');
  const autoApprove = process.argv.includes('--yes') || process.argv.includes('-y');
  const noPrompt = process.argv.includes('--no-prompt');
  const srcDir = path.join(rootDir, 'src');
  const dashboardDir = path.join(rootDir, 'revision-dashboard');
  const questionsFile = path.join(dashboardDir, 'questions.js');

  console.log(`\n📂 Scanning Java source files in ${srcDir}...`);
  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Error: src directory does not exist at ${srcDir}`);
    process.exit(1);
  }

  // ── Step 1: Parse all Java files ──────────────────────────────────────────
  const files = getJavaFiles(srcDir);
  console.log(`✅ Found ${files.length} Java files.`);

  const parsedData = files.map(file => parseJavaFile(file, rootDir));

  // Group by chapter (maintain sort order)
  const chaptersMap = {};
  parsedData.forEach(item => {
    if (!chaptersMap[item.chapter]) {
      chaptersMap[item.chapter] = { name: item.chapter, topics: [] };
    }
    chaptersMap[item.chapter].topics.push(item);
  });

  const chaptersList = Object.values(chaptersMap).sort((a, b) => {
    const aNum = parseInt(a.name.match(/Chapter\s+(\d+)/)?.[1] || '999', 10);
    const bNum = parseInt(b.name.match(/Chapter\s+(\d+)/)?.[1] || '999', 10);
    return aNum - bNum;
  });

  // Sort topics within each chapter by sub-chapter number extracted from filePath
  chaptersList.forEach(chapter => {
    chapter.topics.sort((a, b) => {
      const subNumA = parseInt(a.filePath.match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      const subNumB = parseInt(b.filePath.match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      if (subNumA !== subNumB) return subNumA - subNumB;
      return a.filePath.localeCompare(b.filePath);
    });
  });

  // ── Step 1b: Review gate ───────────────────────────────────────────────────
  // 'npm run revise' proposes. Changes to notes, inline notes or @quiz markers are
  // authored content, so they are reported and nothing is written until the author
  // approves. A Java code edit on its own is reported and applied immediately, so
  // everyday practice does not need an approval each time.
  if (proposeOnly) {
    const approved = readApprovedData(dashboardDir);
    const changes = collectContentChanges(chaptersList, approved);
    const authored = changes.filter(isAuthoredChange);
    const codeOnly = changes.filter(c => !isAuthoredChange(c));

    if (authored.length > 0) {
      const { reportFile, totals } = writeChangeReport(changes, dashboardDir, true);
      console.log('\n🔎 CONTENT CHANGES WAITING FOR REVIEW');
      console.log(`   Topics changed : ${authored.length} (new: ${totals.added}, removed: ${totals.removed})`);
      console.log(`   Note lines     : +${totals.notesAdded} / -${totals.notesRemoved}`);
      console.log(`   @quiz changes  : +${totals.quizzesAdded} / -${totals.quizzesRemoved}`);
      if (codeOnly.length > 0) console.log(`   Plus code-only edits in ${codeOnly.length} topic(s)`);
      console.log(`\n   Read the full review here:  ${path.relative(rootDir, reportFile)}`);

      if (autoApprove) {
        console.log('   --yes given, applying the changes.\n');
      } else if (noPrompt) {
        // The browser review page takes over: it shows the same changes and offers
        // Apply and Discard, so the terminal must not block waiting for a keypress.
        console.log('\n   Review them in the browser. Nothing is applied until you choose Apply.\n');
        process.exit(0);
      } else {
        const apply = await askApplyChanges('\n   Apply these changes now? (y/N) ');
        if (!apply) {
          console.log('\n   Nothing was applied. Your dashboard still shows the last approved version.');
          console.log('   To apply: press y next time, or run  npm run approve\n');
          process.exit(1);
        }
        console.log('\n   Applying the reviewed changes...\n');
      }
    } else if (codeOnly.length > 0) {
      const { reportFile } = writeChangeReport(codeOnly, dashboardDir, false);
      console.log(`\n📝 Java code edited in ${codeOnly.length} topic(s) — no note or @quiz text changed, so this was applied.`);
      console.log(`   Record kept here: ${path.relative(rootDir, reportFile)}\n`);
    } else {
      // Nothing pending: clear any report left over from an earlier run so a stale
      // "waiting for review" file can never mislead.
      const staleReport = path.join(dashboardDir, 'content-changes.md');
      if (fs.existsSync(staleReport)) fs.unlinkSync(staleReport);
      const staleProposal = path.join(dashboardDir, 'content-changes.json');
      if (fs.existsSync(staleProposal)) fs.unlinkSync(staleProposal);
      console.log('✅ No content changes to review — regenerating as usual.');
    }
  }

  // ── Step 2: Write data.js ──────────────────────────────────────────────────
  if (!fs.existsSync(dashboardDir)) {
    fs.mkdirSync(dashboardDir, { recursive: true });
  }

  const dataFile = path.join(dashboardDir, 'data.js');
  const dataOutput = `// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.
const CONCEPTS_DATA = ${JSON.stringify(chaptersList, null, 2)};

// Concept id -> readable name. Lets the dashboard label a concept filter without
// loading the whole catalogue.
const CONCEPT_NAMES = ${JSON.stringify(conceptCatalogue.conceptNames(), null, 2)};
`;
  fs.writeFileSync(dataFile, dataOutput, 'utf8');
  console.log(`✅ data.js regenerated with ${chaptersList.length} chapters.`);

  // ── Step 3: Rebuild generated question banks from the current source tree ─
  const sortedQBank = {};
  const sortedQRBank = {};
  // Which chapters are finished, computed once. A chapter still being written gets no
  // generated content; see finishedChapterNames.
  const finishedChapters = noteRules.finishedChapterNames(chaptersList);
  const inProgress = chaptersList.filter(c => !finishedChapters.has(c.name)).map(c => c.name);
  if (inProgress.length) {
    console.log(`\n✍️  Still being written, so nothing is generated for: ${inProgress.join(', ')}`);
  }

  chaptersList.forEach(chapter => {
    const chName = chapter.name;
    // Every question in a chapter carries the chapter's concepts, so the quiz can
    // be filtered by concept and a new chapter is covered by what its notes say.
    const chapterConcepts = conceptCatalogue.conceptsForChapter(chName, chapter.topics);
    // A finer tag: the concepts of the topic file the question came from. Inside
    // the Strings chapter this separates the StringBuilder questions from the
    // equals/== ones, which the chapter-wide list cannot do.
    const conceptsByPath = new Map();
    chapter.topics.forEach(topic => {
      const own = conceptCatalogue.conceptsForTopic(topic, chapterConcepts);
      if (own.length) conceptsByPath.set(topic.filePath, own);
    });
    const conceptsForQuestion = q => (q.topicPath && conceptsByPath.get(q.topicPath)) || chapterConcepts;
    // A chapter still being written gets no generated content. Only the questions he
    // wrote himself with @quiz appear, so nothing the tool invents can be wrong the
    // moment he edits the notes, and there is nothing to redo later.
    const isFinished = finishedChapters.has(chName);
    sortedQRBank[chName] = buildQuickRevisionEntry(chName, chapter.topics, isFinished);
    const starterQs = buildStarterQuestions(chName, chapter.topics);
    const ocjpQs = buildOCJPQuestions(chName, chapter.topics);
    // A quiz must never show the same question twice. Several sub-chapters share a
    // file name, so without this a chapter could repeat one question many times.
    const generated = [...starterQs, ...ocjpQs, ...buildBankQuestions(chName, chapter.topics, conceptsByPath), ...buildDerivedCodeQuestions(chName)];
    const combined = (isFinished ? generated : generated.filter(q => q.kind === 'custom'))
      .map(q => ({ ...q, concepts: q.concepts && q.concepts.length ? q.concepts : conceptsForQuestion(q) }));
    const seenQuestions = new Set();
    const deduped = combined.filter(q => {
      const key = `${q.question || ''}||${q.code || ''}||${(q.options || []).join('|')}`;
      if (seenQuestions.has(key)) return false;
      seenQuestions.add(key);
      return true;
    });
    sortedQBank[chName] = deduped;
    console.log(`  🃏 Regenerated Quick Revision and question sets for: ${chName} (${deduped.length} questions, ${ocjpQs.length} OCJP, ${chapterConcepts.length} concepts)`);
  });

  console.log(`\n📝 Summary: ${chaptersList.length} regenerated chapter question set(s), ${chaptersList.length} regenerated quick revision entry/entries.`);

  // ── Step 4: Write updated questions.js ────────────────────────────────────

  const questionsOutput = `// =============================================================================
// Java Revision Dashboard — Questions & Quick Revision Bank
// =============================================================================
// HOW THIS FILE IS MANAGED:
//   - QUICK_REVISION_BANK: Auto-generated from Java file comments. Regenerated
//     on every 'npm run revise'.
//   - QUESTIONS_BANK: Starter entries are auto-generated from current chapter
//     source files and regenerated on every 'npm run revise'.
//
// To update after adding new chapters: run  npm run revise
// =============================================================================

// Each question type:
//  'scq'       - Single-Choice Question (pick one)
//  'mcq'       - Multiple-Choice Question (select all that apply)
//  'codefill'  - Fill in the missing code/keyword
//  'predict'   - Predict the output (type exact output)
//  'interview' - Open-ended technical interview (self-evaluated with checklist)

const QUESTIONS_BANK = ${JSON.stringify(sortedQBank, null, 2)};

const QUICK_REVISION_BANK = ${JSON.stringify(sortedQRBank, null, 2)};
`;

  fs.writeFileSync(questionsFile, questionsOutput, 'utf8');
  console.log(`✅ questions.js updated successfully.\n`);

  // ── Step 5: Write practice.js ─────────────────────────────────────────────
  // The hand-written challenges are merged in here, so `practice.js` is the ONE place
  // challenges come from. They used to live in app.js, which meant the audit could not
  // see them and they would have silently missed the concept tagging. See
  // data/practice-challenges.js for the full reasoning.
  const curatedItems = CURATED_PRACTICE_CHALLENGES.map(ch => {
    const { verify, ...rest } = ch;
    // `source` lets the checks tell a hand-written challenge from a generated one. A
    // hand-written challenge has no .java file in src/, so there is nothing to check it
    // against, and saying "source file not found" would read like a fault.
    //
    // These carry concepts chosen by hand, so a match on one is precise.
    return {
      ...rest,
      source: 'curated',
      conceptsSource: 'topic',
      verifyFnStr: typeof verify === 'function' ? verify.toString() : null
    };
  });
  const generatedItems = buildPracticeChallenges(parsedData, finishedChapters);
  const challengesList = [...curatedItems, ...generatedItems];

  const practiceFile = path.join(dashboardDir, 'practice.js');

  const practiceItems = challengesList.map(ch => {
    const { verifyFnStr, ...rest } = ch;
    return { ...rest, hasVerify: !!verifyFnStr, verifyFnStr: verifyFnStr || null };
  });

  fs.writeFileSync(
    practiceFile,
    `// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.\n` +
    `//\n` +
    `// Holds BOTH kinds of challenge, so this is the single source for them:\n` +
    `//   - the hand-written ones from data/practice-challenges.js, first\n` +
    `//   - the generated ones from the author's *Challenge* and *Problem* files\n` +
    `// Every entry carries chapter and concepts. The audit enforces both.\n` +
    `const GENERATED_PRACTICE_CHALLENGES = ${JSON.stringify(practiceItems, null, 2)};\n`,
    'utf8'
  );
  console.log(`✅ practice.js regenerated with ${challengesList.length} challenges ` +
    `(${curatedItems.length} hand-written, ${generatedItems.length} generated).`);

  // ── Step 6: Write deep-challenges.js ──────────────────────────────────────
  // Nothing is generated for a chapter still being written, the same rule the questions
  // and the practice challenges follow. Chapter 15 happened to produce none, so this was
  // a latent gap rather than a visible one: the mechanism was ungated and would have
  // produced them as soon as its topics matched a trigger.
  const allDeepChallenges = [];
  chaptersList.forEach(chapter => {
    if (!finishedChapters.has(chapter.name)) return;
    const deepQs = buildDeepChallenges(chapter.name, chapter.topics);
    allDeepChallenges.push(...deepQs);
  });
  const deepFile = path.join(dashboardDir, 'deep-challenges.js');
  fs.writeFileSync(deepFile,
    `// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.\n` +
    `const DEEP_CHALLENGES = ${JSON.stringify(allDeepChallenges, null, 2)};\n`,
    'utf8'
  );
  console.log(`✅ deep-challenges.js regenerated with ${allDeepChallenges.length} deep challenges.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
