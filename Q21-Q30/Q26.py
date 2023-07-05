# DFS와 BFS

from collections import deque
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N, M, V = map(int, input().split())
arr = [[] for _ in range(N + 1)]
visit_DFS = [False] * (N + 1)
visit_BFS = [False] * (N + 1)
ResultBFS = deque()

for _ in range(M):
    firstNode, secondNode = map(int, input().split())
    arr[firstNode].append(secondNode)
    arr[secondNode].append(firstNode)

for i in range(N + 1):
    arr[i].sort()


def DFS(idx):
    print(idx, end=' ')
    visit_DFS[idx] = True
    check = False

    for value in arr[idx]:
        if not visit_DFS[value]:
            check = True
            DFS(value)
        if value == arr[idx][-1] and not check:
            return


def BFS():
    ResultBFS.append(V)
    visit_BFS[V] = True
    print(V, end=' ')

    while ResultBFS:
        value = ResultBFS.popleft()

        for v in arr[value]:
            if not visit_BFS[v]:
                ResultBFS.append(v)
                visit_BFS[v] = True
                print(v, end=' ')


DFS(V)
print()
BFS()
