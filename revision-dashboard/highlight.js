// ============================================================================
// Syntax highlighting for Java shown in the dashboard.
//
// WHY THIS IS ITS OWN FILE
//
// It is a pure function: text in, HTML out, no page state and no DOM. That made it
// the safest thing to lift out of app.js, which is otherwise the single largest
// file in the project and the place where every unrelated concern accumulates.
// Moving it does not change behaviour, and it can be reasoned about on its own.
//
// ORDER MATTERS INSIDE IT
//
// Comments and strings are replaced with placeholders before keywords are
// highlighted, then restored at the end. Without that, a keyword inside a string or
// a comment would be wrapped in a span. Annotations are deliberately last, so a
// word such as `class` inside a generated span attribute is never re-processed.
// ============================================================================

function highlightJava(code) {
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const comments = [];
  html = html.replace(/\/\*[\s\S]*?\*\//g, (match) => {
    const id = `__BLOCK_COMMENT_${comments.length}__`;
    comments.push({ id, text: `<span class="code-comment">${match}</span>` });
    return id;
  });

  html = html.replace(/\/\/.*/g, (match) => {
    const id = `__LINE_COMMENT_${comments.length}__`;
    comments.push({ id, text: `<span class="code-comment">${match}</span>` });
    return id;
  });

  const strings = [];
  html = html.replace(/"(\\.|[^"\\])*"/g, (match) => {
    const id = `__STRING_${strings.length}__`;
    strings.push({ id, text: `<span class="code-string">${match}</span>` });
    return id;
  });

  const keywords = /\b(public|protected|private|static|final|class|interface|record|enum|extends|implements|package|import|new|return|if|else|for|while|do|switch|case|default|break|continue|try|catch|throw|throws|finally|this|super|instanceof)\b/g;
  html = html.replace(keywords, '<span class="code-keyword">$1</span>');

  const types = /\b(int|double|float|long|short|byte|boolean|char|void|String|Object|System|Exception|NullPointerException|BankAccount|Customer|Animal|Dog|Fish|Worker|Employee|SalariedEmployee|HourlyEmployee|Wall|Point|House|Car|Student|StudentRecord)\b/g;
  html = html.replace(types, '<span class="code-type">$1</span>');

  html = html.replace(/\b(\d+(\.\d+)?[dfL]?)\b/g, '<span class="code-number">$1</span>');

  // Annotations MUST come after keywords/types so 'class' inside generated span attributes is not re-processed
  html = html.replace(/@\w+/g, '<span class="code-annotation">$&</span>');

  strings.forEach(item => {
    html = html.replace(item.id, item.text);
  });
  comments.forEach(item => {
    html = html.replace(item.id, item.text);
  });

  return html;
}
