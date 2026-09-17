const fs = require('fs');
const path = require('path');
const vm = require('vm');

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
    // Switch labels:  case 1:   case 'A':   case "x":   case ENUM_VALUE:   default:
    if (/^(case\s+([0-9]+|'\\?.'|"[^"]*"|[A-Za-z_$][\w$.]*)|default)\s*:\s*$/.test(n)) return true;
    // Starts with another comment marker
    if (/^\/\//.test(n)) return true;
    return false;
  }

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

      const startsNewItem = /^\d+[\).]/.test(line) || /^[-*•]/.test(line);
      const accEndsPunctuation = /[.!?]$/.test(acc) || /:-?$/.test(acc);
      const accEndsComma = /,\s*$/.test(acc);
      const nextStartsLower = /^[a-z]/.test(line);
      const endsWithConnector = /\b(?:as|and|or|but|because|with|from|to|of|for|in|on|is|are|the|a|an|that|which|when|if|than|into|while|until|this|its|their|same|nearly)$/i.test(acc.trim());

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

    const exactRewrites = [
      [/^String\.format\(String format, Object\.\.\. args\):\s*parameters mean the same as printf, but the formatted result is returned instead of printed\.?$/i,
        'String.format(String format, Object... args) accepts the same format string and replacement values as printf. Instead of printing the result to the console, it returns the completed text as a String, so you can store it, combine it with other text, or print it later.'],
      [/^A class can be described as\s*[:-]*$/i,
        'A class is a blueprint that defines the data and behavior that its objects will have.'],
      [/^Looping\s*[:-]*\s*Looping let us execute the code multiple number of times\.?$/i,
        'Looping lets a program execute the same block of code repeatedly while a condition remains true.'],
      [/^Value of the field always stays with the class$/i,
        'A static field has one shared value that belongs to the class, rather than a separate value for each object.'],
      [/^Creation of the object can be called as instantiation or instantiating a class\.?$/i,
        'Creating an object is called instantiation, or instantiating the class.'],
      [/^There is no limit on number of object one can create from a class\.?$/i,
        'A class can be used to create any number of objects, as long as the program has enough memory.'],
      [/^In its simplest form, it'?s the word new, followed by class name, and empty parenthesis\.?$/i,
        'In its simplest form, object creation uses the new keyword followed by the class name and parentheses, such as new Person().'],
      [/^The empty form, the class is the template for the data to be collected\.?$/i,
        'An empty form is like a class: it is a template that describes the data an object will hold.'],
      [/^The class provides a shape or framework that describes the object being created\.?$/i,
        'The class provides the structure and behavior that describe each object created from it.'],
      [/^Object and instance can be used interchangeably\.?$/i,
        'In everyday Java terminology, object and instance usually refer to the same created value.'],
      [/^A Class is like a blueprint\.?$/i,
        'A class is a blueprint that defines the fields and methods available on its objects.'],
      [/^Using blueprint, we can create as many objects that we want\.?$/i,
        'Using one class blueprint, a program can create as many objects as it needs.'],
      [/^Value of the field always stays with the class\s+iii\)\s*Value is accessed by ClassName\.fieldname\.?$/i,
        'A static field has one shared value for the class, and you access it through ClassName.fieldName.'],
      [/^iii\)\s*Value is accessed by ObjectVariable\.fieldname\.?$/i,
        'An instance field is accessed through an object reference, such as objectVariable.fieldName.'],
      [/^i\)\s*Storing counters\s+ii\)\s*Generating unique IDs\s+iii\)\s*Storing constant value that does not change\.\s*For example:\s*value of pi\s+iv\)\s*Creating and controlling access to a shared resource\.\s*For example:\s*log file, a database, input stream, output stream etc\.?$/i,
        'Common uses for static variables include counting objects, generating unique IDs, storing constants such as pi, and sharing resources such as log files, databases, or streams.'],
      [/^POJO parameter pattern to remember:\s*(.*)\s+For exactly one field\.?$/i,
        'POJO parameter pattern to remember: an all-arguments constructor receives one value for each field, while each setter receives the replacement value for exactly one field.']
    ];
    for (const [pattern, replacement] of exactRewrites) {
      if (pattern.test(clarified)) return bulletPrefix + replacement;
    }

    clarified = clarified
      .replace(/\s*:-\s*/g, ': ')
      .replace(/\bFor Ex\s*[:-]+/gi, 'For example:')
      .replace(/\bEx\s*:-\s*/gi, 'Example: ')
      .replace(/\bFor ex\s*[:-]+/gi, 'For example:')
      .replace(/\bdoesn't\b/gi, 'does not')
      .replace(/\bcan't\b/gi, 'cannot')
      .replace(/\bwon't\b/gi, 'will not')
      .replace(/\bshould return\b/gi, 'should return')
      .replace(/\bnumber of object\b/gi, 'number of objects')
      .replace(/\bmultiple number of times\b/gi, 'multiple times')
      .replace(/\bmethod is accessed by\b/gi, 'call the method through')
      .replace(/\bMethod is accessible by\b/gi, 'Call the method through')
      .replace(/\bbelong to Class\b/gi, 'belong to the class')
      .replace(/\bbelong to class\b/gi, 'belong to the class')
      .replace(/\bthe class itself\b/gi, 'the class')
      .replace(/\s{2,}/g, ' ')
      .trim();

    if (/^String\.format\(/i.test(clarified) && /formatted result is returned/i.test(clarified)) {
      return bulletPrefix + 'String.format accepts a format string and replacement values, then returns the completed text as a String instead of printing it immediately.';
    }
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
    // A genuine table row (cells separated by single pipes, not a || operator,
    // and not ending like a statement) is prose, never code. This keeps tables
    // whose rows start with System./type keywords from being split into code.
    if (isTableRow(t) && !/\|\|/.test(t) && !/[;{}]\s*$/.test(t)) return false;
    // A note can end with a semicolon, for example when it names a statement, and
    // it can be long. Judging only on the semicolon used to turn whole sentences
    // into code blocks, which split the author's notes apart. A line is treated as
    // code only when it also looks like a statement: a call, a keyword, or braces.
    const wordCount = t.split(/\s+/).filter(Boolean).length;
    // A line that only STARTS with a type name is not necessarily code: "char and
    // Unicode: ..." is a note, while "char c = 'D';" is a declaration. So a type
    // keyword counts only when it is followed by an identifier and then = ; or ,.
    const looksLikeStatement =
      /^[A-Za-z_$][\w$.]*\s*\(/.test(t) ||
      /^(System|new|return|throw|super|this|break|continue)\b/.test(t) ||
      /^(public|private|protected|static|final|void|class|interface)\b/.test(t) ||
      /^(int|long|double|float|boolean|char|String|StringBuilder|var)\s+[\w\[\]]+\s*(=|;|,)/.test(t) ||
      /^(if|for|while|switch|try|catch)\s*\(/.test(t) ||
      /^}?\s*else\b/.test(t) ||
      /^[-*•]\s*\w+\s*[=;]/.test(t);
    if (wordCount >= 8 && !looksLikeStatement && !/[{}]/.test(t)) return false;
    return /[{}]/.test(t) ||
      /;\s*(\/\/.*)?$/.test(t) ||
      isCodeFragment(t) ||
      /^(while|for|if|switch|try|catch)\s*\(/.test(t) ||
      /^}?\s*else\b/.test(t) ||
      /^(case\s+.+:|default:|break\s*;|continue\s*;|return\b|finally\b|System\.)/.test(t) ||
      /^(int|long|double|float|boolean|char|String|StringBuilder|var)\s+[\w\[\]]+\s*(=|;|,)/.test(t) ||
      /^[A-Z]\w*(?:<[^>]+>)?\s+\w+\s*(=|;)/.test(t) ||
      /^[a-zA-Z_$][\w$]*\s*(=|\+\+|--)/.test(t);
  }

  function appendProseSegments(lines, results, type = 'lines') {
    const meaningful = lines
      .map(l => l.trim())
      .filter(isMeaningfulLine)
      .filter(l => !/^@(quiz|answer|option|explain|why|code|challenge|desc|hint|testcase)\b/i.test(l))
      .filter(l => isTableRow(l) || !isCodeFragment(l));

    for (const seg of segmentTables(meaningful)) {
      if (seg.type === 'table') {
        results.push(seg);
      } else {
        const joined = joinContinuationLines(seg.lines).map(fixTrailingComma).map(clarifyNoteLine);
        if (joined.length > 0) results.push({ type, lines: joined });
      }
    }
  }

  function appendCodeSegment(lines, results) {
    const code = lines.join('\n').replace(/^\s+|\s+$/g, '');
    if (code) results.push({ type: 'code', language: 'java', code, lines: [] });
  }

  // Extract method and constructor parameters from the actual Java source so
  // every topic can explain the values its public API accepts. This is used
  // only as a fallback when a file does not already document its parameters.
  function extractParameterSignatures(source) {
    const withoutComments = source
      .replace(/\/\*[\s\S]*?\*\//g, ' ')
      .replace(/\/\/.*$/gm, '');
    const signatures = [];
    const signatureRegex = /^\s*(?:(?:public|private|protected|static|final|abstract|synchronized|native|strictfp)\s+)*(?:[\w$<>.,?\[\] ]+\s+)?([A-Za-z_$][\w$]*)\s*\(([^()]*)\)\s*(?:throws\s+[^\{]+)?\{/gm;
    const ignoredNames = new Set(['if', 'for', 'while', 'switch', 'catch', 'do', 'try', 'return']);

    const splitParameters = value => {
      const parts = [];
      let start = 0;
      let angleDepth = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] === '<') angleDepth++;
        else if (value[i] === '>') angleDepth = Math.max(0, angleDepth - 1);
        else if (value[i] === ',' && angleDepth === 0) {
          parts.push(value.slice(start, i).trim());
          start = i + 1;
        }
      }
      if (value.slice(start).trim()) parts.push(value.slice(start).trim());
      return parts;
    };

    let match;
    while ((match = signatureRegex.exec(withoutComments)) !== null) {
      const methodName = match[1];
      if (ignoredNames.has(methodName)) continue;
      const parameters = splitParameters(match[2]).map(parameter => {
        const cleaned = parameter
          .replace(/@\w+(?:\([^)]*\))?\s*/g, '')
          .replace(/\bfinal\s+/g, '')
          .trim();
        const nameMatch = cleaned.match(/([A-Za-z_$][\w$]*)\s*$/);
        if (!nameMatch) return null;
        const name = nameMatch[1];
        const type = cleaned.slice(0, nameMatch.index).trim() || 'value';
        return { name, type };
      }).filter(Boolean);
      // main(String[] args) is the JVM entry point, not part of the example's
      // teaching API. Keep it out of generated fallback notes unless the
      // author has explicitly documented it in the source comments.
      if (methodName === 'main' && parameters.length === 1 && parameters[0].name === 'args') continue;
      if (parameters.length) signatures.push({ methodName, parameters });
    }
    return signatures;
  }

  function parameterDescription(name, type, methodName) {
    const lower = name.toLowerCase();
    const typeLabel = type.replace(/\s+/g, ' ').trim();
    if (name === 'args') return `the command-line ${typeLabel} supplied to main; choose values only when this example needs launch-time input.`;
    const specificDescriptions = {
      celsius: `the Celsius temperature supplied to ${methodName}(); choose the temperature you want to convert, such as 25 for 25°C.`,
      fahrenheit: `the Fahrenheit temperature supplied to ${methodName}(); choose the temperature in degrees Fahrenheit.`,
      count: `the number of items or terms that ${methodName}() should process; choose a non-negative count and check the zero case.`,
      target: `the value that ${methodName}() must locate, compare, or classify; choose a value that exercises both matching and non-matching paths.`,
      score: `the score supplied to ${methodName}(); choose a value within the documented scoring range, including boundary values when testing conditions.`,
      year: `the calendar year supplied to ${methodName}(); choose a four-digit year and include leap-year boundaries when testing.`,
      month: `the month value supplied to ${methodName}(); choose a valid month number or name and test the invalid/default case too.`,
      radius: `the circle radius supplied to ${methodName}(); choose a non-negative measurement because area depends on radius squared.`,
      width: `the width supplied to ${methodName}(); choose a non-negative measurement that matches the unit used by the related dimensions.`,
      height: `the height supplied to ${methodName}(); choose a non-negative measurement that matches the unit used by the related dimensions.`,
      amount: `the numeric amount supplied to ${methodName}(); choose a value that respects the operation's limits, such as a non-negative deposit or a valid withdrawal.`,
      minutes: `the total minutes supplied to ${methodName}(); choose a non-negative duration so it can be converted into years and remaining days.`,
      temperature: `the temperature supplied to ${methodName}(); choose a value at or around the documented seasonal or comparison boundary.`,
      limit: `the upper limit supplied to ${methodName}(); choose a positive boundary that controls how far the algorithm iterates.`,
      size: `the requested size supplied to ${methodName}(); choose a positive dimension and test the smallest valid size.`,
      operator: `the operator supplied to ${methodName}(); choose one of the operators supported by the implementation and test the invalid case.`,
      expression: `the expression text supplied to ${methodName}(); choose input that follows the parser's supported format and include invalid input when testing.`,
      sequence: `the ${typeLabel} supplied to ${methodName}(); choose the generated or expected sequence whose elements the method should process.`,
      remaining: `the remaining value supplied to ${methodName}(); choose the unprocessed portion passed into the recursive step.`,
      reversed: `the reversed accumulator supplied to ${methodName}(); start with the neutral value and let each recursive step append the next digit.`,
      base: `the base value supplied to ${methodName}(); choose the number that will be raised to the requested exponent.`,
      exponent: `the exponent supplied to ${methodName}(); choose the power to apply and test zero, positive, and boundary values.`,
      minimum: `the lower bound supplied to ${methodName}(); choose the smallest accepted value in the validation range.`,
      maximum: `the upper bound supplied to ${methodName}(); choose the largest accepted value in the validation range.`,
      firstnumber: `the first numeric operand supplied to ${methodName}(); choose the first value in the comparison or calculation.`,
      secondnumber: `the second numeric operand supplied to ${methodName}(); choose the second value in the comparison or calculation.`,
      thirdnumber: `the third numeric operand supplied to ${methodName}(); choose the final value in the comparison or calculation.`
    };
    if (specificDescriptions[lower]) return specificDescriptions[lower];
    if (/^(first|second|third|left|right|a|b|x|y|z)$/.test(lower)) return `the ${lower} operand supplied to ${methodName}(); choose a value that represents this operation's ${lower} input.`;
    if (/count|size|limit|length|index|position|number|year|month|day|hour|minute|second|score|temperature|radius|width|height|amount|goal|capacity|target/.test(lower)) return `the ${typeLabel} input used by ${methodName}(); choose a value that matches the method's range and boundary rules.`;
    if (/flag|valid|summer|barking|enabled|open|closed|developer/.test(lower) || /^boolean$/i.test(typeLabel)) return `the boolean condition used by ${methodName}(); choose true or false to exercise the relevant branch.`;
    if (/text|string|name|title|author|isbn|input|expression|sentence|operator|unit|scenario|code/.test(lower) || /String/.test(typeLabel)) return `the ${typeLabel} text supplied to ${methodName}(); choose content that matches the method's expected format.`;
    if (/converter|function|predicate|mapper/.test(lower) || /FunctionalInterface|Operator|Function/.test(typeLabel)) return `the conversion or callback logic supplied to ${methodName}(); choose an implementation that matches the expected input and output types.`;
    return `the ${typeLabel} value supplied to ${methodName}(); choose a representative value, then test a boundary or invalid value to observe how the method responds.`;
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
  function addGeneratedParameterNotesDisabled() {
    const signatures = extractParameterSignatures(content);
    if (!signatures.length) return;

    const existingText = headerComments.flatMap(block => block.lines || []).join('\n');
    const parameterBlock = headerComments.find(block => (block.lines || []).some(line => /parameter notes/i.test(line)));
    const missingEntries = [];
    signatures.forEach(signature => {
      signature.parameters.forEach(parameter => {
        const parameterPattern = new RegExp(`\\b${parameter.name.replace(/[$]/g, '\\$&')}\\b`);
        if (!parameterBlock || !parameterPattern.test(existingText)) {
          missingEntries.push(`- ${parameter.name} (${signature.methodName}(${signature.parameters.map(p => `${p.type} ${p.name}`).join(', ')})): ${parameterDescription(parameter.name, parameter.type, signature.methodName)}`);
        }
      });
    });
    if (!missingEntries.length) return;

    if (parameterBlock) {
      const headingIndex = parameterBlock.lines.findIndex(line => /parameter notes/i.test(line));
      parameterBlock.lines.splice(headingIndex + 1, 0, ...missingEntries);
    } else {
      headerComments.push({
        type: 'generated-parameters',
        lines: [
          'Parameter notes (generated from the method signatures in this file):',
          ...missingEntries
        ]
      });
    }
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
        if (/^\/\/\s*@(quiz|answer|option|explain|why|code|challenge|desc|hint|testcase)\b/i.test(trimmed)) {
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
    .filter(l => !/^@(quiz|answer|option|explain|why|code|challenge|desc|hint|testcase)\b/i.test(l.trim()))
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

  allSourceLines.forEach((rawLine, lineIdx) => {
    const trimmed = rawLine.trim();

    if (trimmed.startsWith('//')) {
      // Skip @quiz / @answer / @challenge / @desc / @hint / @testcase marker lines
      if (/^\/\/\s*@(quiz|answer|option|explain|why|code|challenge|desc|hint|testcase)\b/.test(trimmed)) {
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
  const headerLineSet = new Set(headerComments.flatMap(b => b.lines || []));
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

  return { filePath: relativePath, fileName, topicName, chapter, subChapter, headerComments, inlineComments, customQuizzes, deepChallenges, code: content };
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

// Takes up to `limit` lines, one round at a time, so every topic is represented
// before any single topic contributes a second line.
function takeRoundRobin(buckets, limit) {
  const out = [];
  let round = 0;
  while (out.length < limit) {
    let added = 0;
    for (const bucket of buckets) {
      if (out.length >= limit) break;
      if (round < bucket.length) {
        out.push(bucket[round]);
        added++;
      }
    }
    if (added === 0) break;
    round++;
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
  return true;
}

// ==========================================================================
// Auto-generate QUICK_REVISION_BANK entry from parsed chapter topics
// ==========================================================================
function buildQuickRevisionEntry(chapterName, topics) {
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

  topics.forEach(topic => {
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
      block.lines.forEach(line => {
        if (!line || line.length < 10) return;
        if (isParameterNoteLine(line)) return;
        // A bare heading such as "STRING METHODS AND BEST PRACTICES" is a title,
        // not a concept, so it is not revision material.
        if (!/[a-z]/.test(line)) return;
        const lowerLine = line.toLowerCase();
        if (gotchaKeywords.some(kw => lowerLine.includes(kw))) gotchaLines.push(line);
        else conceptLines.push(line);
      });
    });

    conceptsByTopic.push(conceptLines);
    gotchasByTopic.push(gotchaLines);

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

  const takeaways = takeRoundRobin(conceptsByTopic, 6);
  const gotchas = takeRoundRobin(gotchasByTopic, 4);

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

  return { takeaways, gotchas, syntax, badges: badgeList, tables };
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

// Level for an authored @quiz marker: use the authored level when present,
// otherwise a trap question is hard and everything else is medium.
function levelForCustomQuiz(quiz) {
  if (quiz.quizLevel) return quiz.quizLevel;
  if (/trap/i.test(quiz.quizTag || '')) return 'hard';
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

    // Predict: a genuine code-tracing exercise. Only a println with a fixed string
    // literal is used, so the answer is unambiguous.
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
        explanation: `The output comes directly from the string literal in the println call.`
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
    const conceptPool = topicNotes.filter(isUsableQuizStatement);
    const trueOptions = conceptPool.slice(0, 3);
    const falseOptions = [];
    for (let i = 0; i < topics.length; i++) {
      if (i === topicIndex) continue;
      const otLines = (allTopicNoteLines[i] || []).filter(isUsableQuizStatement);
      if (otLines.length > 0) {
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
        addQuestion({
          type: 'mcq',
          kind: 'true-false',
          qid: makeQid(chapterName, topicIdentity, 'true-false-mcq', 5),
          difficulty: levelForKind('true-false'),
          chapter: chapterName,
          topic: topicLabel,
          question: `Which of the following are TRUE about ${topicLabel}? Select all that apply.`,
          options: shuffledOpts,
          answer: correctIndices,
          explanation: `The true statements are taken directly from the notes for ${topicLabel}.`
        });
      }
    }

  });

  return questions.map(q => assignTags(q));
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
function buildPracticeChallenges(parsedData) {
  const challenges = [];

  for (const topic of parsedData) {
    const nameLower = topic.fileName.toLowerCase();
    // Practice is built from files that contain an exercise: the *Challenge* files,
    // and also the *DeepProblem* files. Several chapters keep their practice methods
    // only in the DeepProblem file while their Challenge file holds just main(), so
    // those chapters used to receive no practice at all.
    const isExercise = nameLower.includes('challenge') || nameLower.includes('problem');
    if (!isExercise) continue;

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
      const expectedText = match[2].trim().replace(/\s*;+\s*$/, '');
      const expected = normalizeValue(expectedText);
      const candidate = { args, expected };
      if (isPlausibleTestCase(candidate, returnType)) testCases.push(candidate);
    });

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

    const selfCheck = returnType === 'void' || testCases.length === 0 ||
      testCases.every(tc => tc.expected === null);

    // Build verifyFn string (evaluated in browser context). It returns true, false,
    // or null. null means the code could not be run automatically, which must be
    // reported as "not checked" rather than as a wrong answer.
    let verifyFnStr = null;
    if (!selfCheck && paramNames.length > 0) {
      const argAccess = paramNames.map((_, i) => `testCase.args[${i}]`).join(', ');
      const paramQuoted = paramNames.map(p => `"${p}"`).join(', ');
      verifyFnStr = `function(userCode, testCase) {
        try {
          const body = extractMethodBody(userCode, "${methodName}");
          const prepared = (typeof prepareJavaBody === "function") ? prepareJavaBody(body) : body;
          const fn = new Function(${paramQuoted}, prepared);
          const result = fn(${argAccess});
          const expected = testCase.expected;
          // Floating point results are compared with a small tolerance, because a
          // note such as "returns about 78.53975" is a rounded value.
          if (typeof result === "number" && typeof expected === "number") {
            const tolerance = Math.max(1e-9, Math.abs(expected) * 1e-6);
            return Math.abs(result - expected) <= tolerance;
          }
          return result === expected;
        } catch(e) { return null; }
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
      console.log('✅ No content changes to review — regenerating as usual.');
    }
  }

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
    // A quiz must never show the same question twice. Several sub-chapters share a
    // file name, so without this a chapter could repeat one question many times.
    const combined = [...starterQs, ...ocjpQs];
    const seenQuestions = new Set();
    const deduped = combined.filter(q => {
      const key = `${q.question || ''}||${q.code || ''}||${(q.options || []).join('|')}`;
      if (seenQuestions.has(key)) return false;
      seenQuestions.add(key);
      return true;
    });
    sortedQBank[chName] = deduped;
    console.log(`  🃏 Regenerated Quick Revision and question sets for: ${chName} (${deduped.length} questions, ${ocjpQs.length} OCJP)`);
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

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
