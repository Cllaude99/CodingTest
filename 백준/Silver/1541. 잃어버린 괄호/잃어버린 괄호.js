const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = input.shift().split('-');
let answer = 0;
arr
  .shift()
  .split('+')
  .forEach((v) => (answer += Number(v)));

for (let num of arr) {
  let temp = 0;
  num.split('+').forEach((v) => (temp += Number(v)));
  answer -= temp;
}

console.log(answer);
