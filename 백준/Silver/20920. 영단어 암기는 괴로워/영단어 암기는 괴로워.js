const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const answer = [];
  const [N, M] = input[0].split(' ').map(Number);
  const words = {};
  const vocab_list = [];

  for (let i = 1; i <= N; i++) {
    const w = input[i];
    if (w.length >= M) {
      if (words[w] === undefined) {
        words[w] = 1;
      } else {
        words[w] += 1;
      }
    }
  }

  Object.keys(words).forEach((key) => {
    vocab_list.push([key, words[key]]);
  });

  vocab_list.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0].length === b[0].length) {
        return a[0].localeCompare(b[0]);
      } else {
        return b[0].length - a[0].length;
      }
    } else {
      return b[1] - a[1];
    }
  });

  vocab_list.forEach((word) => {
    answer.push(word[0]);
  });

  return answer.join('\n');
}

console.log(solution(input));
