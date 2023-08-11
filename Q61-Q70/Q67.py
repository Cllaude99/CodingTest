# 트리의 부모 찾기

import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N = int(input())
arr = [[] for _ in range(N + 1)]
result = [0] * (N + 1)
visited = [False] * (N + 1)

for _ in range(N - 1):
    f, s = map(int, input().split())
    arr[f].append(s)
    arr[s].append(f)


def DFS(idx, p):
    visited[idx] = True
    result[idx] = p

    for v in arr[idx]:
        if not visited[v]:
            DFS(v, idx)


DFS(1, 1)

for v in result[2: N + 1]:
    print(v)
