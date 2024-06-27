const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let studentsNum = null;
let state = null;
let T = null;
const info = [];
let count = 0;

rl.on('line', function (line) {
  if (!studentsNum) {
    studentsNum = +line;
  } else if (!state) {
    state = line.split(' ').map(Number);
  } else if (!T) {
    T = +line;
  } else {
    info.push(line);
    count++;
  }

  if (count === T) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(state, info));
  process.exit();
});

/*
  # 학생의 성별에 따라 아래와 같은 과정을 수행한다.

  1. 남학생인 경우
    a. index를 (뽑은 숫자 -1) 부터 시작해서 뽑은 숫자만큼 증가시켜가며 해당 위치의 state를 변경한다.
    b. a과정은 인덱스가 범위를 넘어가면 종료한다.

  2. 여학생인 경우
    a. (뽑은 숫자 -1)부터 시작해서 좌우로 가장 많이 대칭을 이룰때 까지 펼쳐나가야한다.

    a. start, end 변수를 (뽑은 숫자 -1) 값으로 초기화한다.
    b. start-1 >= 0 && end+1 < 총 길이 && state[start-1] === state[end+1]의 조건을 만족시킬때까지 start의 값을 1감소, end의 값을 1증가시킨다.
    c. 최종적으로 start부터 end까지의 상태를 바꾸어 준다.
*/

function solution(state, info) {
  const answer = [];

  info.forEach((data) => {
    const [gender, num] = data.split(' ').map(Number);

    if (gender === 1) {
      for (let i = num - 1; i < state.length; i += num) {
        state[i] = state[i] === 1 ? 0 : 1;
      }
    } else {
      let start = num - 1;
      let end = num - 1;

      while (
        start - 1 >= 0 &&
        end + 1 < state.length &&
        state[start - 1] === state[end + 1]
      ) {
        start--;
        end++;
      }

      for (let i = start; i <= end; i++) {
        state[i] = state[i] === 1 ? 0 : 1;
      }
    }
  });

  for (let i = 0; i < Math.ceil(state.length / 20); i++) {
    if (i === Math.ceil(state.length / 20) - 1) {
      answer.push(state.slice(20 * i));
    } else {
      answer.push(state.slice(20 * i, 20 * i + 20));
    }
  }

  const result = [];

  answer.forEach((a) => {
    result.push(a.join(' '));
  });

  return result.join('\n');
}
