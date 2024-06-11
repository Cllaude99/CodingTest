const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let M = null;
const input = [];
let count = 0;

rl.on('line', function (line) {
  if (!N && !M) {
    [N, M] = line.split(' ').map(Number);
  } else {
    input.push(line);
    count++;
  }

  if (count === N + M) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

function solution(input) {
  const people = {};
  let answer = [];

  input.forEach((name) => {
    if (people[name] === undefined) {
      people[name] = 1;
    } else {
      people[name] += 1;
    }
  });

  Object.keys(people).forEach((name) => {
    if (people[name] >= 2) {
      answer.push(name);
    }
  });

  answer = answer.sort();
  answer = [answer.length, ...answer];

  return answer.join('\n');
}
