# 구간 합 구하기5

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[0]*(N+1)]
sumArr = [[0 for j in range(N+1)] for i in range(N+1)]

for i in range(N):
    numList = [0] + [int(x) for x in input().split()]
    arr.append(numList)

for i in range(1, N+1):
    for j in range(1, N+1):
        sumArr[i][j] = sumArr[i][j-1] + \
            sumArr[i-1][j] - sumArr[i-1][j-1] + arr[i][j]

for _ in range(M):
    X1, Y1, X2, Y2 = map(int, input().split())
    print(sumArr[X2][Y2] - sumArr[X1-1][Y2] -
          sumArr[X2][Y1-1] + sumArr[X1-1][Y1-1])
