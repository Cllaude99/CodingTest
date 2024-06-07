const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0]);
  const M = parseInt(input[1]);
  let room = Array.from({ length: N }, (_, index) => index + 1);

  for (let i = 2; i < 2 + M; i++) {
    const [from, to] = input[i].split(' ').map(Number);

    for (let j = from; j < to; j++) {
      room = room.filter((r) => r !== j);
    }
  }

  return room.length;
}

console.log(solution(input));
