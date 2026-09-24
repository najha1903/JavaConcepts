const path = require('path');

const plans = {
  selenium: 'SELENIUM-JAVA-REVISION-PORTAL-PLAN.md',
  playwright: 'PLAYWRIGHT-JS-TS-REVISION-PORTAL-PLAN.md',
  'rest-assured': 'REST-ASSURED-JAVA-REVISION-PORTAL-PLAN.md',
  cypress: 'CYPRESS-JS-TS-REVISION-PORTAL-PLAN.md',
  karate: 'KARATE-DSL-REVISION-PORTAL-PLAN.md'
};
const args = process.argv.slice(2);
const technology = args.find(arg => Object.hasOwn(plans, arg.toLowerCase()));
console.log('The old copy-based scaffolder is retired: it did not create complete framework portals.');
console.log('No destination files have been created or overwritten.');
console.log('Use a standalone implementation plan after inspecting the destination project:');
for (const [name, file] of Object.entries(plans)) {
  if (!technology || technology.toLowerCase() === name) console.log(`  ${name}: ${path.join('revision-portal-plans', file)}`);
}
if (!args.includes('--help') && !args.includes('-h')) process.exitCode = 1;
