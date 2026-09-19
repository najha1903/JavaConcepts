const fs = require('fs');
const { CONCEPTS_DATA } = new Function(fs.readFileSync('revision-dashboard/data.js', 'utf8') + '\nreturn {CONCEPTS_DATA};')();

const wanted = ['HelloWorldVariation', 'DataTypeLimits', 'ExpressionBuilder', 'BankAccountFields', 'StudentClass', 'RobustCalculator', 'StringFormatting'];
for (const chapter of CONCEPTS_DATA) {
  for (const topic of chapter.topics) {
    if (!wanted.some(w => String(topic.fileName).includes(w))) continue;
    console.log('---', topic.fileName);
    console.log('    fields:', Object.keys(topic).join(', '));
    console.log('    topicName:', JSON.stringify(topic.topicName));
    console.log('    methods:', (topic.methods || []).map(m => m.name).join(', ') || '(none)');
    console.log('    challenge-ish keys:', Object.keys(topic).filter(k => /challenge|exercise|expected/i.test(k)).map(k => k + '=' + JSON.stringify(topic[k]).slice(0, 60)).join(' | ') || '(none)');
    const notes = (topic.headerComments || []).flatMap(b => b.lines || []);
    console.log('    first note:', JSON.stringify((notes[0] || '').slice(0, 90)));
  }
}
