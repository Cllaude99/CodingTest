const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((value) => Number(value));

N = input.shift();
input.sort((f, s) => f - s);

for (let i = 0; i < N; i++) {
  console.log(input[i]);
}
