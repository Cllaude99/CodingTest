# 트리

import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N = int(input())
numList = list(map(int, input().split()))
deleteNode = int(input())
arr = [[] for _ in range(N)]
visited = [False] * N
rootNode = 0
leafCnt = 0

for i in range(N):
    if numList[i] == -1:
        rootNode = i
    else:
        arr[i].append(numList[i])
        arr[numList[i]].append(i)


def DFS(idx):
    global leafCnt
    visited[idx] = True
    isLeaf = True
    for v in arr[idx]:
        if not visited[v] and v != deleteNode:
            isLeaf = False
            DFS(v)
    if isLeaf:
        leafCnt += 1


if rootNode == deleteNode:
    print(0)
else:
    DFS(rootNode)
    print(leafCnt)
