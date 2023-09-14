#  가장 긴 증가하는 부분수열

import sys
N = int(input())
seq = list(map(int, input().split()))
DP = [sys.maxsize for i in range(1001)]

maxValue = 1
DP[1] = seq[0]

for value in seq[1:]:
    check = False
    for i in range(maxValue, 0, -1):
        if DP[i] < value:
            if i == maxValue:
                maxValue += 1
                DP[maxValue] = min(DP[maxValue], value)
            else:
                DP[i + 1] = min(DP[i + 1], value)
            check = True
            break
    if not check:
        DP[1] = min(DP[1], value)
print(maxValue)
