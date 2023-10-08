# 주몽의 명령

import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
arr = list(map(int, input().split()))
arr.sort()

start = 0
end = N - 1
count = 0

while start < end:
    value = arr[start] + arr[end]
    if value == M:
        count += 1
        start += 1
        end -= 1
    elif value < M:
        start += 1
    else:
        end -= 1

print(count)
