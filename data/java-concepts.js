// ============================================================================
// The concept catalogue.
//
// This is a SOURCE file, maintained by hand, not generated. It exists so that
// questions, coverage and gap detection can all key on a CONCEPT rather than on
// a chapter name.
//
// Why this matters: questions used to be attached to a chapter by matching words
// in its name, so `labelHas(chapterName, 'oop')` gave the OOP exam block to any
// chapter containing "oop". A new chapter called "Composition" matched nothing
// and received no exam questions at all. Keying on concepts instead means a new
// chapter gets the right material from what its notes actually cover.
//
// The objectives are the published topic list for the Oracle Java SE 11
// Developer exam, 1Z0-819. That list is factual and public: it is a syllabus, not
// questions. It is used here only to decide WHICH concepts matter.
//
// Deliberately NOT here: Oracle's actual exam questions. They are copyrighted and
// covered by Oracle's exam NDA, and this repository is public, so copying them
// would be infringement rather than private study.
//
// The objectives the author has not studied yet are listed at the bottom, so the
// roadmap is visible without pretending it is a gap in his notes.
// ============================================================================

// The published objectives for 1Z0-819, in the order Oracle lists them.
const EXAM_OBJECTIVES = [
  'Working with Java Data Types',
  'Controlling Program Flow',
  'Java Object Oriented Approach',
  'Exception Handling',
  'Working with Arrays and Collections',
  'Working with Streams and Lambda Expressions',
  'Java Platform Module System',
  'Concurrency',
  'Java I/O API',
  'Secure Coding in Java SE Application',
  'Database Applications with JDBC',
  'Localization',
  'Annotations'
];

// A concept is one thing the exam tests, with the words that indicate it in a
// note or a piece of code. The keywords are matched case-insensitively against
// note text and code, so a concept is detected from what is written rather than
// from a chapter name.
const CONCEPTS = [
  // ── Working with Java Data Types ─────────────────────────────────────────
  { id: 'primitives', objective: 'Working with Java Data Types', name: 'The eight primitive types',
    keywords: ['primitive', 'byte', 'short', 'int', 'long', 'float', 'double', 'boolean', 'char'] },
  { id: 'literals', objective: 'Working with Java Data Types', name: 'Literals and suffixes',
    keywords: ['literal', 'suffix', 'suffixes', 'underscore', 'hex', 'binary literal'] },
  { id: 'wrappers', objective: 'Working with Java Data Types', name: 'Wrapper classes and autoboxing',
    keywords: ['wrapper', 'autobox', 'unbox', 'Integer.valueOf', 'parseInt', 'parseDouble'] },
  { id: 'casting', objective: 'Working with Java Data Types', name: 'Casting and promotion',
    keywords: ['cast', 'casting', 'widen', 'narrow', 'promot', 'truncat'] },
  { id: 'operators', objective: 'Working with Java Data Types', name: 'Operators and expressions',
    keywords: ['operator', 'operand', 'precedence', 'modulus', 'increment', 'decrement', 'ternary'] },
  { id: 'strings', objective: 'Working with Java Data Types', name: 'String and StringBuilder',
    keywords: ['String', 'StringBuilder', 'StringBuffer', 'immutab', 'concat', 'substring', 'charAt'] },
  { id: 'string-pool', objective: 'Working with Java Data Types', name: 'String pool and equality',
    keywords: ['string pool', 'interned', 'equals', '==', 'reference'] },
  { id: 'text-blocks', objective: 'Working with Java Data Types', name: 'Text blocks and formatting',
    keywords: ['text block', 'printf', 'String.format', 'formatted'] },
  { id: 'var', objective: 'Working with Java Data Types', name: 'Local variable type inference',
    keywords: ['var ', 'type inference'] },
  { id: 'arrays', objective: 'Working with Arrays and Collections', name: 'Arrays',
    keywords: ['array', 'Arrays.', 'length', 'index out of bounds'] },

  // ── Controlling Program Flow ─────────────────────────────────────────────
  { id: 'statements', objective: 'Controlling Program Flow', name: 'Statements, whitespace and indentation',
    keywords: ['statement', 'semicolon', 'whitespace', 'indent'] },
  { id: 'if-else', objective: 'Controlling Program Flow', name: 'if, else and the ternary',
    keywords: ['if ', 'else', 'ternary', 'condition', 'dangling'] },
  { id: 'switch', objective: 'Controlling Program Flow', name: 'switch, including the arrow form',
    keywords: ['switch', 'case', 'default', 'fall-through', 'fall through', 'yield', 'arrow'] },
  { id: 'loops', objective: 'Controlling Program Flow', name: 'for, while and do-while',
    keywords: ['for ', 'while', 'do while', 'do-while', 'loop', 'iteration'] },
  { id: 'break-continue', objective: 'Controlling Program Flow', name: 'break and continue',
    keywords: ['break', 'continue', 'label'] },

  // ── Java Object Oriented Approach ────────────────────────────────────────
  { id: 'classes', objective: 'Java Object Oriented Approach', name: 'Classes, objects and fields',
    keywords: ['class', 'object', 'instance', 'field', 'attribute', 'new '] },
  { id: 'static', objective: 'Java Object Oriented Approach', name: 'static against instance',
    keywords: ['static', 'instance field', 'class variable', 'shared'] },
  { id: 'encapsulation', objective: 'Java Object Oriented Approach', name: 'Encapsulation, getters and setters',
    keywords: ['encapsul', 'getter', 'setter', 'private', 'access modifier'] },
  { id: 'constructors', objective: 'Java Object Oriented Approach', name: 'Constructors and overloading them',
    keywords: ['constructor', 'this()', 'super()', 'no-arg', 'initialis', 'initializ'] },
  { id: 'inheritance', objective: 'Java Object Oriented Approach', name: 'Inheritance',
    keywords: ['inherit', 'extends', 'superclass', 'subclass', 'parent class', 'child class', 'is-a'] },
  { id: 'polymorphism', objective: 'Java Object Oriented Approach', name: 'Polymorphism and overriding',
    keywords: ['polymorph', 'overrid', 'dynamic dispatch', 'runtime', 'covariant'] },
  { id: 'overloading', objective: 'Java Object Oriented Approach', name: 'Overloading and how it is resolved',
    keywords: ['overload', 'signature', 'ambig'] },
  { id: 'abstract', objective: 'Java Object Oriented Approach', name: 'Abstract classes and interfaces',
    keywords: ['abstract', 'interface', 'implements'] },
  { id: 'composition', objective: 'Java Object Oriented Approach', name: 'Composition and delegation',
    keywords: ['composition', 'has-a', 'delegat'] },
  { id: 'records-enums', objective: 'Java Object Oriented Approach', name: 'Records and enums',
    keywords: ['record', 'enum'] },
  { id: 'object-class', objective: 'Java Object Oriented Approach', name: 'Object, equals, hashCode and toString',
    keywords: ['toString', 'hashCode', 'equals', 'Object class'] },

  // ── Exception Handling ───────────────────────────────────────────────────
  { id: 'exceptions', objective: 'Exception Handling', name: 'try, catch and finally',
    keywords: ['try', 'catch', 'finally', 'exception'] },
  { id: 'checked-unchecked', objective: 'Exception Handling', name: 'Checked against unchecked',
    keywords: ['checked', 'unchecked', 'runtimeexception', 'IOException'] },
  { id: 'throw-throws', objective: 'Exception Handling', name: 'throw against throws',
    keywords: ['throw ', 'throws', 'rethrow', 'custom exception'] },
  { id: 'multi-catch', objective: 'Exception Handling', name: 'Multi-catch and catch order',
    keywords: ['multi-catch', 'multi catch', 'catch order', 'unreachable'] },

  // ── Later objectives, kept here so the roadmap is complete ───────────────
  { id: 'generics', objective: 'Working with Arrays and Collections', name: 'Generics',
    keywords: ['generic', '<T>', 'wildcard'] },
  { id: 'collections', objective: 'Working with Arrays and Collections', name: 'Collections',
    keywords: ['List', 'Set', 'Map', 'ArrayList', 'HashMap', 'Collection'] },
  { id: 'lambda', objective: 'Working with Streams and Lambda Expressions', name: 'Lambdas and functional interfaces',
    keywords: ['lambda', '->', 'FunctionalInterface', 'Predicate', 'Function'] },
  { id: 'streams', objective: 'Working with Streams and Lambda Expressions', name: 'Streams',
    keywords: ['Stream', 'map(', 'filter(', 'collect('] },
  { id: 'modules', objective: 'Java Platform Module System', name: 'The module system',
    keywords: ['module-info', 'requires', 'exports'] },
  { id: 'concurrency', objective: 'Concurrency', name: 'Threads and concurrency',
    keywords: ['Thread', 'Runnable', 'synchroniz', 'concurrent'] },
  { id: 'io', objective: 'Java I/O API', name: 'Files and I/O',
    keywords: ['File', 'Path', 'Files.', 'Reader', 'Writer', 'InputStream'] },
  { id: 'jdbc', objective: 'Database Applications with JDBC', name: 'JDBC',
    keywords: ['JDBC', 'Connection', 'ResultSet', 'PreparedStatement'] },
  { id: 'localization', objective: 'Localization', name: 'Locales and resource bundles',
    keywords: ['Locale', 'ResourceBundle', 'format'] },
  { id: 'annotations', objective: 'Annotations', name: 'Annotations',
    keywords: ['@Override', 'annotation', 'metadata'] }
];

// Which concepts a chapter's notes cover, by the chapter name the parser produces.
// Every chapter the author has written is mapped. A chapter that is NOT in this
// map is a new one, and its concepts are inferred from its own notes' keywords
// instead, so it never receives material it has not studied.
const CHAPTER_CONCEPTS = {
  'Chapter 1: Java Introduction': ['statements'],
  'Chapter 2: Primitive Types': ['primitives', 'literals', 'wrappers', 'casting', 'strings', 'string-pool', 'var'],
  'Chapter 3: Operators': ['operators', 'casting', 'statements'],
  'Chapter 4: Statements And Indentations': ['statements', 'if-else'],
  'Chapter 5: If Else Statements': ['if-else', 'operators', 'statements'],
  'Chapter 6: Methods In Java': ['overloading', 'statements', 'casting'],
  'Chapter 7: Switch Statements': ['switch', 'break-continue', 'statements'],
  'Chapter 8: Java Looping Concepts': ['loops', 'break-continue'],
  'Chapter 9: While And Do While Looping Concepts': ['loops', 'break-continue', 'operators'],
  'Chapter 10: Class Object Static And Instance Fields': ['classes', 'static', 'encapsulation'],
  'Chapter 11: Parsing Values Reading Input': ['wrappers', 'strings', 'casting'],
  'Chapter 12: Exception Handling': ['exceptions', 'checked-unchecked', 'throw-throws', 'multi-catch'],
  'Chapter 13: OOP Concepts': ['classes', 'encapsulation', 'constructors', 'inheritance', 'polymorphism',
    'overloading', 'abstract', 'object-class', 'static', 'records-enums'],
  'Chapter 14: Strings': ['strings', 'string-pool', 'text-blocks', 'arrays'],
  'Chapter 15: Composition': ['composition', 'inheritance', 'classes', 'constructors']
};

// Objectives the author has not reached yet. Listed so the roadmap is visible
// without treating an unstudied subject as a gap in his notes.
const OBJECTIVES_AHEAD = [
  'Working with Arrays and Collections',
  'Working with Streams and Lambda Expressions',
  'Java Platform Module System',
  'Concurrency',
  'Java I/O API',
  'Secure Coding in Java SE Application',
  'Database Applications with JDBC',
  'Localization',
  'Annotations'
];

// Words that appear in ordinary English as well as in Java, so a single hit on
// one proves nothing. "a short way to write" is not the primitive `short`, and
// "for example" is not a loop. These are ignored when inferring, and a concept
// then has to show evidence twice before it is believed.
const AMBIGUOUS_KEYWORDS = new Set([
  'short', 'long', 'int', 'char', 'float', 'double', 'byte', 'boolean',
  'for ', 'while', 'if ', 'else', 'break', 'continue', 'case', 'default',
  'class', 'object', 'instance', 'field', 'static', 'private', 'new ',
  'array', 'loop', 'condition', 'value', 'index', 'length', 'label', 'record',
  'interface', 'throws', 'try', 'catch', 'finally', 'switch', 'operator'
]);

// Which concepts a chapter covers: its mapped ones, or, for a chapter that is not
// in the map yet, whatever its own notes show convincing evidence of.
//
// Inference is deliberately conservative. Keyword matching cannot tell "a short
// way to write" from the primitive `short`, so a concept has to be supported by
// TWO distinct unambiguous keywords before it is inferred. When nothing is
// convincing the chapter is reported as needing a concept mapping, rather than
// being handed material it may never have covered.
function keywordPresent(text, keyword) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const leading = /^[A-Za-z0-9_]/.test(keyword) ? '\\b' : '';
  const trailing = /[A-Za-z0-9_]$/.test(keyword) ? '\\b' : '';
  return new RegExp(`${leading}${escaped}${trailing}`, 'i').test(text);
}

function inferConcepts(topics) {
  const text = (topics || []).map(t => {
    const notes = (t.headerComments || []).flatMap(b => b.lines || []).join(' ');
    const inline = (t.inlineComments || []).join(' ');
    return `${notes} ${inline} ${t.code || ''}`;
  }).join(' ');

  const found = [];
  for (const concept of CONCEPTS) {
    const hits = concept.keywords
      .filter(k => !AMBIGUOUS_KEYWORDS.has(k.toLowerCase()))
      .filter(k => keywordPresent(text, k));
    if (hits.length >= 2) found.push(concept.id);
  }
  return found;
}

// The chapter-level list, used where a chapter is the unit of work (coverage,
// objectives, gap detection). A chapter with a hand-written mapping uses it.
function conceptsForChapter(chapterName, topics) {
  const mapped = CHAPTER_CONCEPTS[chapterName];
  if (mapped) return mapped.slice();
  return inferConcepts(topics);
}

// The concepts a SINGLE topic file is about, always inferred from that file's own
// text. This is what makes a per-question concept tag meaningful: inside the
// Strings chapter, the StringBuilder topic and the equals/== topic get different
// tags, where the chapter list would give both the same five.
//
// The inference is narrowed to the concepts the CHAPTER is responsible for. That
// is a structural constraint rather than a guess: a Strings topic cannot be about
// Collections, so a stray pair of keyword hits must not put it there. Broad
// English words make this necessary — the Strings chapter alone picked up
// "Statements, whitespace and indentation" from 39 questions.
//
// If narrowing leaves fewer than two concepts the full inference is not used
// either: the chapter's own mapping is, so a topic is never left thinly tagged.
function conceptsForTopic(topic, chapterConcepts) {
  const own = inferConcepts([topic]);
  if (!own.length) return own;
  if (!chapterConcepts || !chapterConcepts.length) return own;
  const allowed = new Set(chapterConcepts);
  const narrowed = own.filter(id => allowed.has(id));
  // One surviving concept is weak evidence, so the hand-written chapter mapping
  // wins instead: Chapter 10 would otherwise offer only `static` and hide its own
  // classes and encapsulation questions from the filter.
  if (narrowed.length >= 2) return narrowed;
  return chapterConcepts.slice();
}

// id -> display name, so the dashboard can label a concept filter without
// shipping the whole catalogue to the browser.
function conceptNames() {
  const names = {};
  for (const concept of CONCEPTS) names[concept.id] = concept.name;
  return names;
}

module.exports = {
  EXAM_OBJECTIVES,
  CONCEPTS,
  CHAPTER_CONCEPTS,
  OBJECTIVES_AHEAD,
  conceptsForChapter,
  conceptsForTopic,
  conceptNames,
  keywordPresent
};
