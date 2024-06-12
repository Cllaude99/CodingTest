const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let K = null;
const input = [];
let count = 0;

rl.on('line', function (line) {
  if (!N && !K) {
    [N, K] = line.split(' ').map(Number);
  } else {
    const [idx, ...info] = line.split(' ').map(Number);
    input[idx] = [...info];
    count++;
  }
  if (count === N) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(input, K));
  process.exit();
});

function solution(input, K) {
  let better = 0;
  const [gold, sliver, bronze] = input[K];

  for (let i = 1; i < input.length; i++) {
    if (i === K) continue;

    const [g, s, b] = input[i];

    if (g > gold) {
      better++;
    } else if (g === gold) {
      if (s > sliver) better++;
      else if (s === sliver) {
        if (b > bronze) better++;
      }
    }
  }

  return better + 1;
}
