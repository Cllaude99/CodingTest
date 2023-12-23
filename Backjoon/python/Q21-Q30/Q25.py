# ABCDE

import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[] for _ in range(N+1)]
visit = [False]*(N+1)
success = False


def recursion(idx, count):
    global success

    if count == 5:
        success = True
        return

    visit[idx] = True
    for value in arr[idx]:
        if not visit[value]:
            recursion(value, count + 1)
    visit[idx] = False


for _ in range(M):
    firstNode, secondNode = map(int, input().split())
    arr[firstNode].append(secondNode)
    arr[secondNode].append(firstNode)


for i in range(N):
    recursion(i, 1)
    if success:
        break

if success:
    print(1)
else:
    print(0)
