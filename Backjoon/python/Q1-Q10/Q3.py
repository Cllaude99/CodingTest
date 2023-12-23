# 구간 합 구하기

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = list(map(int, input().split()))
sumArr = [0] * (N + 1)

sumArr[0] = 0
for i in range(1, N + 1):
    sumArr[i] = sumArr[i-1] + arr[i - 1]

for i in range(M):
    f, s = map(int, input().split())
    print(sumArr[s] - sumArr[f-1])
