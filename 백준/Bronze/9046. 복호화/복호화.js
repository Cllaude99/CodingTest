const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const T = parseInt(input[0]);
  const result = [];

  for (let i = 1; i <= T; i++) {
    const crypt = input[i].replaceAll(' ', '');
    const dict = {};
    let info = [];

    for (let i = 0; i < crypt.length; i++) {
      if (dict[crypt[i]] === undefined) {
        dict[crypt[i]] = 1;
      } else {
        dict[crypt[i]] += 1;
      }
    }

    Object.keys(dict).forEach((key) => {
      info.push([key, dict[key]]);
    });

    info = info.sort((a, b) => {
      return b[1] - a[1];
    });

    const max_count = info[0][1];

    const answer =
      info.filter(([_, count]) => count === max_count).length === 1
        ? info[0][0]
        : '?';

    result.push(answer);
  }

  return result.join('\n');
}

console.log(solution(input));
