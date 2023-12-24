const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let start = 1;
let end = 1;
let total = 0;
let answer = 0;

while (start <= N) {
  if (total == N) {
    answer += 1;
    total += end;
    end += 1;
  } else if (total < N) {
    total += end;
    end += 1;
  } else {
    total -= start;
    start += 1;
  }
}

console.log(answer);
