const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let M = null;
let count = 0;
const keywordSet = new Set();
const input = [];

rl.on('line', function (line) {
  if (N === null && M === null) {
    [N, M] = line.split(' ').map(Number);
  } else if (count < N) {
    keywordSet.add(line.trim());
    count++;
  } else {
    input.push(line.trim().split(','));
    count++;
  }

  if (count === N + M) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(keywordSet, input));
  process.exit();
});

function solution(keywordSet, input) {
  const answer = [];
  input.forEach((keywords) => {
    keywords.forEach((keyword) => {
      keywordSet.delete(keyword);
    });
    answer.push(keywordSet.size);
  });
  return answer.join('\n');
}
