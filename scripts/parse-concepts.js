const fs = require('fs');
const path = require('path');

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

  allSourceLines.forEach((rawLine, lineIdx) => {
    const trimmed = rawLine.trim();

    if (trimmed.startsWith('//')) {
      // Skip @quiz / @answer / @challenge / @desc / @hint / @testcase marker lines
      if (/^\/\/\s*@(quiz|answer|challenge|desc|hint|testcase)\b/.test(trimmed)) {
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

  return { filePath: relativePath, fileName, topicName, chapter, subChapter, headerComments, inlineComments, customQuizzes, deepChallenges, code: content };
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

// Helper: create a simple slug for qid
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// ==========================================================================
// Tag assignment for quiz questions
// ==========================================================================
function assignTags(q) {
  const tags = [...(q.tags || [])];
  if (q.type === 'interview') tags.push('interview');
  if (q.type === 'predict') tags.push('predict');
  if (q.type === 'codefill') tags.push('codefill');
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
function buildOCJPQuestions(chapterName, topics) {
  const label = chapterName.toLowerCase();
  const questions = [];

  // ── String / Primitives ──────────────────────────────────────────────────
  if (label.includes('primitive') || label.includes('string')) {
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
  if (label.includes('operator')) {
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
  if (label.includes('oop') || label.includes('inherit') || label.includes('class') || label.includes('override') || label.includes('overload')) {
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
  if (label.includes('exception')) {
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
  if (label.includes('switch') || label.includes('statement') || label.includes('if')) {
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
  if (label.includes('loop') || label.includes('while') || label.includes('for')) {
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
  if (label.includes('method')) {
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

  return questions.map(q => {
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
  const targetKeywords = ['static', 'void', 'public', 'extends', 'implements', 'final', 'super', 'this', 'new', 'throws', 'class', 'interface', 'return', 'try', 'catch'];
  const questions = [];
  const quickRevision = buildQuickRevisionEntry(chapterName, topics);

  // Pre-collect all header comment lines per topic (index == topics array index)
  const allTopicNoteLines = topics.map(t => t.headerComments.flatMap(b => b.lines));

  const stopWords = new Set(['this', 'that', 'these', 'those', 'their', 'which', 'where', 'there', 'would', 'could', 'should', 'about', 'after', 'every', 'other', 'first', 'being', 'using']);
  const gotchaKeywords = ['important', 'note', 'pitfall', 'warning', 'caution', 'remember', 'avoid', 'careful', 'never', 'always'];
  // Meaningful fallback distractors for fill-blank and concept-scq
  // (never use raw Java types like 'Object'/'int' as distractors for conceptual questions)
  const conceptFallbacks = [
    'immutable', 'mutable', 'compiled', 'interpreted', 'inherited', 'overridden',
    'encapsulated', 'polymorphic', 'abstract', 'synchronized', 'serialized', 'generic'
  ];

  topics.forEach((topic, topicIndex) => {
    const topicLabel = topic.topicName || topic.fileName.replace('.java', '');
    const difficulty = topicIndex === 0 ? 'easy' : (topicIndex === topics.length - 1 ? 'hard' : 'medium');
    const lines = topic.code.split('\n');
    const topicNotes = allTopicNoteLines[topicIndex] || [];

    // ---- Existing 5 question types (qid added) ----------------------------------------

    // Helper: does a line look like actual Java code (not just prose/comment text)?
    // Must have Java syntax chars in the code portion (before //)
    const isCodeLine = (line) => {
      const codePart = line.split('//')[0];
      return /[=();{}\[\]]/.test(codePart);
    };
    // Helper: is keyword in the code part (before //) rather than a comment?
    const kwInCode = (line, kw) => {
      const codePart = line.split('//')[0];
      return new RegExp(`\\b${kw}\\b`).test(codePart);
    };

    // Scan lines with block-comment awareness
    let inBlockComment = false;
    let keywordLine = null;
    let keyword = null;
    let classDeclarationLine = null;
    let classKeyword = null;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      // Track block comment state
      if (!inBlockComment && (trimmed.startsWith('/*') || trimmed.includes('/*'))) inBlockComment = true;
      if (inBlockComment) {
        if (trimmed.endsWith('*/') || trimmed.includes('*/')) inBlockComment = false;
        continue;
      }
      if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.length === 0) continue;
      const kw = targetKeywords.find(k => kwInCode(line, k));
      if (kw && isCodeLine(line)) {
        // Keep the first keyword line found as class-level fallback
        if (!classDeclarationLine) { classDeclarationLine = line; classKeyword = kw; }
        // Prefer lines that are NOT just the class/main declaration (skip `public class Foo {`)
        if (/\bclass\s+\w+\s*\{/.test(line) || /\bclass\s+\w+\s+extends/.test(line) || /\bclass\s+\w+\s+implements/.test(line)) continue;
        // Skip "public static void main" — too trivial
        if (/public\s+static\s+void\s+main/.test(line)) continue;
        keyword = kw;
        keywordLine = line;
        break;
      }
    }

    // If no better line found, fall back to class declaration
    if (!keywordLine) {
      keyword = classKeyword || 'class';
      keywordLine = classDeclarationLine || `public ${keyword} ${topic.fileName.replace('.java', '')} {`;
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

    // Find a DIFFERENT code line for codefill (avoid duplicating the SCQ)
    // Must be actual Java code (not prose/comment), keyword must appear in code part
    let codefillLine = null;
    let codefillKeyword = null;
    inBlockComment = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line === keywordLine) continue; // skip SCQ line
      const trimmed = line.trim();
      // Block comment tracking
      if (!inBlockComment && (trimmed.startsWith('/*') || trimmed.includes('/*'))) inBlockComment = true;
      if (inBlockComment) {
        if (trimmed.endsWith('*/') || trimmed.includes('*/')) inBlockComment = false;
        continue;
      }
      if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.length === 0) continue;
      const kw = targetKeywords.find(k => kwInCode(line, k));
      if (kw && isCodeLine(line)) {
        if (/\bclass\s+\w+\s*[\{<]/.test(line)) continue;
        if (/public\s+static\s+void\s+main/.test(line)) continue;
        codefillKeyword = kw;
        codefillLine = line;
        break;
      }
    }

    if (codefillLine && codefillKeyword && codefillLine.trim() !== keywordLine.trim()) {
      questions.push({
        type: 'codefill',
        qid: makeQid(chapterName, topicLabel, 'codefill', 2),
        difficulty: difficulty,
        chapter: chapterName,
        topic: topicLabel,
        question: `Complete the missing keyword in this snippet from "${topic.fileName}".`,
        code: codefillLine.replace(new RegExp(`\\b${codefillKeyword}\\b`, 'g'), '___'),
        answer: [codefillKeyword],
        explanation: `The missing keyword is '${codefillKeyword}', taken from the parsed source for ${topic.fileName}.`
      });
    }

    // Predict: only add if there's a real println with a STATIC string literal (no variable concatenation)
    // Also skip comment lines and block comments
    let printLine = null;
    let printAnswer = null;
    inBlockComment = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!inBlockComment && (trimmed.startsWith('/*') || trimmed.includes('/*'))) inBlockComment = true;
      if (inBlockComment) {
        if (trimmed.endsWith('*/') || trimmed.includes('*/')) inBlockComment = false;
        continue;
      }
      if (trimmed.startsWith('//') || trimmed.startsWith('*')) continue;
      if (!trimmed.includes('System.out.println')) continue;
      // Match println with only a string literal (no + concatenation with variables)
      const pureStringMatch = trimmed.match(/System\.out\.println\(\s*"([^"]{5,})"\s*\)/);
      if (pureStringMatch) {
        const val = pureStringMatch[1];
        if (val === `${chapterLabel} - ${topicLabel}`) continue; // skip auto-generated echo
        printLine = trimmed;
        printAnswer = val;
        break;
      }
    }

    if (printLine && printAnswer) {
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
    }

    const topicHeaderLines = topic.headerComments.flatMap(block => block.lines)
      .filter(l => l && l.length > 5 && !l.startsWith('@'));
    const topicModelAnswer = topicHeaderLines.slice(0, 3).join(' ') ||
      `This topic covers ${topicLabel}. Refer to the source file for implementation details.`;

    questions.push({
      type: 'interview',
      qid: makeQid(chapterName, topicLabel, 'interview', 4),
      difficulty: 'hard',
      chapter: chapterName,
      topic: topicLabel,
      question: `Explain the main ideas in ${topicLabel}.`,
      modelAnswer: topicModelAnswer,
      keyPoints: topicHeaderLines.slice(0, 3).length > 0
        ? topicHeaderLines.slice(0, 3)
        : [`This topic covers ${topicLabel}. Refer to the source file for implementation details.`],
      explanation: `Use the source comments and code structure to summarize the topic clearly.`
    });

    // ---- @quiz / @answer custom questions from Java source comments -----------
    (topic.customQuizzes || []).forEach(q => {
      questions.push({
        type: 'interview',
        difficulty: 'medium',
        chapter: chapterName,
        topic: topicLabel,
        tags: ['interview'],
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
      const genericDistr = conceptFallbacks.filter(d => d !== currentFirstBullet);
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

    // B. Multi-select True/False MCQ (only when topic has enough notes to provide quality distractors)
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
    // Require at least 3 true notes AND 2 plausible false statements — avoids low-quality MCQs for thin topics
    if (trueOptions.length >= 3 && falseOptions.length >= 2) {
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
      const genFillDistr = conceptFallbacks.filter(d => d !== fillWord);
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

  return questions.map(q => assignTags(q));
}

// ==========================================================================
// Build practice challenges from *Challenge*.java files
// ==========================================================================
function buildPracticeChallenges(parsedData) {
  const challenges = [];

  for (const topic of parsedData) {
    if (!topic.fileName.toLowerCase().includes('challenge')) continue;

    const code = topic.code;
    const fileName = topic.fileName.replace('.java', '');

    // Slugify
    const slug = fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

    // Human-readable title
    const title = fileName
      .replace(/CodingChallenge$/, '')
      .replace(/Challenge$/, '')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\s+/g, ' ');

    // Difficulty based on chapter number
    const chNum = parseInt(topic.chapter.match(/Chapter\s+(\d+)/)?.[1] || '5', 10);
    const difficulty = chNum <= 7 ? 'Easy' : chNum <= 10 ? 'Medium' : 'Hard';

    // Problem description from header comments
    const descLines = topic.headerComments.flatMap(b => b.lines);
    const descHtml = descLines.length > 0
      ? '<p>' + descLines.join('</p><p>') + '</p>'
      : `<p>Implement the method in <code>${topic.fileName}</code>. Read the source code for details.</p>`;

    // Find first non-main public static method
    const methodRegex = /public\s+static\s+(\w[\w<>\[\]]*)\s+(\w+)\s*\(([^)]*)\)\s*(?:throws\s+[\w,\s]+)?\s*\{/g;
    let methodMatch = null;
    let m;
    while ((m = methodRegex.exec(code)) !== null) {
      if (m[2] !== 'main') { methodMatch = m; break; }
    }

    if (!methodMatch) continue; // Skip if no suitable method found

    const returnType = methodMatch[1];
    const methodName = methodMatch[2];
    const params = methodMatch[3];

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

    // Extract test cases from comments
    const testCases = [];
    const commentText = topic.headerComments.flatMap(b => b.lines).join('\n');
    const rawCode = code;

    // Pattern: methodName(args) → should return value X  OR  → X
    const testPattern = new RegExp(
      methodName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
      '\\s*\\(([^)]+)\\)[^\\n→\\-]*[→\\->]+[^\\n]*?(-?[\\d.]+|true|false|"[^"]*")',
      'g'
    );
    let tm;
    while ((tm = testPattern.exec(commentText)) !== null && testCases.length < 4) {
      try {
        const rawArgs = tm[1].split(',').map(a => {
          const v = a.trim();
          if (v === 'true') return true;
          if (v === 'false') return false;
          if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
          if (/^-?\d+$/.test(v)) return parseInt(v, 10);
          return v.replace(/^["']|["']$/g, '');
        });
        let rawExpected = tm[2].trim();
        let expected;
        if (rawExpected === 'true') expected = true;
        else if (rawExpected === 'false') expected = false;
        else if (/^-?\d+$/.test(rawExpected)) expected = parseInt(rawExpected, 10);
        else if (/^-?\d+\.\d+$/.test(rawExpected)) expected = parseFloat(rawExpected);
        else expected = rawExpected.replace(/^["']|["']$/g, '');
        testCases.push({ args: rawArgs, expected });
      } catch (e) { /* skip malformed */ }
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

    const selfCheck = returnType === 'void' || testCases.length === 0 ||
      testCases.every(tc => tc.expected === null);

    // Build verifyFn string (evaluated in browser context)
    let verifyFnStr = null;
    if (!selfCheck && paramNames.length > 0) {
      const argAccess = paramNames.map((_, i) => `testCase.args[${i}]`).join(', ');
      const paramQuoted = paramNames.map(p => `"${p}"`).join(', ');
      verifyFnStr = `function(userCode, testCase) {
        try {
          const body = extractMethodBody(userCode, "${methodName}");
          const fn = new Function(${paramQuoted}, body);
          const result = fn(${argAccess});
          return result === testCase.expected;
        } catch(e) { return false; }
      }`;
    }

    challenges.push({
      id: slug,
      title: title.trim(),
      difficulty,
      chapter: topic.chapter,
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

  if (label.includes('method')) {
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

  if (label.includes('oop') || label.includes('class') || label.includes('inherit')) {
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

  if (label.includes('exception')) {
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

  if (label.includes('loop') || label.includes('while') || label.includes('for')) {
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

  if (label.includes('switch') || label.includes('if') || label.includes('statement')) {
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

  if (label.includes('primitive') || label.includes('string')) {
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

  // Sort topics within each chapter by sub-chapter number extracted from filePath
  chaptersList.forEach(chapter => {
    chapter.topics.sort((a, b) => {
      const subNumA = parseInt(a.filePath.match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      const subNumB = parseInt(b.filePath.match(/Sub_Chapter_(\d+)/)?.[1] || '0', 10);
      if (subNumA !== subNumB) return subNumA - subNumB;
      return a.filePath.localeCompare(b.filePath);
    });
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
    const starterQs = buildStarterQuestions(chName, chapter.topics);
    const ocjpQs = buildOCJPQuestions(chName, chapter.topics);
    sortedQBank[chName] = [...starterQs, ...ocjpQs];
    console.log(`  🃏 Regenerated Quick Revision and question sets for: ${chName} (${sortedQBank[chName].length} questions, ${ocjpQs.length} OCJP)`);
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
  const challengesList = buildPracticeChallenges(parsedData);
  const practiceFile = path.join(dashboardDir, 'practice.js');

  const practiceItems = challengesList.map(ch => {
    const { verifyFnStr, ...rest } = ch;
    return { ...rest, hasVerify: !!verifyFnStr, verifyFnStr: verifyFnStr || null };
  });

  fs.writeFileSync(
    practiceFile,
    `// Auto-generated. Do NOT edit manually — run 'npm run revise' to regenerate.\nconst GENERATED_PRACTICE_CHALLENGES = ${JSON.stringify(practiceItems, null, 2)};\n`,
    'utf8'
  );
  console.log(`✅ practice.js regenerated with ${challengesList.length} challenges.`);

  // ── Step 6: Write deep-challenges.js ──────────────────────────────────────
  const allDeepChallenges = [];
  chaptersList.forEach(chapter => {
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

main();
