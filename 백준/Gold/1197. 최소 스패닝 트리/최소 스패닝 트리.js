class Node {
  constructor(start, end, cost) {
    this.start = start;
    this.end = end;
    this.cost = cost;
  }
}
class MinHeap {
  constructor() {
    this.heap = [null];
  }
  length() {
    return this.heap.length - 1;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  push(start, end, cost) {
    let node = new Node(start, end, cost);
    this.heap.push(node);

    let cur = this.length();
    let parent = Math.floor(cur / 2);

    while (cur > 1 && this.heap[parent].cost > this.heap[cur].cost) {
      this.swap(cur, parent);
      cur = parent;
      parent = Math.floor(cur / 2);
    }
  }
  pop() {
    let top = this.heap[1];
    if (this.length() === 1) {
      this.heap = [null];
      return top;
    }

    this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = cur * 2;
    let right = cur * 2 + 1;

    if (!this.heap[left]) return top;
    if (this.heap[left]) {
      if (!this.heap[right]) {
        if (this.heap[cur].cost > this.heap[left].cost) {
          this.swap(cur, left);
          return top;
        }
      }
    }

    while (
      right <= this.length() &&
      (this.heap[cur].cost > this.heap[left].cost ||
        this.heap[cur].cost > this.heap[right].cost)
    ) {
      let minIdx = this.heap[left].cost > this.heap[right].cost ? right : left;
      this.swap(cur, minIdx);
      cur = minIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return top;
  }
}
function getParent(a, b, parent) {
  let A = findParent(a, parent);
  let B = findParent(b, parent);
  if (A === B) return true;
  else return false;
}
function findParent(x, parent) {
  if (parent[x] !== x) {
    return (parent[x] = findParent(parent[x], parent));
  } else {
    return x;
  }
}
function unionParent(a, b, parent) {
  let A = findParent(a, parent);
  let B = findParent(b, parent);
  if (A < B) {
    parent[B] = A;
  } else {
    parent[A] = B;
  }
}
function main() {
  const input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n');
  const [V, E] = input[0].trim().split(' ').map(Number);

  let graph = new MinHeap();
  for (let i = 1; i < input.length; i++) {
    let [start, end, cost] = input[i].split(' ').map(Number);
    graph.push(start, end, cost);
  }

  let parent = new Array(V + 1).fill(0);
  parent.forEach((v, i) => {
    parent[i] = i;
  });

  console.log(sol(V, E, graph, parent));
}
function sol(V, E, graph, parent) {
  let ans = 0;

  while (graph.length()) {
    let cur = graph.pop();
    let [start, end, cost] = [cur.start, cur.end, cur.cost];
    if (!getParent(start, end, parent)) {
      unionParent(start, end, parent);
      ans += cost;
    }
  }
  return ans;
}
main();
