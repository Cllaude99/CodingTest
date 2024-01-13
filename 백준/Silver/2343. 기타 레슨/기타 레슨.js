const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);
let start = 0;
let end = 0;

for (let num of arr) {
  if (start < num) {
    start = num;
  }
  end += num;
}

while (start <= end) {
  let middle = Math.floor((start + end) / 2);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (sum + arr[i] > middle) {
      count += 1;
      sum = 0;
    }
    sum += arr[i];
  }
  if (sum != 0) count += 1;
  if (count > M) start = middle + 1;
  else end = middle - 1;
}
console.log(start);
