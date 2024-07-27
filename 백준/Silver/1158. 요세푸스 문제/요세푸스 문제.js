const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let K = null;

rl.on('line', function (line) {
  [N, K] = line.split(' ').map(Number);
  rl.close();
}).on('close', function () {
  console.log(solution(N, K));
  process.exit();
});

function solution(N, K) {
  const answer = [];
  let people = Array.from({ length: N }, (_, i) => i + 1);

  let count = 1;

  while (answer.length !== N) {
    if (count === K) {
      answer.push(people.shift());
      count = 1;
    } else {
      people.push(people.shift());
      count++;
    }
  }

  return formatAnswer(answer);
}

function formatAnswer(answer) {
  return '<' + answer.join(', ') + '>';
}
