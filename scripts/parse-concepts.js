const fs = require('fs');
const path = require('path');

// ==========================================================================
// Helper: Recursively list all .java files
// ==========================================================================
function getJavaFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
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

// ==========================================================================
// Helper: Parse a Java file into structured data
// ==========================================================================
function parseJavaFile(filePath, rootDir) {
  const content = fs.readFileSync(filePath, 'utf8');
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
    const alphaNums = (n.match(/[A-Za-z0-9]/g) || []).length;
    if (alphaNums / n.length < 0.30) return false;
    return true;
  }

  // Returns true if a line is commented-out code rather than an explanation.
  function isCodeFragment(line) {
    const n = line.trim();
    if (!n) return false;
    // Pure annotation
    if (/^@\w+(\(.*\))?$/.test(n)) return true;
    // Lines with unmatched brace or braces only
    if (/^\s*[{}]\s*$/.test(n)) return true;
    if (/^[A-Za-z_][\w$.]*\s*[({][^)]*[)};]*$/.test(n) && /[{};]/.test(n) && !/\s[a-z]{4,}/.test(n)) return true;
    // Ends with semicolon and starts with code keyword or call
    if (/;\s*$/.test(n) && /^(super|this|System|new|return|throw|[a-z_][a-zA-Z0-9_.]*\s*\()/.test(n)) return true;
    // Pure method call  bark();  super();
    if (/^[A-Za-z_][\w$.]*\s*\([^)]*\)\s*;$/.test(n)) return true;
    // Java access-modifier declarations
    if (/^(public|private|protected)\s+(static\s+|final\s+)?[\w<>\[\],\s]+\s+\w+\s*[({]/.test(n)) return true;
    // Starts with another comment marker
    if (/^\/\//.test(n)) return true;
    return false;
  }

  // Joins lines where the previous line is clearly a continuation (ends with comma
  // or ends without sentence-ending punctuation and the next line starts lowercase).
  function joinContinuationLines(lines) {
    if (lines.length <= 1) return lines;
    const result = [];
    let acc = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!acc) { acc = line; continue; }

      const startsNewItem = /^\d+[\).]/.test(line) || /^[-*•]/.test(line);
      const accEndsPunctuation = /[.!?]$/.test(acc) || /:-?$/.test(acc);
      const accEndsComma = /,\s*$/.test(acc);
      const nextStartsLower = /^[a-z]/.test(line);

      if (startsNewItem) {
        result.push(acc);
        acc = line;
      } else if (accEndsComma) {
        // Continuation after comma (unless next is a numbered item — already handled)
        acc = acc.trimEnd() + ' ' + line;
      } else if (!accEndsPunctuation && nextStartsLower) {
        // Incomplete line, continuation starts lowercase → join
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

  // Extracts and cleans block comments from a text region.
  function extractBlockComments(text) {
    const re = /\/\*([\s\S]*?)\*\//g;
    const results = [];
    let m;
    while ((m = re.exec(text)) !== null) {
      const rawLines = m[1].split('\n')
        .map(l => l.replace(/^\s*\*\s?/, '').trim())
        .filter(isMeaningfulLine)
        // Lines containing '//' inside a block comment are code examples, not prose.
        .filter(l => !l.includes('//'))
        // Lines with braces or ending semicolons are code examples.
        .filter(l => !/[{}]/.test(l))
        .filter(l => !/;\s*$/.test(l));
      const joined = joinContinuationLines(rawLines).map(fixTrailingComma);
      if (joined.length > 0) {
        results.push({ type: 'block', lines: joined });
      }
    }
    return results;
  }

  // ---- build header comments --------------------------------------------------

  const headerComments = [];

  // Block comments before the class declaration
  headerComments.push(...extractBlockComments(headerContent));

  // Line comments before the class declaration (strip block-comment regions first)
  const cleanHeader = headerContent.replace(/\/\*([\s\S]*?)\*\//g, '');
  const rawLineComments = cleanHeader.split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('//'))
    .map(l => l.replace(/^\/\/\s*/, '').replace(/^\/\/\s*/, '').trim())  // strip nested //
    .filter(l => !/https?:\/\//.test(l))   // skip URL-only reference lines
    .filter(isMeaningfulLine)
    .filter(l => !isCodeFragment(l));
  const joinedLineComments = joinContinuationLines(rawLineComments).map(fixTrailingComma);
  if (joinedLineComments.length > 0) {
    headerComments.push({ type: 'lines', lines: joinedLineComments });
  }

  // Fallback: try block comments inside the class body when header has nothing.
  if (headerComments.length === 0 && match) {
    const bodyComments = extractBlockComments(content.substring(match.index));
    headerComments.push(...bodyComments);
  }

  // ---- collect inline comments ------------------------------------------------
  // Group consecutive // comment lines so multi-line explanations get joined.

  const allSourceLines = content.split('\n');
  const inlineGroups = [];
  let currentGroup = null;

  // ---- parse @quiz / @answer markers -----------------------------------------
  // Syntax:  // @quiz  <question text>
  //          // @answer <answer line>   (one or more lines)
  // These are excluded from Key Takeaway bullets and added to the quiz bank.
  const customQuizzes = [];
  let currentQuiz = null;
  for (const rawLine of allSourceLines) {
    const trimmed = rawLine.trim();
    if (/^\/\/\s*@quiz\s+/.test(trimmed)) {
      if (currentQuiz && currentQuiz.answers.length > 0) customQuizzes.push(currentQuiz);
      currentQuiz = { question: trimmed.replace(/^\/\/\s*@quiz\s+/, '').trim(), answers: [] };
    } else if (/^\/\/\s*@answer\s+/.test(trimmed) && currentQuiz) {
      currentQuiz.answers.push(trimmed.replace(/^\/\/\s*@answer\s+/, '').trim());
    } else if (currentQuiz && currentQuiz.answers.length > 0 && !/^\/\//.test(trimmed) && trimmed !== '') {
      // Non-comment, non-blank line after answers closes the quiz entry
      customQuizzes.push(currentQuiz);
      currentQuiz = null;
    }
  }
  if (currentQuiz && currentQuiz.answers.length > 0) customQuizzes.push(currentQuiz);

  allSourceLines.forEach((rawLine, lineIdx) => {
    const trimmed = rawLine.trim();

    if (trimmed.startsWith('//')) {
      // Skip @quiz / @answer marker lines — they belong to the quiz bank, not notes
      if (/^\/\/\s*@(quiz|answer)\b/.test(trimmed)) {
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

      if (!isMeaningfulLine(text) || isCodeFragment(text)) {
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
        if (isMeaningfulLine(text) && !isCodeFragment(text)) {
          inlineGroups.push({ lines: [text], endLine: lineIdx });
        }
      } else if (trimmed === '') {
        // blank line — group already closed above
      }
      // non-comment, non-blank code line also closes group (already done above)
    }
  });
  if (currentGroup) inlineGroups.push(currentGroup);

  // Flatten groups, join continuations, deduplicate
  const headerLineSet = new Set(headerComments.flatMap(b => b.lines));
  const seenInline = new Set();
  const inlineComments = [];
  for (const group of inlineGroups) {
    const joined = joinContinuationLines(group.lines);
    for (const line of joined) {
        const cleanLine = fixTrailingComma(line);
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

  return { filePath: relativePath, fileName, topicName, chapter, subChapter, headerComments, inlineComments, customQuizzes, code: content };
}

// ==========================================================================
// Auto-generate QUICK_REVISION_BANK entry from parsed chapter topics
// ==========================================================================
function buildQuickRevisionEntry(chapterName, topics) {
  const gotchaKeywords = ['gotcha', 'pitfall', 'warning', 'caution', 'error', 'note', 'remember', 'important', 'trick', 'overflow', 'avoid', 'careful', 'trap'];
  const takeaways = [];
  const gotchas = [];
  const codeSnippets = [];
  const badges = new Set();

  topics.forEach(topic => {
    // Collect lines from header comments
    topic.headerComments.forEach(block => {
      block.lines.forEach(line => {
        if (line.length < 10) return;
        const lowerLine = line.toLowerCase();
        const isGotcha = gotchaKeywords.some(kw => lowerLine.includes(kw));
        if (isGotcha) {
          if (gotchas.length < 4) gotchas.push(line);
        } else {
          if (takeaways.length < 6) takeaways.push(line);
        }
      });
    });

    // Extract class/method signature badges
    const sigRegex = /\b(public|private|protected)?\s*(static\s+)?(\w+)\s+(\w+)\s*\([^)]*\)\s*\{/g;
    let sigMatch;
    while ((sigMatch = sigRegex.exec(topic.code)) !== null) {
      const name = sigMatch[4];
      if (!['if', 'while', 'for', 'switch', 'catch'].includes(name)) {
        badges.add(name);
      }
    }

    // Extract first code sample
    if (codeSnippets.length === 0 && topic.code) {
      const lines = topic.code.split('\n');
      const startIdx = lines.findIndex(l => l.trim().startsWith('public class') || l.trim().startsWith('class '));
      if (startIdx !== -1) {
        codeSnippets.push(lines.slice(startIdx, Math.min(startIdx + 10, lines.length)).join('\n').trim());
      }
    }
  });

  // Fallbacks if no comments found
  if (takeaways.length === 0) {
    takeaways.push(`Study the ${chapterName} concepts and their practical applications.`);
    takeaways.push(`Review variable declarations, method signatures, and access modifiers.`);
  }
  if (gotchas.length === 0) {
    gotchas.push(`Always be aware of scope, type constraints, and compiler rules in this area.`);
  }

  const syntax = codeSnippets[0] || `// See source files in ${chapterName}`;
  const badgeList = Array.from(badges).slice(0, 5);

  return { takeaways, gotchas, syntax, badges: badgeList };
}

// ==========================================================================
// Helper: Stable question ID generator
// ==========================================================================
function makeQid(chapter, topic, type, index) {
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  return `${slug(chapter)}_${slug(topic)}_${type}_${index}`;
}

function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

// ==========================================================================
// Auto-generate starter QUESTIONS_BANK entries from current chapter topics
// ==========================================================================
function buildStarterQuestions(chapterName, topics) {
  const chapterLabel = chapterName.replace(/Chapter \d+: /, '');
  const targetKeywords = ['static', 'void', 'public', 'extends', 'implements', 'final', 'super', 'this', 'new', 'throws', 'class', 'interface', 'return', 'try', 'catch'];
  const questions = [];
  const quickRevision = buildQuickRevisionEntry(chapterName, topics);

  // Pre-collect all header comment lines per topic (index == topics array index)
  const allTopicNoteLines = topics.map(t => t.headerComments.flatMap(b => b.lines));

  const stopWords = new Set(['this', 'that', 'these', 'those', 'their', 'which', 'where', 'there', 'would', 'could', 'should', 'about', 'after', 'every', 'other', 'first', 'being', 'using']);
  const gotchaKeywords = ['important', 'note', 'pitfall', 'warning', 'caution', 'remember', 'avoid', 'careful', 'never', 'always'];

  topics.forEach((topic, topicIndex) => {
    const topicLabel = topic.topicName || topic.fileName.replace('.java', '');
    const difficulty = topicIndex === 0 ? 'easy' : (topicIndex === topics.length - 1 ? 'hard' : 'medium');
    const lines = topic.code.split('\n');
    const topicNotes = allTopicNoteLines[topicIndex] || [];

    // ---- Existing 5 question types (qid added) ----------------------------------------

    let keywordLine = null;
    let keyword = null;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.length === 0) continue;
      keyword = targetKeywords.find(k => new RegExp(`\\b${k}\\b`).test(line));
      if (keyword) {
        keywordLine = line;
        break;
      }
    }

    if (!keywordLine) {
      keyword = 'class';
      keywordLine = `public ${keyword} ${topic.fileName.replace('.java', '')} {`;
    }

    const masked = keywordLine.replace(new RegExp(`\\b${keyword}\\b`, 'g'), '___');
    const distractors = targetKeywords.filter(k => k !== keyword).slice(0, 3);
    const scqOptions = [keyword, ...distractors];

    questions.push({
      type: 'scq',
      qid: makeQid(chapterName, topicLabel, 'scq', 0),
      difficulty: 'easy',
      chapter: chapterName,
      topic: topicLabel,
      question: `Which Java keyword correctly fills in the blank in this code from "${topic.fileName}"?\n\n${masked.trim()}`,
      options: scqOptions,
      answer: scqOptions.indexOf(keyword),
      explanation: `The correct keyword is '${keyword}'. It fits the syntax and semantics of this Java statement.`
    });

    const topicStatements = [
      { text: `This topic belongs to ${chapterLabel}.`, truth: true },
      { text: `Its source file is ${topic.fileName}.`, truth: true },
      { text: `This topic has ${topic.inlineComments.length} inline annotation${topic.inlineComments.length === 1 ? '' : 's'}.`, truth: true },
      { text: `This topic has no Java source code.`, truth: false }
    ];

    questions.push({
      type: 'mcq',
      qid: makeQid(chapterName, topicLabel, 'mcq', 1),
      difficulty: 'medium',
      chapter: chapterName,
      topic: topicLabel,
      question: `Which of the following statements about ${topicLabel} are correct? (Select all that apply)`,
      options: topicStatements.map(item => item.text),
      answer: topicStatements.map((item, idx) => item.truth ? idx : -1).filter(idx => idx >= 0),
      explanation: `The correct statements come directly from the parsed source metadata for ${topic.fileName}.`
    });

    const codeFillAnswer = keyword || 'class';
    questions.push({
      type: 'codefill',
      qid: makeQid(chapterName, topicLabel, 'codefill', 2),
      difficulty: difficulty,
      chapter: chapterName,
      topic: topicLabel,
      question: `Complete the missing keyword in this snippet from "${topic.fileName}".`,
      code: keywordLine.replace(new RegExp(`\\b${codeFillAnswer}\\b`, 'g'), '___'),
      answer: [codeFillAnswer],
      explanation: `The missing keyword is '${codeFillAnswer}', taken from the parsed source for ${topic.fileName}.`
    });

    let printLine = lines.find(line => line.includes('System.out.println'));
    let printAnswer = `${chapterLabel} - ${topicLabel}`;
    if (printLine) {
      const literalMatch = printLine.match(/"([^"]*)"/);
      if (literalMatch) {
        printAnswer = literalMatch[1];
      } else {
        printLine = `System.out.println("${chapterLabel} - ${topicLabel}");`;
        printAnswer = `${chapterLabel} - ${topicLabel}`;
      }
    } else {
      printLine = `System.out.println("${chapterLabel} - ${topicLabel}");`;
    }

    questions.push({
      type: 'predict',
      qid: makeQid(chapterName, topicLabel, 'predict', 3),
      difficulty: difficulty,
      chapter: chapterName,
      topic: topicLabel,
      question: `What does this code print?`,
      code: printLine,
      answer: [printAnswer],
      explanation: `The output comes directly from the string literal in the println call.`
    });

    questions.push({
      type: 'interview',
      qid: makeQid(chapterName, topicLabel, 'interview', 4),
      difficulty: 'hard',
      chapter: chapterName,
      topic: topicLabel,
      question: `Explain the main ideas in ${topicLabel}.`,
      modelAnswer: [
        ...(topic.headerComments.flatMap(block => block.lines).slice(0, 2)),
        ...(quickRevision.gotchas.slice(0, 1))
      ].join(' '),
      keyPoints: [
        ...(topic.headerComments.flatMap(block => block.lines).slice(0, 2)),
        ...(quickRevision.gotchas.slice(0, 1))
      ],
      explanation: `Use the source comments and code structure to summarize the topic clearly.`
    });

    // ---- @quiz / @answer custom questions from Java source comments -----------
    (topic.customQuizzes || []).forEach(q => {
      questions.push({
        type: 'interview',
        difficulty: 'medium',
        chapter: chapterName,
        topic: topicLabel,
        question: q.question,
        modelAnswer: q.answers.join(' '),
        keyPoints: q.answers,
        explanation: `This question was authored directly in the source file using @quiz/@answer markers.`
      });
    });

    // ---- New question types A–F ------------------------------------------------

    // A. Concept SCQ from notes
    const currentFirstBullet = topicNotes[0];
    if (currentFirstBullet && currentFirstBullet.length > 10) {
      const otherBullets = [];
      for (let i = 0; i < topics.length; i++) {
        if (i === topicIndex) continue;
        const otLines = allTopicNoteLines[i] || [];
        if (otLines.length > 0 && otLines[0] && otLines[0].length > 10 && otLines[0] !== currentFirstBullet) {
          otherBullets.push(otLines[0]);
        }
        if (otherBullets.length >= 3) break;
      }
      const genericDistr = ['Object', 'null', 'void', 'int'];
      let gdi = 0;
      while (otherBullets.length < 3 && gdi < genericDistr.length) {
        if (!otherBullets.includes(genericDistr[gdi])) otherBullets.push(genericDistr[gdi]);
        gdi++;
      }
      const conceptOptions = shuffleArr([currentFirstBullet, ...otherBullets.slice(0, 3)]);
      const conceptAnswer = conceptOptions.indexOf(currentFirstBullet);
      if (conceptAnswer >= 0) {
        questions.push({
          type: 'scq',
          qid: makeQid(chapterName, topicLabel, 'concept-scq', 5),
          difficulty: 'easy',
          chapter: chapterName,
          topic: topicLabel,
          question: `Which statement best describes ${topicLabel}?`,
          options: conceptOptions,
          answer: conceptAnswer,
          explanation: `This is drawn directly from the notes for ${topicLabel}.`
        });
      }
    }

    // B. Multi-select True/False MCQ
    const trueOptions = topicNotes.slice(0, 3).filter(l => l && l.length > 10);
    const falseOptions = [];
    for (let i = 0; i < topics.length; i++) {
      if (i === topicIndex) continue;
      const otLines = allTopicNoteLines[i] || [];
      if (otLines.length > 0 && otLines[0] && otLines[0].length > 10) {
        falseOptions.push(otLines[0]);
        if (falseOptions.length >= 2) break;
      }
    }
    if (trueOptions.length >= 2 && falseOptions.length >= 1) {
      const selectedTrue = trueOptions.slice(0, Math.min(3, trueOptions.length));
      const selectedFalse = falseOptions.slice(0, Math.min(2, falseOptions.length));
      const allOpts = [...selectedTrue, ...selectedFalse];
      const shuffledOpts = shuffleArr(allOpts);
      const correctIndices = shuffledOpts
        .map((opt, idx) => selectedTrue.includes(opt) ? idx : -1)
        .filter(idx => idx >= 0);
      if (correctIndices.length > 0) {
        questions.push({
          type: 'mcq',
          qid: makeQid(chapterName, topicLabel, 'true-false-mcq', 5),
          difficulty: 'medium',
          chapter: chapterName,
          topic: topicLabel,
          question: `Which of the following are TRUE about ${topicLabel}? Select all that apply.`,
          options: shuffledOpts,
          answer: correctIndices,
          explanation: `The true statements are taken directly from the notes for ${topicLabel}.`
        });
      }
    }

    // C. Note fill-blank SCQ
    let fillBlankGenerated = false;
    for (const noteLine of topicNotes) {
      if (fillBlankGenerated) break;
      if (!noteLine || noteLine.length < 15) continue;
      const words = noteLine.split(/\s+/);
      let fillWord = null;
      for (const w of words) {
        const clean = w.replace(/[^a-zA-Z]/g, '');
        if (clean.length >= 5 && !stopWords.has(clean.toLowerCase())) {
          fillWord = clean;
          break;
        }
      }
      if (!fillWord) continue;
      const blanked = noteLine.replace(new RegExp(`\\b${fillWord}\\b`), '___');
      if (blanked === noteLine) continue;

      const fillDistractors = [];
      outer: for (let i = 0; i < topics.length; i++) {
        if (i === topicIndex) continue;
        const otLines = allTopicNoteLines[i] || [];
        for (const ol of otLines) {
          if (!ol) continue;
          const otWords = ol.split(/\s+/);
          for (const ow of otWords) {
            const cleanOw = ow.replace(/[^a-zA-Z]/g, '');
            if (cleanOw.length >= 5 && !stopWords.has(cleanOw.toLowerCase()) && cleanOw !== fillWord && !fillDistractors.includes(cleanOw)) {
              fillDistractors.push(cleanOw);
              break;
            }
          }
          if (fillDistractors.length >= 3) break outer;
        }
      }
      const genFillDistr = ['Object', 'String', 'Integer', 'Array', 'Class', 'Method'];
      let gfi = 0;
      while (fillDistractors.length < 3 && gfi < genFillDistr.length) {
        if (!fillDistractors.includes(genFillDistr[gfi]) && genFillDistr[gfi] !== fillWord) {
          fillDistractors.push(genFillDistr[gfi]);
        }
        gfi++;
      }
      const fillOptions = shuffleArr([fillWord, ...fillDistractors.slice(0, 3)]);
      const fillAnswer = fillOptions.indexOf(fillWord);
      if (fillAnswer >= 0) {
        questions.push({
          type: 'scq',
          qid: makeQid(chapterName, topicLabel, 'fill-blank', 5),
          difficulty: 'medium',
          chapter: chapterName,
          topic: topicLabel,
          question: `Complete the blank: "${blanked}"`,
          options: fillOptions,
          answer: fillAnswer,
          explanation: `The missing word is '${fillWord}', from the notes for ${topicLabel}.`
        });
        fillBlankGenerated = true;
      }
    }

    // D. Gotcha SCQ
    const gotchaLine = topicNotes.find(l => l && gotchaKeywords.some(kw => l.toLowerCase().includes(kw)));
    if (gotchaLine) {
      const gotchaDistractors = [];
      for (let i = 0; i < topics.length; i++) {
        if (i === topicIndex) continue;
        const otLines = allTopicNoteLines[i] || [];
        for (const ol of otLines) {
          if (ol && ol !== gotchaLine && ol.length > 10 && !gotchaDistractors.includes(ol)) {
            gotchaDistractors.push(ol);
            break;
          }
        }
        if (gotchaDistractors.length >= 3) break;
      }
      const fallbacks = ['Always initialize variables before use.', 'Be careful with null references.', 'Avoid using raw types in generics.'];
      let fi = 0;
      while (gotchaDistractors.length < 3 && fi < fallbacks.length) {
        if (!gotchaDistractors.includes(fallbacks[fi])) gotchaDistractors.push(fallbacks[fi]);
        fi++;
      }
      const gotchaOptions = shuffleArr([gotchaLine, ...gotchaDistractors.slice(0, 3)]);
      const gotchaAnswer = gotchaOptions.indexOf(gotchaLine);
      if (gotchaAnswer >= 0) {
        questions.push({
          type: 'scq',
          qid: makeQid(chapterName, topicLabel, 'gotcha-scq', 5),
          difficulty: 'hard',
          chapter: chapterName,
          topic: topicLabel,
          question: `What is an important consideration when working with ${topicLabel}?`,
          options: gotchaOptions,
          answer: gotchaAnswer,
          explanation: `This is a key gotcha or note taken directly from the source for ${topicLabel}.`
        });
      }
    }

    // E. Method return type SCQ
    const methodRegex = /\b(public|private|protected)\s+(?:static\s+)?([A-Za-z_][\w<>\[\]]*)\s+(\w+)\s*\([^)]*\)\s*(?:throws\s+[\w,\s]+)?\s*\{/g;
    let methodMatch;
    while ((methodMatch = methodRegex.exec(topic.code)) !== null) {
      const returnType = methodMatch[2].trim();
      const methodName = methodMatch[3];
      if (returnType === 'void') continue;
      if (['if', 'while', 'for', 'switch', 'catch', 'class'].includes(methodName)) continue;
      // Skip constructors (name matches class file name)
      if (methodName === topic.fileName.replace('.java', '')) continue;

      const rtDistractors = ['void', 'int', 'String', 'boolean'].filter(d => d !== returnType).slice(0, 3);
      const rtOptions = shuffleArr([returnType, ...rtDistractors]);
      const rtAnswer = rtOptions.indexOf(returnType);
      if (rtAnswer >= 0) {
        questions.push({
          type: 'scq',
          qid: makeQid(chapterName, topicLabel, 'return-type', 5),
          difficulty: 'medium',
          chapter: chapterName,
          topic: topicLabel,
          question: `In ${topic.fileName}, what does the method ${methodName}() return?`,
          options: rtOptions,
          answer: rtAnswer,
          explanation: `The method ${methodName}() is declared with return type '${returnType}' in ${topic.fileName}.`
        });
      }
      break; // one per topic
    }

    // F. Class relation SCQ
    const extendsMatch = topic.code.match(/\bclass\s+(\w+)\s+extends\s+(\w+)/);
    const implementsMatch = !extendsMatch && topic.code.match(/\bclass\s+(\w+)\s+implements\s+(\w+)/);

    if (extendsMatch) {
      const className = extendsMatch[1];
      const parentName = extendsMatch[2];
      const crBase = [parentName, 'Object', 'Comparable', 'Runnable'].filter((v, i, a) => a.indexOf(v) === i);
      const crPadded = crBase.length >= 4 ? crBase.slice(0, 4)
        : [...crBase, ...['Serializable', 'Cloneable'].filter(d => !crBase.includes(d))].slice(0, 4);
      const crOptions = shuffleArr(crPadded);
      const crAnswer = crOptions.indexOf(parentName);
      if (crAnswer >= 0) {
        questions.push({
          type: 'scq',
          qid: makeQid(chapterName, topicLabel, 'class-relation', 5),
          difficulty: 'hard',
          chapter: chapterName,
          topic: topicLabel,
          question: `What does class ${className} extend?`,
          options: crOptions,
          answer: crAnswer,
          explanation: `${className} extends ${parentName} as declared in ${topic.fileName}.`
        });
      }
    } else if (implementsMatch) {
      const className = implementsMatch[1];
      const interfaceName = implementsMatch[2].trim();
      const crBase = [interfaceName, 'Object', 'Comparable', 'Runnable'].filter((v, i, a) => a.indexOf(v) === i);
      const crPadded = crBase.length >= 4 ? crBase.slice(0, 4)
        : [...crBase, ...['Serializable', 'Cloneable'].filter(d => !crBase.includes(d))].slice(0, 4);
      const crOptions = shuffleArr(crPadded);
      const crAnswer = crOptions.indexOf(interfaceName);
      if (crAnswer >= 0) {
        questions.push({
          type: 'scq',
          qid: makeQid(chapterName, topicLabel, 'class-relation', 5),
          difficulty: 'hard',
          chapter: chapterName,
          topic: topicLabel,
          question: `What interface does class ${className} implement?`,
          options: crOptions,
          answer: crAnswer,
          explanation: `${className} implements ${interfaceName} as declared in ${topic.fileName}.`
        });
      }
    }
  });

  return questions;
}

// ==========================================================================
// Main pipeline
// ==========================================================================
function main() {
  const rootDir = path.resolve(__dirname, '..');
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

  // ── Step 2: Write data.js ──────────────────────────────────────────────────
  if (!fs.existsSync(dashboardDir)) {
    fs.mkdirSync(dashboardDir, { recursive: true });
  }

  const dataFile = path.join(dashboardDir, 'data.js');
  fs.writeFileSync(dataFile, `// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.\nconst CONCEPTS_DATA = ${JSON.stringify(chaptersList, null, 2)};\n`, 'utf8');
  console.log(`✅ data.js regenerated with ${chaptersList.length} chapters.`);

  // ── Step 3: Rebuild generated question banks from the current source tree ─
  const sortedQBank = {};
  const sortedQRBank = {};

  chaptersList.forEach(chapter => {
    const chName = chapter.name;
    sortedQRBank[chName] = buildQuickRevisionEntry(chName, chapter.topics);
    sortedQBank[chName] = buildStarterQuestions(chName, chapter.topics);
    console.log(`  🃏 Regenerated Quick Revision and question sets for: ${chName}`);
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
}

main();
