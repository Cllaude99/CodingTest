const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, ...numbers] = input;
numbers.map(Number);
let stack = [];
let answer = [];
let count = 1;
let success = true;

for (let i = 0; i < N; i += 1) {
  const num = numbers.shift();
  while (count <= num) {
    stack.push(count++);
    answer.push('+');
  }
  const popItem = stack.pop();
  if (popItem != num) {
    success = false;
    break;
  }
  answer.push('-');
}

if (!success) {
  console.log('NO');
} else {
  console.log(answer.join('\n'));
}
