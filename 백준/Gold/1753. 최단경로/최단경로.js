const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }
  getSize() {
    return this.heap.length;
  }
  swap(idx1, idx2) {
    let temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);

    while (parent >= 0) {
      if (this.heap[parent][1] < this.heap[idx][1]) break;
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleDown() {
    let parent = 0;
    while (parent < Math.floor(this.getSize() / 2)) {
      const pl = 2 * parent + 1;
      const pr = pl + 1;
      const child =
        pr <= this.heap.length - 1 && this.heap[pr][1] < this.heap[pl][1]
          ? pr
          : pl;
      if (this.heap[parent][1] < this.heap[child][1]) break;
      this.swap(parent, child);
      parent = child;
    }
  }
  extractRootValue() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.heap.shift();
    const rootValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return rootValue;
  }
}

const [VE, start, ...infos] = input;
const [V, E] = VE.split(' ').map(Number);
const graph = Array.from({ length: V + 1 }, () => []);
const visited = Array(V + 1).fill(false);
const minRoute = Array(V + 1).fill(Number.MAX_VALUE);

infos.forEach((element) => {
  const [from, to, weight] = element.split(' ').map(Number);
  graph[from].push([to, weight]);
});

minRoute[Number(start)] = 0;

const heap = new MinHeap();
heap.add([Number(start), 0]);

while (heap.getSize() > 0) {
  const [v, route] = heap.extractRootValue();

  if (visited[v]) continue;
  visited[v] = true;

  graph[v].forEach(([to, weight]) => {
    const newRoute = route + weight;
    if (newRoute < minRoute[to]) {
      minRoute[to] = newRoute;
      heap.add([to, newRoute]);
    }
  });
}

minRoute.slice(1).forEach((element) => {
  if (element === Number.MAX_VALUE) console.log('INF');
  else console.log(element);
});
