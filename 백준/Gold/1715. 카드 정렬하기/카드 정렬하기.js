const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(Number(input[i]));
}
let compareCnt = 0;

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
  add(item) {
    this.heap.push(item);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (parentIdx >= 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  getMinValue() {
    if (this.getSize() === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleDown() {
    let parentIdx = 0;

    while (parentIdx < Math.floor(this.getSize() / 2)) {
      let pl = 2 * parentIdx + 1;
      let pr = pl + 1;
      let child =
        pr <= this.getSize() - 1 && this.heap[pr] < this.heap[pl] ? pr : pl;
      if (this.heap[parentIdx] < this.heap[child]) break;
      this.swap(parentIdx, child);
      parentIdx = child;
    }
  }
}

const myheap = new MinHeap();
for (let value of arr) {
  myheap.add(value);
}

while (myheap.getSize() > 1) {
  const first = myheap.getMinValue();
  const second = myheap.getMinValue();
  compareCnt += first + second;
  myheap.add(first + second);
}

console.log(compareCnt);
