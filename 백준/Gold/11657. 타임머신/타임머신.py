# 타임머신

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = []
minRoute = [sys.maxsize] * (N + 1)
minRoute[1] = 0

for _ in range(M):
    s, e, w = map(int, input().split())
    arr.append((s, e, w))

for _ in range(N - 1):
    for s, e, w in arr:
        if minRoute[s] != sys.maxsize and minRoute[e] > minRoute[s] + w:
            minRoute[e] = minRoute[s] + w

success = True

for s, e, w in arr:
    if minRoute[s] != sys.maxsize and minRoute[e] > minRoute[s] + w:
        success = False

if success:
    for value in minRoute[2:]:
        if value == sys.maxsize:
            print(-1)
        else:
            print(value)
else:
    print(-1)
