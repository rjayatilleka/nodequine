const code = [
  'console.log(\'const code = [\');',
  'for (var i = 0; i < code.length; i++) {',
  '  console.log(`\'${code[i]}\',`);',
  '}',
];

console.log('const code = [');
code
  .map(line => line.replace('\'', '\\\''))
  .forEach(line => console.log(`  '${line}',`));
console.log('];');

//code.forEach(console.log);
