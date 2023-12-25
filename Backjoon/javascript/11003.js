const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let temp = [];
let answer = [];

for (let i = 0; i < N; i++) {
  while (temp.length != 0 && temp[temp.length - 1][1] > arr[i]) {
    temp.pop();
  }
  temp.push([i, arr[i]]);

  if (i - temp[0][0] >= L) temp.shift();

  answer.push(temp[0][1]);
}

console.log(answer.join(" "));
