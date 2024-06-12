const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A = null;
let B = null;
let C = null;

let count = 0;
const input = [];

rl.on('line', function (line) {
  if (!A && !B && !C) {
    [A, B, C] = line.split(' ').map(Number);
  } else {
    input.push(line);
    count++;
  }

  if (count === 3) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(A, B, C, input));
  process.exit();
});

/*
  문제 설계

  # 차량시간에 대한 정보를 의미하는 크기가 (100 + 1)인 1차원 배열 time을 선언하고 각 배열의 값을 0으로 초기화한다.

  1. 두 정수가 주어지는 3개의 줄에 대해 아래를 수행한다.
  2. 첫번째 정수부터 두번째 정수 - 1까지에 해당하는 인덱스까지 time배열의 값을 1증가한다.

  3. 최종적으로 time배열을 참고하여, 배열값이 0보다 큰 값에 대해, 지불해야하는 금액인 payment에 아래 조건에 따라 금액을 더해준다.
     배열값이 1인 경우, A를 더한다
     배열값이 2인 경우, 2*B를 더한다
     배열값이 3인 경우, 3*C를 더한다

  4. payment를 반환하고 종료한다
*/

function solution(A, B, C, input) {
  let times = new Array(101).fill(0); // 차량시간에 대한 정보
  let min_arrive = 101;
  let max_leave = -1;
  let payment = 0; // 지불해야하는 금액

  // 위 전략 1번 ~ 2번 과정
  input.forEach((info) => {
    const [arrive, leave] = info.split(' ').map(Number);
    for (let i = arrive; i < leave; i++) {
      times[i] += 1;
    }
    min_arrive = min_arrive < arrive ? min_arrive : arrive;
    max_leave = max_leave < leave ? leave : max_leave;
  });

  // 위 전략 3번 과정
  for (let i = min_arrive; i < max_leave; i++) {
    switch (times[i]) {
      case 1:
        payment += A;
        break;
      case 2:
        payment += 2 * B;
        break;
      case 3:
        payment += 3 * C;
        break;
    }
  }

  return payment;
}
