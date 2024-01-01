const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [A, B] = input[0].split(' ').map(Number);
console.log(A + B);
