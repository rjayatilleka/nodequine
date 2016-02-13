const code = [
  '',
  'const matchQ = /\'/g;',
  'const repQ = \'\\\\\\\'\';',
  '',
  'const matchS = /\\\\/g;',
  'const repS = \'\\\\\\\\\';',
  '',
  'console.log(\'const code = [\');',
  'code.forEach(line => {',
  '  const escaped = line',
  '    .replace(matchS, repS)',
  '    .replace(matchQ, repQ);',
  '  console.log(`  \'${escaped}\',`);',
  '})',
  'console.log(\'];\');',
  '',
  'code.forEach(line => console.log(line));',
];

const matchQ = /'/g;
const repQ = '\\\'';

const matchS = /\\/g;
const repS = '\\\\';

console.log('const code = [');
code.forEach(line => {
  const escaped = line
    .replace(matchS, repS)
    .replace(matchQ, repQ);
  console.log(`  '${escaped}',`);
})
console.log('];');

code.forEach(line => console.log(line));
