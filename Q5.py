# 나머지 합

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
numList = list(map(int, input().split()))

arr = [0]*(N+1)  # 입력 받은 배열
sumArr = [0]*(N+1)  # 구간 합 배열
left = [0]*M  # 나머지 값이 동일한 값들의 개수 (인덱스는 나머지 값을 의미함)
count = 0  # 정답 개수

for i in range(1, N+1):
    arr[i] = numList[i-1]
    sumArr[i] = sumArr[i-1] + arr[i]

for i in range(1, N+1):
    value = sumArr[i] % M
    if value == 0:
        count += 1
    left[value] += 1

for i in range(M):
    if left[i] > 1:
        count += (left[i] * (left[i]-1)) // 2

print(count)
