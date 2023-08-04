# 경로 찾기

import sys
input = sys.stdin.readline

N = int(input())
arr = [[0 for j in range(N)] for i in range(N)]

for i in range(N):
    arr[i] = list(map(int, input().split()))
    
for K in range(N):
    for S in range(N):
        for E in range(N):
            if arr[S][E] >= 1: continue
            if arr[S][K] + arr[K][E] >= 2:
                arr[S][E] = 1

for i in range(N):
    for j in range(N):
      print(arr[i][j], end=' ')
    print()