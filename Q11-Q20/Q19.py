# K번째 수

import sys
input = sys.stdin.readline

N, index = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

print(arr[index - 1])
