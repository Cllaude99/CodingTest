# 플로이드

import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
arr = [[sys.maxsize for j in range(N)] for i in range(N)]

for i in range(N):
    arr[i][i] = 0

for _ in range(M):
    s,e,w = map(int, input().split())
    if arr[s-1][e-1] > w:
      arr[s-1][e-1] = w

for K in range(N):
    for S in range(N):
        for E in range(N):
            arr[S][E] = min(arr[S][E], arr[S][K] + arr[K][E])

for i in range(N):
    for j in range(N):
        if arr[i][j] == sys.maxsize:
            print(0, end=' ')
        else:
            print(arr[i][j], end=' ')
    print()