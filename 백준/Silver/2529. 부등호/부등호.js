const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k = null;
let exp = null;

rl.on('line', function (line) {
  if (k === null) {
    k = +line;
  } else {
    exp = line.split(' ');
    rl.close();
  }
}).on('close', function () {
  const [min, max] = solution(k, exp);
  console.log(max);
  console.log(min);
  process.exit();
});

function isValid(num, exp) {
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '<' && num[i] > num[i + 1]) return false;
    if (exp[i] === '>' && num[i] < num[i + 1]) return false;
  }
  return true;
}

function solution(k, exp) {
  let min = null;
  let max = null;

  function dfs(current, depth, used) {
    if (depth === k + 1) {
      if (isValid(current, exp)) {
        if (min === null || current < min) min = current;
        if (max === null || current > max) max = current;
      }
      return;
    }

    for (let i = 0; i < 10; i++) {
      if (!used[i]) {
        used[i] = true;
        dfs(current + i, depth + 1, used);
        used[i] = false;
      }
    }
  }

  dfs('', 0, Array(10).fill(false));

  return [min, max];
}
