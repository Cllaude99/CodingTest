# 버블 소트

import sys
input = sys.stdin.readline

N = int(input())
arr = []

for i in range(N):
    arr.append((int(input()), i))

Max = 0
sorted_arr = sorted(arr)

for i in range(N):
    if Max < sorted_arr[i][1] - i:
        Max = sorted_arr[i][1] - i

print(Max + 1)
