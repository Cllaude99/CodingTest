# 게임 개발

from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
arr = [[] for _ in range(N + 1)]
time = [0 for _ in range(N + 1)]
beforeTime = [0 for _ in range(N + 1)]
getPointed = [0 for _ in range(N + 1)]
queue = deque()

for i in range(1, N + 1):
    values = list(map(int, input().split()))
    time[i] = values[0]
    values = values[1:]
    for v in values:
        if v == -1:
            break
        arr[v].append(i)
        getPointed[i] += 1

for i in range(1, N + 1):
    if getPointed[i] == 0:
        beforeTime[i] = time[i]
        queue.append(i)

while queue:
    node = queue.popleft()
    for value in arr[node]:
        getPointed[value] -= 1
        beforeTime[value] = max(beforeTime[value], beforeTime[node])
        if getPointed[value] == 0:
            time[value] += beforeTime[value]
            beforeTime[value] = time[value]
            queue.append(value)

for value in time[1:]:
    print(value)
