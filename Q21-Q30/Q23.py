# 연결 요소의 개수

import sys
sys.setrecursionlimit(1000000)
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[] for _ in range(N + 1)]
check = [False]*(N+1)
Result = 0


def recursion(currentIdx):
    global check
    global arr

    if not check[currentIdx]:
        check[currentIdx] = True

    for value in arr[currentIdx]:
        if not check[value]:
            recursion(value)


for _ in range(M):
    firstNode, secondeNode = map(int, input().split())
    arr[firstNode].append(secondeNode)
    arr[secondeNode].append(firstNode)

for i in range(1, N+1):
    if not check[i]:
        Result += 1
        recursion(i)

print(Result)
