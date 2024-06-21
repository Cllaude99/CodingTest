const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let count = 0;
const input = [];

rl.on('line', function (line) {
  if (!T) {
    T = +line;
  } else {
    input.push(line);
    count++;
  }

  if (count === T) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

/*
  문제설계 및 분석

  # 규칙을 만족하는지는 아래와 같은 과정으로 확인할 수 있다.

  1. 
*/

function solution(input) {
  const SUCCESS_MSG = 'Infected!';
  const ERROR_MSG = 'Good';
  const CHAR = ['A', 'B', 'C', 'D', 'E', 'F'];
  const answer = [];

  for (let i = 0; i < input.length; i++) {
    let str = input[i].split('');

    if (str[0] !== 'A') str.shift();
    if (str[0] === 'A') {
      // A가 하나또는 그 이상 있는 경우
      while (str.length > 0 && str[0] === 'A') {
        str.shift();
      }
    } else {
      answer.push(ERROR_MSG);
      continue;
    }

    // F가 하나또는 그 이상 있는 경우
    if (str[0] === 'F') {
      while (str.length > 0 && str[0] === 'F') {
        str.shift();
      }
    } else {
      answer.push(ERROR_MSG);
      continue;
    }

    // C가 하나또는 그 이상 있는 경우
    if (str[0] === 'C') {
      while (str.length > 0 && str[0] === 'C') {
        str.shift();
      }
    } else {
      answer.push(ERROR_MSG);
      continue;
    }

    if (str.length === 0) {
      answer.push(SUCCESS_MSG);
    } else if (str.length === 1 && CHAR.includes(str[0])) {
      answer.push(SUCCESS_MSG);
    } else {
      answer.push(ERROR_MSG);
    }
  }

  return answer.join('\n');
}
