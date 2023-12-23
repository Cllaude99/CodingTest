# 최단경로

from queue import PriorityQueue
import sys
input = sys.stdin.readline

V, E = map(int, input().split())
startNode = int(input())
minRoute = [sys.maxsize] * (V + 1)
minRoute[startNode] = 0
arr = [[] for _ in range(V + 1)]
visited = [False for _ in range(V + 1)]
queue = PriorityQueue()

for _ in range(E):
    start, end, value = map(int, input().split())
    arr[start].append((end, value))

queue.put((0, startNode))

while not queue.empty():
    minutes, nextNode = queue.get()
    if visited[nextNode]:
        continue
    visited[nextNode] = True

    for v in arr[nextNode]:
        minRoute[v[0]] = min(minRoute[v[0]], minRoute[nextNode] + v[1])
        queue.put((minRoute[v[0]], v[0]))

for i in range(1, V + 1):
    if visited[i]:
        print(minRoute[i])
    else:
        print("INF")
