# 최소비용 구하기

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
arr = [[] for _ in range(N + 1)]
minRoute = [sys.maxsize] * (N + 1)
visited = [False for _ in range(N + 1)]

for _ in range(M):
    start, end, value = map(int, input().split())
    arr[start].append((end, value))

startNode, endNode = map(int, input().split())
minRoute[startNode] = 0

queue = PriorityQueue()
queue.put((0, startNode))

while not queue.empty():
    routeValue, nextNode = queue.get()
    if visited[nextNode]:
        continue
    visited[nextNode] = True

    for v in arr[nextNode]:
        minRoute[v[0]] = min(minRoute[v[0]], minRoute[nextNode] + v[1])
        queue.put((minRoute[v[0]], v[0]))

print(minRoute[endNode])
