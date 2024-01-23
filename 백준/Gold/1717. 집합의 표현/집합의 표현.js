const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [NM, ...info] = input;
  const [N, M] = NM.split(' ').map(Number);
  const graph = Array.from({ length: N + 1 }, (_, idx) => idx);

  function union(f, s) {
    graph[find(s)] = find(f);
  }

  function find(idx) {
    if (idx === graph[idx]) {
      return idx;
    } else {
      graph[idx] = find(graph[idx]);
      return graph[idx];
    }
  }

  let answer = [];
  for (let i = 0; i < M; i++) {
    const [menu, a, b] = info[i].split(' ').map(Number);
    if (menu === 0) union(a, b);
    else {
      if (find(a) === find(b)) answer.push('YES');
      else answer.push('NO');
    }
  }

  console.log(answer.join('\n'));
  process.exit();
});
