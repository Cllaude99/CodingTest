const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
  문제 설계

  1. 입력으로 주어지는 길이가 N인 지도를 아래와 같은 과정으로 순차적으로 확인한다.

  2. 현재위치가 E인 경우
     2-1. 다음위치가 존재하는 경우
         다음위치의 값이 E인경우, 다음위치를 확인한다.
         다음위치의 값이 W인경우, block을 1증가하고, 인덱스를 1증가한다.

     2-2. 다음위치가 존재하지 않는 경우
         반복문을 빠져나오고, block변수를 반환한다.


  3. 현재위치가 W인 경우
     다음위치를 확인한다.
*/
function solution(input) {
  const N = parseInt(input[0]);
  const map = input[1].split('');
  let block_num = 0;

  for (let i = 0; i < N - 1; i++) {
    if (map[i] === 'E' && map[i + 1] === 'W') {
      block_num += 1;
      i += 1;
    }
  }

  return block_num;
}

console.log(solution(input));
