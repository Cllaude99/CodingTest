# K번째 최단경로 찾기

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N, M, K = map(int, input().split())
arr = [[] for _ in range(N + 1)]
temp = [[sys.maxsize for j in range(K)] for i in range(N + 1)]
temp[1][0] = 0
queue = PriorityQueue()

for _ in range(M):
    start, end, value = map(int, input().split())
    arr[start].append((end, value))

queue.put((0, 1))

while not queue.empty():
    routeValue, nextNode = queue.get()
    for v in arr[nextNode]:
        if routeValue + v[1] < temp[v[0]][K - 1]:
            temp[v[0]].append(routeValue + v[1])
            temp[v[0]].sort()
            queue.put((routeValue + v[1], v[0]))

for i in range(1, N + 1):
    if temp[i][K - 1] == sys.maxsize:
        print(-1)
    else:
        print(temp[i][K-1])
