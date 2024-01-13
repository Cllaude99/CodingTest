const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const temp = input.shift().split(' ').map(Number);
let answer = [];
arr.sort((a, b) => a - b);

temp.forEach((element) => {
  let pl = 0;
  let pr = arr.length - 1;

  while (pl <= pr) {
    let mid = Math.floor((pl + pr) / 2);
    if (arr[mid] === element) {
      answer.push(1);
      return;
    } else if (arr[mid] < element) {
      pl = mid + 1;
    } else {
      pr = mid - 1;
    }
  }
  answer.push(0);
});

console.log(answer.join("\n"))