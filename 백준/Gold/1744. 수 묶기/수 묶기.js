const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const positiveArr = [];
const negativeArr = [];
let zeroNumber = 0;
let oneNumber = 0;
let answer = 0;

for (let i = 0; i < N; i++) {
  const number = Number(input[i]);
  if (number === 0) zeroNumber += 1;
  else if (number === 1) oneNumber += 1;
  else if (number > 0) positiveArr.push(number);
  else negativeArr.push(number);
}

positiveArr.sort((a, b) => b - a);
negativeArr.sort((a, b) => a - b);

while (positiveArr.length > 1) {
  const first = positiveArr.shift();
  const second = positiveArr.shift();
  answer += first * second;
}
if (positiveArr.length > 0) answer += positiveArr[0];

while (negativeArr.length > 1) {
  const first = negativeArr.shift();
  const second = negativeArr.shift();
  answer += first * second;
}
if (negativeArr.length === 1 && zeroNumber === 0) answer += negativeArr[0];

answer += oneNumber;
console.log(answer);
