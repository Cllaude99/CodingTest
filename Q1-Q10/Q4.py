# 구간합 구하기5

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[0 for j in range(N + 1)] for i in range(N + 1)]
sumArr = [[0 for j in range(N + 1)] for i in range(N + 1)]

for i in range(1, N + 1):
    numList = list(map(int, input().split()))
    for j in range(1, len(numList) + 1):
        arr[i][j] = numList[j-1]
        sumArr[i][j] = sumArr[i-1][j] + \
            sumArr[i][j-1] - sumArr[i-1][j-1] + arr[i][j]

for i in range(M):
    x1, y1, x2, y2 = map(int, input().split())
    result = sumArr[x2][y2] - \
        (sumArr[x2][y1-1] + sumArr[x1-1][y2]) + sumArr[x1-1][y1-1]
    print(result)
