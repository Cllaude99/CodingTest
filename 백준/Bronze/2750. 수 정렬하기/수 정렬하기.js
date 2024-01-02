const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();
const arr = input.map(Number);
arr.sort((a, b) => a - b);
console.log(arr.join('\n'));
