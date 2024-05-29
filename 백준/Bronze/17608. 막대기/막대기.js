const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
  문제분석 및 설계

  1. 크기가 N인 배열 stick을 선언한다.
  2. 막대기의 높이에 대한 N개의 입력에 대해 순서대로 stick배열에 넣어준다.
  3. stick_height라는 변수를 선언하고 stick 배열의 마지막 값으로 값을 초기화 한다.
  4. stick배열의 마지막 부터 처음까지 확인하면서 아래와 같은 과정을 수행한다.
  4-1. 현재 stick배열의 값이 stick_height값보다 큰 경우
    stick_height값을 현재 stick배열의 값으로 업데이트 하고, 보이는 개수를 의미하는 numbers를 1증가한다.
  4-2. 현재 stick배열의 값이 stick_height값보다 작거나 같은 경우
    다음 인덱스를 참고한다.
*/
function solution(input) {
  const N = parseInt(input[0]);
  let stick = new Array(N); // 전략 1번
  let numbers = 1; // 볼 수 있는 막대기의 개수 (최소 1개는 볼 수 있으므로 초기값을 1로 초기화한다.)

  // 전략 2번
  for (let i = 0; i < N; i++) {
    stick[i] = parseInt(input[1 + i]);
  }

  // 전략 3번
  let stick_height = stick[N - 1];

  for (let i = N - 1; i >= 0; i--) {
    if (stick[i] > stick_height) {
      stick_height = stick[i];
      numbers += 1;
    }
  }

  return numbers;
}

console.log(solution(input));
