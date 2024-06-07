const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
  문제설계

  1. lengh변수를 선언하고 N으로 초기화한다.
  2. N행 N열의 2차원배열 snail을 선언한다.
  3. currentNum을 선언하고 N*N으로 초기화한다.

  1. i의 값을 0부터 Math.floor(N / 2)까지 아래의 과정을 진행한다.

  2. start_row, start_col 변수를 각각 i로 초기화한다.
  
  3. start_row, start_col값이 모두 Math.floor(N / 2)인 경우
     snail[start_row][start_col]에 currentNum을 넣고 종료한다.
  
  4. 1번이 아닌 경우
     start_row, start_col에서 시작해서 length번만큼 아래과정을 진행한다.
     
     
*/

function solution(input) {
  const N = parseInt(input[0]);
  const NUMBER = parseInt(input[1]);
  let length = N;
  let snail = Array.from({ length: N }, () => new Array(N));
  let currentNum = N * N;
  let location = '';

  for (let i = 0; i <= Math.floor(N / 2); i++) {
    let row = i;
    let col = i;

    if (length === 1) {
      if (currentNum === NUMBER) location = row + 1 + ' ' + (col + 1);
      snail[row][col] = 1;
    } else {
      for (let i = 0; i < length; i++) {
        if (currentNum === NUMBER) location = row + 1 + ' ' + (col + 1);
        snail[row][col] = currentNum;
        row += 1;
        currentNum -= 1;
      }

      row -= 1;
      col += 1;

      for (let i = 0; i < length - 1; i++) {
        if (currentNum === NUMBER) location = row + 1 + ' ' + (col + 1);
        snail[row][col] = currentNum;
        col += 1;
        currentNum -= 1;
      }

      col -= 1;
      row -= 1;

      for (let i = 0; i < length - 1; i++) {
        if (currentNum === NUMBER) location = row + 1 + ' ' + (col + 1);
        snail[row][col] = currentNum;
        row -= 1;
        currentNum -= 1;
      }

      row += 1;
      col -= 1;

      for (let i = 0; i < length - 2; i++) {
        if (currentNum === NUMBER) location = row + 1 + ' ' + (col + 1);
        snail[row][col] = currentNum;
        col -= 1;
        currentNum -= 1;
      }

      length -= 2;
    }
  }

  const result = [];
  for (let i = 0; i < N; i++) {
    result.push(snail[i].join(' '));
  }

  result.push(location);

  return result.join('\n');
}

console.log(solution(input));
