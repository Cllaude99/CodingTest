# 이분 그래프
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

K = int(input())
isEven = True


def DFS(idx):
    global isEven
    visit[idx] = True
    for value in arr[idx]:
        if not visit[value]:
            check[value] = (check[idx] + 1) % 2
            DFS(value)
        elif check[idx] == check[value]:
            isEven = False


for _ in range(K):
    node, edge = map(int, input().split())
    arr = [[] for _ in range(node + 1)]
    visit = [False for _ in range(node + 1)]
    check = [0 for _ in range(node + 1)]
    isEven = True

    for _ in range(edge):
        first, second = map(int, input().split())
        arr[first].append(second)
        arr[second].append(first)

    for i in range(1, node + 1):
        DFS(i)
    if isEven:
        print("YES")
    else:
        print("NO")
