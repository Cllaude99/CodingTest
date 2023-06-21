# 구간 합 구하기1

import sys
input = sys.stdin.readline

N, M = map(int, input().split(' '))
arr = list(map(int, input().split(' ')))
arrSum = [0]*(N+1)

for i in range(1, N + 1):
    arrSum[i] = arrSum[i-1] + arr[i - 1]

for _ in range(M):
    start, end = map(int, input().split(' '))
    print(arrSum[end] - arrSum[start - 1])
