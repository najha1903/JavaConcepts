// Ignore platform line endings and one terminal newline only. Interior whitespace,
// additional lines, punctuation, signs, and individual characters remain significant.
const normalizeOutput = value => String(value).replace(/\r\n?/g, '\n').replace(/\n$/, '');
const exactOutputMatches = (actual, expected, normalization = 'terminal-newline') => {
  const normalize = normalization === 'terminal-whitespace'
    ? value => String(value).replace(/\r\n?/g, '\n').replace(/\s+$/, '')
    : normalizeOutput;
  return normalize(actual) === normalize(expected);
};

function expectationFor(question) {
  if (question.outputExpectation) {
    if (question.outputExpectation.kind !== 'exact-output' || typeof question.outputExpectation.value !== 'string') {
      throw new Error(`Invalid output expectation for ${question.qid}`);
    }
    return question.outputExpectation;
  }
  if (question.type === 'predict' && Array.isArray(question.answer)) {
    return { kind: 'exact-output', value: question.answer.join('\n'), provenance: 'marked-answer' };
  }
  if (!/\b(?:what (?:does|is|will)|which (?:output|value))\b.*\b(?:print|printed|output|display)/i.test(question.question || '')) return null;
  const indices = Array.isArray(question.answer) ? question.answer : [question.answer];
  if (indices.length !== 1 || !question.options || typeof indices[0] !== 'number') return null;
  const answer = String(question.options[indices[0]] || '');
  // A prose answer is not an exact output specification. Do not claim to validate
  // it by matching numbers or prefixes; it needs an authored outputExpectation.
  if (!/^[\w.+\-/:]+(?:\n[\w.+\-/:]+)*$/.test(answer)) return null;
  if (/\b(?:nothing|error|exception|compiles|throws|nullpointerexception)\b/i.test(answer)) return null;
  return { kind: 'exact-output', value: answer, provenance: 'literal-marked-answer', normalization: 'terminal-whitespace' };
}

function asRunnableProgram(code) {
  const text = String(code || '');
  if (/\bargs\s*[.\[]|\bScanner\b|System\.console\s*\(/.test(text)) return null;
  if (/\bclass\s+\w+/.test(text) && /static\s+void\s+main\s*\(/.test(text)) {
    const match = text.match(/\bpublic\s+class\s+(\w+)/) || text.match(/\bclass\s+(\w+)/);
    const pkg = text.match(/^\s*package\s+([\w.]+)\s*;/m);
    return { source: text, className: match[1], launchName: pkg ? `${pkg[1]}.${match[1]}` : match[1] };
  }
  if (/\bpublic\s+class\s+\w+/.test(text)) return null;
  // A statement fragment may begin with helper methods, which belong to the
  // containing class, not inside main. Keep their bodies intact.
  const masked = text.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, match => match.replace(/[^\n]/g, ' '));
  const pattern = /^(?:[ \t]*(?:public|private|protected)\s+)?[ \t]*static\s+[\w<>\[\]]+\s+\w+\s*\([^)]*\)\s*\{/gm;
  const members = [];
  let body = text, match;
  while ((match = pattern.exec(masked))) {
    let end = pattern.lastIndex, depth = 1;
    while (end < masked.length && depth) {
      if (masked[end] === '{') depth++;
      if (masked[end] === '}') depth--;
      end++;
    }
    if (depth) break;
    members.push(text.slice(match.index, end));
    body = body.slice(0, match.index) + body.slice(match.index, end).replace(/[^\n]/g, ' ') + body.slice(end);
    pattern.lastIndex = end;
  }
  return { source: `public class Workspace {\n${members.join('\n')}\npublic static void main(String[] args) {\n${body}\n}\n}`, className: 'Workspace', launchName: 'Workspace' };
}

function expectedCompileFailure(result, diagnostic) {
  if (!diagnostic || result.error || result.failureKind || result.signal || result.status !== 1) return false;
  const actual = [...String(result.stderr || '').matchAll(/compiler\.err\.([\w.]+)/g)].map(m => m[1]);
  const expected = Array.isArray(diagnostic) ? diagnostic : [diagnostic];
  return actual.length > 0 && actual.every(code => expected.includes(code));
}
module.exports = { normalizeOutput, exactOutputMatches, expectationFor, asRunnableProgram, expectedCompileFailure };
