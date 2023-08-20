# 다리 놓기

import sys
input = sys.stdin.readline

arr = [[0 for j in range(30)] for i in range(30)]

for i in range(1, 30):
    arr[i][1] = i
    arr[i][0] = 1
    arr[i][i] = 1

for i in range(2, 30):
    for j in range(2, i + 1):
        arr[i][j] = arr[i-1][j] + arr[i-1][j-1]

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    print(arr[M][N])
