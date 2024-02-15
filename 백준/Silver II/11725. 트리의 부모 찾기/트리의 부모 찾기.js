const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, ...infos] = input;
const graph = Array.from({ length: Number(N) + 1 }, () => []);
const visited = Array.from({ length: Number(N) + 1 }, () => false);
const parentArr = new Array(Number(N) + 1).fill(-1);

infos.forEach((element) => {
  const [from, to] = element.split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

function DFS(start, parent) {
  visited[start] = true;
  parentArr[start] = parent;

  for (let child of graph[start]) {
    if (!visited[child]) {
      DFS(child, start);
    }
  }
}

DFS(1, 1);

console.log(parentArr.slice(2).join('\n'));
