const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const arr = input[2].split(" ").map(Number);
arr.sort((f, s) => f - s);
let answer = 0;

start = 0;
end = N - 1;

while (start < end) {
  if (arr[start] + arr[end] == M) {
    answer += 1;
    start += 1;
    end -= 1;
  } else if (arr[start] + arr[end] < M) {
    start += 1;
  } else {
    end -= 1;
  }
}

console.log(answer);
