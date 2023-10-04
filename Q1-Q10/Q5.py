# 나머지 합

import sys
input = sys.stdin.readline

N,M = map(int, input().split())
numList = list(map(int,input().split()))
sumArr = [0] * (N + 1)
left = [0] * M
count = 0

for i in range(1,N + 1):
  sumArr[i] = sumArr[i-1] + numList[i-1]
  left[sumArr[i] % M] += 1

count += left[0]

for i in left:
  count += (i*(i-1)) // 2

print(count)


