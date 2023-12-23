const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sumArr = new Array(N + 1).fill(0);
const numCnt = new Array(M).fill(0);
let answer = 0;

arr.forEach((v, i) => (sumArr[i + 1] = sumArr[i] + v));
sumArr.shift();
sumArr.forEach((v) => (numCnt[v % M] += 1));

answer += numCnt[0];
numCnt.forEach((value) => {
  if (value > 1) {
    answer += (value * (value - 1)) / 2;
  }
});

console.log(answer);
