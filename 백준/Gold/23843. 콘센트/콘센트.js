const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] < this.heap[index]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if ((swap === null && this.heap[rightChildIndex] < this.heap[index]) ||
            (swap !== null && this.heap[rightChildIndex] < this.heap[leftChildIndex])) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const arr_n = input[1].split(' ').map(Number).sort((a, b) => b - a);

  const minHeap = new MinHeap();
  for (let i = 0; i < M; i++) {
    minHeap.insert(0);
  }

  for (let i = 0; i < N; i++) {
    const minTime = minHeap.extractMin();
    minHeap.insert(minTime + arr_n[i]);
  }

  let maxTime = 0;
  while (minHeap.heap.length > 0) {
    maxTime = Math.max(maxTime, minHeap.extractMin());
  }

  return maxTime;
}

console.log(solution(input));
