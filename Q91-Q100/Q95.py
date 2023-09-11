# 외판원 순회
import sys
sys.setrecursionlimit(10**6)

N = int(input())
# costs[i][j] == i에서 j까지 가는데 비용
costs = [[0 for j in range(N)] for i in range(N)]
# arr 인접리스트를 의미함
arr = [[] for i in range(N)]
visited = [False] * (N + 1)
count = 0
minValue = sys.maxsize

for i in range(N):
    costs[i] = list(map(int, input().split()))

for i in range(N):
    for j in range(N):
        if costs[i][j]:
            arr[i].append(j)

for i in range(N):
    for j in range(N):
        if costs[i][j] != 0:
            for k in range(N):
                if costs[i][k] != 0 and costs[k][j] != 0:
                    costs[i][j] = min(costs[i][j], costs[i][k] + costs[k][j])


def DFS(start, end, costSum):
    global count
    costSum = costSum + costs[start][end]
    count += 1
