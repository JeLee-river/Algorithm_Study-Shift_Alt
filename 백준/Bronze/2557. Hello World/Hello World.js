const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const tokens = input.length ? input.split(/\s+/) : [];
let ti = 0;
const next = () => tokens[ti++];
const nextNum = () => +next();

function solve() {
  return 'Hello World!';
}

const out = solve();
process.stdout.write(out + (out.endsWith('\n') ? '' : '\n'));
