# 여행 가자

import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N = int(input())
M = int(input())
arr = [0] * (N + 1)
success = True

for i in range(N + 1):
    arr[i] = i

def find(idx):
    if idx == arr[idx]:
        return idx
    else:
        arr[idx] = find(arr[idx])
        return arr[idx]

for i in range(N):
    routes = list(map(int, input().split()))
    for r in range(len(routes)):
        if routes[r] == 1:
            arr[find(r + 1)] = arr[find(i + 1)]

schedule = list(map(int, input().split()))
before = schedule[0]
for route in schedule[1:]:
    if find(before) != find(route):
        success = False
        break
    before = route

if success:
    print("YES")
else: print("NO")