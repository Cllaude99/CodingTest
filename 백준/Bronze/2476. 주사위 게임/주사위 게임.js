const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
  문제분석 및 설계

  1. 크기가 6인 dice배열을 선언하며, 0으로 값을 초기화 한다
  2. 입력으로 주어지는 3개의 주사위 눈에 대한 정보를 dice배열에 저장한다. (이때 dice배열에 대해 입력으로 주어지는 값 - 1에 해당하는 인덱스에 1을 증가한다)
  3. dice배열에 저장된 값에 따라 같은 눈이 3개나온 경우, 2개나온 경우, 모두 다른 경우를 판별한다.
  
*/

function solution(input) {
  let maxPrice = 0;
  const N = parseInt(input[0]);

  for (let i = 1; i <= N; i++) {
    const [f, s, t] = input[i].split(' ').map(Number);
    let dice = new Array(6).fill(0);
    dice[f - 1] += 1;
    dice[s - 1] += 1;
    dice[t - 1] += 1;

    let diffNumber = 0;
    let price = 0;

    for (let i = 0; i < 6; i++) {
      if (dice[i] !== 0) diffNumber += 1;
    }

    if (diffNumber === 3) {
      for (let i = 5; i >= 0; i--) {
        if (dice[i] !== 0) {
          price = 100 * (i + 1);
          break;
        }
      }
    } else if (diffNumber === 2) {
      for (let i = 0; i < 6; i++) {
        if (dice[i] === 2) {
          price = 1000 + 100 * (i + 1);
          break;
        }
      }
    } else {
      for (let i = 0; i < 6; i++) {
        if (dice[i] === 3) {
          price = 10000 + 1000 * (i + 1);
          break;
        }
      }
    }

    maxPrice = maxPrice < price ? price : maxPrice;
  }

  return maxPrice;
}

console.log(solution(input));
