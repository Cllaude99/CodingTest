# ATM

import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))
sumArr = [0]*(N+1)

arr.sort()

for i in range(1, N + 1):
    sumArr[i] = sumArr[i-1] + arr[i - 1]

print(sum(sumArr))
