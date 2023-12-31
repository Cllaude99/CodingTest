const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let stack = [];
let answer = [];

for (let i = N - 1; i >= 0; i--) {
  if (stack.length === 0) {
    answer.push(-1);
    stack.push(arr[i]);
  } else {
    if (arr[i] < stack[stack.length - 1]) {
      answer.push(stack[stack.length - 1]);
      stack.push(arr[i]);
    } else {
      while (stack.length !== 0 && arr[i] >= stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length === 0) {
        answer.push(-1);
        stack.push(arr[i]);
      } else {
        answer.push(stack[stack.length - 1]);
        stack.push(arr[i]);
      }
    }
  }
}
answer = answer.reverse();
console.log(answer.join(' '));
