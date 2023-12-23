const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const M = Math.max(...arr);

const newArr = arr.map((value) => (value / M) * 100);
const sum = newArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum / N);
