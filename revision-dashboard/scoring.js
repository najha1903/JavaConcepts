(function (root) {
  'use strict';
  function normalizedText(text) {
    // Output and Java tokens are case-sensitive. Only line endings and one final
    // line terminator (println / textarea paste) are interchangeable.
    return String(text).replace(/\r\n/g, '\n').replace(/\n$/, '');
  }
  function grade(question, answer) {
    if (question.type === 'scq') return answer === question.answer;
    if (question.type === 'mcq') {
      if (!Array.isArray(answer)) return false;
      return answer.length === question.answer.length && new Set(answer).size === answer.length &&
        question.answer.every(i => answer.includes(i));
    }
    if (question.type === 'predict' || question.type === 'codefill') {
      return question.answer.some(expected => normalizedText(expected) === normalizedText(answer));
    }
    return false;
  }
  function objective(question, record) {
    return question && question.type !== 'interview' && record && !record.imported &&
      record.kind !== 'self-assessed' && (!record.contentVersion || !question.contentVersion ||
        record.contentVersion === question.contentVersion);
  }
  function totals(questions, records) {
    let correct = 0, total = 0, selfAssessed = 0;
    questions.forEach((q, index) => {
      const record = records[index];
      if (q.type === 'interview') { if (record) selfAssessed++; return; }
      total++;
      if (record && grade(q, record.selected)) correct++;
    });
    return { correct, total, selfAssessed };
  }
  root.JavaRevScoring = { grade, normalizedText, objective, totals };
})(globalThis);
