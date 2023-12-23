# 줄 세우기

from collections import deque
import sys
input = sys.stdin.readline

N , M = map(int, input().split())
arr = [[] for _ in range(N + 1)]
getPointed = [0 for _ in range(N + 1)]
queue = deque()

for _ in range(M):
    A, B = map(int, input().split())
    arr[A].append(B)
    getPointed[B] += 1

for i in range(1, N + 1):
    if getPointed[i] == 0:
        queue.append(i)

while queue:
    value = queue.popleft()
    print(value, end=' ')
    for v in arr[value]:
        getPointed[v] -= 1
        if getPointed[v] == 0:
            queue.append(v)

