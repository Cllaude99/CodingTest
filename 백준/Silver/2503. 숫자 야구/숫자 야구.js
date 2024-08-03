const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
const info = [];
let count = 0;

rl.on('line', function (line) {
  if (N === null) {
    N = +line;
  } else {
    info.push(line.split(' ').map(Number));
    count++;
  }

  if (count === N) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(info));
  process.exit();
});

function solution(info) {
  let possible = [];

  for (let i = 1; i <= 9; i++) {
    let num = [i];
    for (let j = 1; j <= 9; j++) {
      if (j === i) continue;
      num.push(j);
      for (let z = 1; z <= 9; z++) {
        if (z === i || z === j) continue;
        num.push(z);
        possible.push(Number(num.join('')));
        num.pop();
      }
      num.pop();
    }
  }

  info.forEach(([num, s, b]) => {
    possible = check(possible, num, s, b);
  });

  return possible.length;
}

function check(possible, num, s, b) {
  let newPossible = [];
  let sNum = 0;
  let bNum = 0;
  num = num.toString();
  for (let i = 0; i < possible.length; i++) {
    const target = possible[i].toString();
    sNum = 0;
    bNum = 0;

    if (num[0] == target[0]) sNum++;
    else if (num[0] == target[1] || num[0] === target[2]) bNum++;

    if (num[1] == target[1]) sNum++;
    else if (num[1] == target[0] || num[1] == target[2]) bNum++;

    if (num[2] == target[2]) sNum++;
    else if (num[2] == target[0] || num[2] == target[1]) bNum++;

    if (sNum === s && bNum === b) newPossible.push(possible[i]);
  }

  return newPossible;
}
