# 최소 스패닝 트리

import sys
from queue import PriorityQueue
input = sys.stdin.readline

V, E = map(int, input().split())
D = [0] * (V + 1)
for i in range(1, V + 1):
    D[i] = i
edgeCnt = 0
total = 0
queue = PriorityQueue()


def find(idx):
    if idx == D[idx]:
        return idx
    else:
        D[idx] = find(D[idx])
        return D[idx]


for _ in range(E):
    s, e, w = map(int, input().split())
    queue.put((w, s, e))

while edgeCnt < V - 1:
    w, s, e = queue.get()
    if find(s) != find(e):
        edgeCnt += 1
        total += w
        D[find(e)] = D[find(s)]

print(total)
