# 1로 만들기
import sys
N = int(input())
DP = [0] * (1000001)

DP[1] = 0

for i in range(2, 1000001):
    DP[i] = 1 + DP[i-1]
    if i % 3 == 0:
        DP[i] = min(1 + DP[i//3], DP[i])
    if i % 2 == 0:
        DP[i] = min(1 + DP[i//2], DP[i])

print(DP[N])
