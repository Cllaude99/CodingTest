const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
    1. 먼저 주어진 숫자들을 처음부터 끝까지 6개씩 잘라가면서 아래의 과정을 확인한다.

    1-1. 해당 6개의 숫자가 A ~ H 까지의 문자로 변환될 수 있는 경우
        result_message(잘라진 숫자들의 문자들을 순차적으로 저장하는 변수)에 해당 문자를 더해주고,
        다음 6개의 숫자들을 확인해나간다.

    1-2. 해당 6개의 숫자가 A ~ H 까지의 문자로 변환될 수 없는 경우
        slice_num (지금 까지 6개씩 잘라준 횟수)를 반환하고 종료한다.
*/

// 입력으로 6개의 0과1이 주어지며 해당 값이 이미 알고 있는 문자(A,B, ... ,H)와 한개의 숫자만 다른지 확인하고
// 한 숫자만 다른 경우 해당 문자를 반환하고, 그렇지 않을 경우 false를 반환하는 함수
function change_to_message(numbers, message) {
  // 6개의 숫자에 해당하는 문자가 존재하는 경우
  if (message[numbers] !== undefined) {
    return message[numbers];
  }

  // 6개의 숫자중 한개의 숫자만 다른지 확인하는 과정
  const keys = Object.keys(message);
  for (let i = 0; i < keys.length; i++) {
    let diff = 0;
    const key_value = keys[i];
    for (let j = 0; j < 6; j++) {
      if (numbers[j] !== key_value[j]) {
        diff += 1;
      }
    }
    if (diff < 2) return message[keys[i]];
  }

  return false;
}

function solution(input) {
  const message = {
    '000000': 'A',
    '001111': 'B',
    '010011': 'C',
    '011100': 'D',
    100110: 'E',
    101001: 'F',
    110101: 'G',
    111010: 'H',
  };
  const TOTAL_MESSAGE_LENGTH = +input[0];
  let result_message = '';
  let slice_num = 0;

  for (let i = 0; i < 6 * TOTAL_MESSAGE_LENGTH; i += 6) {
    const numbers = input[1].slice(i, i + 6);
    slice_num += 1;

    const changed_message = change_to_message(numbers, message);

    if (!changed_message) {
      return slice_num;
    }

    result_message += changed_message;
  }

  return result_message;
}

console.log(solution(input));
