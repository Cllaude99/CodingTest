const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [S, P] = input[0].split(" ").map(Number);
const dna = input[1];
const count = input[2].split(" ").map(Number);
const current = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
};
let answer = 0;

for (let i = 0; i < P; i++) {
  current[dna[i]] += 1;
}

for (let i = 0; i < S - P + 1; i++) {
  const start = i;
  const end = i + P;
  if (
    current["A"] >= count[0] &&
    current["C"] >= count[1] &&
    current["G"] >= count[2] &&
    current["T"] >= count[3]
  ) {
    answer += 1;
  }
  current[dna[start]] -= 1;
  current[dna[end]] += 1;
}

console.log(answer);
