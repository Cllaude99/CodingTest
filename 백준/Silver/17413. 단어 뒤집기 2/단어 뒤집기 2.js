const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let S = null;

rl.on('line', function (line) {
  if (S === null) {
    S = line;
  }
  rl.close();
}).on('close', function () {
  console.log(solution(S));
  process.exit();
});

function solution(S) {
  let result = '';
  let i = 0;

  while (i < S.length) {
    if (S[i] === '<') {
      // 태그는 그대로 유지
      let tag = '';
      while (i < S.length && S[i] !== '>') {
        tag += S[i];
        i++;
      }
      tag += '>'; // '>' 닫기 태그 추가
      i++; // '>' 뒤로 이동
      result += tag;
    } else if (S[i] === ' ') {
      // 공백은 그대로 유지
      result += ' ';
      i++;
    } else {
      // 단어는 뒤집기
      let word = '';
      while (i < S.length && S[i] !== ' ' && S[i] !== '<') {
        word += S[i];
        i++;
      }
      result += word.split('').reverse().join('');
    }
  }

  return result;
}
