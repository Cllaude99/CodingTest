const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const sumArr = new Array(arr.length + 1).fill(0);
const answer = [];

arr.forEach((v, i) => (sumArr[i + 1] = sumArr[i] + v));

input.slice(2).forEach((value) => {
  const [start, end] = value.split(" ").map(Number);
  answer.push(sumArr[end] - sumArr[start - 1]);
});

console.log(answer.join("\n"));
