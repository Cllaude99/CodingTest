const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [NM, person, ...info] = input;
const [N, M] = NM.split(' ').map(Number);
const [_, ...knowingPerson] = person.split(' ').map(Number);
let answer = 0;

if (knowingPerson.length === 0) {
  console.log(M);
  return;
}

const graph = Array.from({ length: N + 1 }, (_, idx) => idx);

function union(a, b) {
  graph[find(b)] = find(a);
}

function find(idx) {
  if (idx === graph[idx]) return idx;
  graph[idx] = find(graph[idx]);
  return graph[idx];
}

for (let i = 0; i < knowingPerson.length - 1; i++) {
  union(knowingPerson[i], knowingPerson[i + 1]);
}

for (let i = 0; i < M; i++) {
  const [num, ...values] = info[i].split(' ').map(Number);
  for (let j = 0; j < num - 1; j++) {
    union(values[j], values[j + 1]);
  }
}

for (let i = 0; i < M; i++) {
  const party = info[i].split(' ').map(Number).slice(1);
  if (party.every((person) => find(person) !== find(knowingPerson[0]))) {
    answer += 1;
  }
}

console.log(answer);
