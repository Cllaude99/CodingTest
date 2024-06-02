const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/*
  문제설계

  1. A와 B의 길이가 같은 경우
     두 문자열의 차이를 반환하고 종료한다.
  
  2. A와 B의 길이가 다른 경우
     2-1. 0부터 B문자열의 길이 - A문자열의 길이만큼 index의 값을 증가시키며, 아래의 과정을 진행한다.
     2-2. B문자열에 대해 'index'부터 'index+A문자열의 길이'까지 slice한다.
     2-3. slice한 문자열과 A문자열의 차이를 구한다.
     2-4. 두 문자열의 차이의 최소값에 해당하는 변수인 min_diff와 비교하고 3번에서 구한 값이 더 작은 경우 min_diff를 업데이트한다.
*/

// 길이가 같은 두 문자열을 입력으로 받아, 두 문자열의 차이값을 출력하는 함수
function getDiff(str1, str2) {
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diff += 1;
    }
  }
  return diff;
}

function solution(input) {
  const [str1, str2] = input[0].split(' ');
  let min_diff = Number.MAX_VALUE;

  if (str1.length === str2.length) {
    min_diff = getDiff(str1, str2);
  } else {
    for (let i = 0; i <= str2.length - str1.length; i++) {
      const sliced_str = str2.slice(i, i + str1.length);
      const diff = getDiff(str1, sliced_str);
      min_diff = diff < min_diff ? diff : min_diff;
    }
  }

  return min_diff;
}

console.log(solution(input));
