# 여행 가자

from collections import deque
import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N = int(input())
M = int(input())
arr = [[] for _ in range(N + 1)]
canVisit = [[False for j in range(N + 1)] for i in range(N + 1)]
success = False

for i in range(1, N + 1):
    connect = list(map(int, input().split()))
    for j in range(len(connect)):
        if i - 1 == j:
            continue
        if connect[j] != 0:
            arr[i].append(j + 1)

schedule = list(map(int, input().split()))

for i in range(1, N + 1):
    visit = [False for _ in range(N + 1)]
    queue = deque()
    queue.append(i)
    while queue:
        nextValue = queue.popleft()
        visit[i] = True
        for v in arr[nextValue]:
            if not visit[v]:
                queue.append(v)

before = schedule[0]
for value in schedule[1:]:
    if not canVisit[before][value]:
        success = False
        break
    else:
        before = value

if success:
    print("YES")
else:
    print("NO")
