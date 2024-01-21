const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

function gcd(x, y) {
  if (y === 0) return x;
  else return gcd(y, x % y);
}
const T = Number(input.shift());
let answer = [];
for (let i = 0; i < T; i++) {
  const [fisrt, second] = input[i].split(' ').map(Number);
  const value = gcd(fisrt, second);
  const result = value * (fisrt / value) * (second / value);
  answer.push(result);
}

console.log(answer.join('\n'));
