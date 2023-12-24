const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
arr = input[1].split(" ").map(Number);
arr.sort((f, s) => f - s);
let answer = 0;

for (let i = 0; i < N; i++) {
  let target = arr[i];
  let start = 0;
  let end = N - 1;

  while (start < end) {
    if (arr[start] + arr[end] == target) {
      if (start != i && end != i) {
        answer += 1;
        break;
      } else if (start == i) {
        start += 1;
      } else {
        end -= 1;
      }
    } else if (arr[start] + arr[end] > target) {
      end -= 1;
    } else {
      start += 1;
    }
  }
}

console.log(answer);
