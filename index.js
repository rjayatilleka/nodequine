const code = [
  '',
  'const matchSlashes = /\\\\/g;',
  'const repSlashes = \'\\\\\\\\\';',
  '',
  'const matchQuotes = /\'/g;',
  'const repQuotes = \'\\\\\\\'\';',
  '',
  'console.log(\'const code = [\');',
  'code.forEach(line => {',
  '  const escaped = line',
  '    .replace(matchSlashes, repSlashes)',
  '    .replace(matchQuotes, repQuotes);',
  '  console.log(`  \'${escaped}\',`);',
  '})',
  'console.log(\'];\');',
  '',
  'code.forEach(line => console.log(line));',
];

const matchSlashes = /\\/g;
const repSlashes = '\\\\';

const matchQuotes = /'/g;
const repQuotes = '\\\'';

console.log('const code = [');
code.forEach(line => {
  const escaped = line
    .replace(matchSlashes, repSlashes)
    .replace(matchQuotes, repQuotes);
  console.log(`  '${escaped}',`);
})
console.log('];');

code.forEach(line => console.log(line));
