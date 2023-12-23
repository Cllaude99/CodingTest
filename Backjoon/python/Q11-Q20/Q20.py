# 수 정렬하기2

import sys
input = sys.stdin.readline

N = int(input())
arr = []

for _ in range(N):
    arr.append(int(input()))
arr.sort()

for num in arr:
    print(num)
