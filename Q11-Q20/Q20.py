# 수 정렬하기2
import sys
input = sys.stdin.readline

arr = []
N = int(input())
for _ in range(N):
    arr.append(int(input()))

arr.sort()

for v in arr:
    print(v)
