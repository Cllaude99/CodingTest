import sys
input = sys.stdin.readline

N, M = map(int, input().split())
tmp = []
count = 0

for _ in range(N):
    tmp.append(input())

for _ in range(M):
    s = input()
    if s in tmp:
        count += 1

print(count)
