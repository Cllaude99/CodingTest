const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const sumArr = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const table = input.slice(0, N);
const coords = input.slice(-M);
const answer = [];

table.forEach((v, i) => {
  arr[i + 1] = [0, ...table[i].split(" ").map(Number)];
});

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    sumArr[i][j] =
      sumArr[i - 1][j] + sumArr[i][j - 1] + arr[i][j] - sumArr[i - 1][j - 1];
  }
}

coords.forEach((value) => {
  const [x1, y1, x2, y2] = value.split(" ").map(Number);
  answer.push(
    sumArr[x2][y2] -
      sumArr[x2][y1 - 1] -
      sumArr[x1 - 1][y2] +
      sumArr[x1 - 1][y1 - 1]
  );
});

console.log(answer.join("\n"));
