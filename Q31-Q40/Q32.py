# 동전 0

import sys
input = sys.stdin.readline

N, K = map(int, input().split())
arr = []
count = 0

for _ in range(N):
    arr.append(int(input()))

for i in range(N-1, -1, -1):
    if arr[i] <= K:
        count += K//arr[i]
        K %= arr[i]
        if K == 0:
            break

print(count)
