# 수 정렬하기3

import sys
input = sys.stdin.readline

arr = [0] * 10001
N = int(input())
for _ in range(N):
    arr[int(input())] += 1

for i in range(1, 10001):
    while arr[i] != 0:
        print(i)
        arr[i] -= 1
