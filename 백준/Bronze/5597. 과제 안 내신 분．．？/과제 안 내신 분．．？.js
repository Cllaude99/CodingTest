const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const numbers = [];

rl.on('line', function (line) {
  numbers.push(+line);
  count++;

  if (count === 28) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(numbers));
  process.exit();
});

/*
  문제설계

  1. 크기가 (30 + 1)인 1차원 배열 students를 선언하고 배열의 값을 false로 초기화한다.
  2. 주어지는 28개의 입력을 고려해서 해당 번호의 students의 값을 true로 수정한다.

  3. 모든 입력에 대해 2번과정을 처리해준 후, students배열의 값 중 false인 곳의 인덱스를 찾아 result에 저장한다.
  4. result를 하나씩 출력한다.
*/

function solution(numbers) {
  const STUDENT_NUM = 30;

  let students = new Array(STUDENT_NUM + 1).fill(false);

  numbers.forEach((num) => (students[num] = true));

  let result = students.map((value, idx) => {
    if (!value) return idx;
    else return null;
  });

  result = result.filter((value) => Boolean(value));

  return result.join('\n');
}
