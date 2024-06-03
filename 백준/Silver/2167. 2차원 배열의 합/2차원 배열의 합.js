const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
  문제 설계

  1. N행 M열 배열을 선언하고, 주어진 값들로 해당 배열을 채운다.
  2. 
*/

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = new Array(N);
  const result = [];

  for (let i = 1; i < 1 + N; i++) {
    arr[i - 1] = input[i].split(' ').map(Number);
  }

  const K = parseInt(input[1 + N]);

  for (let k = N + 2; k < N + 2 + K; k++) {
    const [i, j, x, y] = input[k].split(' ').map(Number);

    let s = 0;

    for (let r = i - 1; r <= x - 1; r++) {
      for (let c = j - 1; c <= y - 1; c++) {
        s += arr[r][c];
      }
    }

    result.push(s);
  }

  return result.join('\n');
}

console.log(solution(input));
