# 거의 소수

import math
A, B = map(int, input().split())
arr = [0] * (int(math.sqrt(B)) + 1)
prime = []
totalCount = 0

for i in range(2, int(math.sqrt(B)) + 1):
    arr[i] = i

for i in range(2, int(math.sqrt(B)) + 1):
    if arr[i] == 0:
        continue
    else:
        prime.append(arr[i])
        for j in range(i+i, int(math.sqrt(B)) + 1, i):
            arr[j] = 0

for value in prime:
    start = value * value
    while start <= B:
        if start >= A:
            totalCount += 1
        start *= value

print(totalCount)
