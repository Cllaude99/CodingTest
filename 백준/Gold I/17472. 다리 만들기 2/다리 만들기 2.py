# 다리 만들기

import sys
from queue import PriorityQueue
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[0 for j in range(M)] for i in range(N)]
queue = PriorityQueue()
edgeNum = 0
landNum = 2

for i in range(N):
    arr[i] = list(map(int, input().split()))


def makeLand(r, c, num):
    if (r >= 0 and r < N) and (c >= 0 and c < M) and (arr[r][c] == 1):
        arr[r][c] = num
        makeLand(r, c-1, num)
        makeLand(r-1, c, num)
        makeLand(r, c+1, num)
        makeLand(r+1, c, num)


for i in range(N):
    for j in range(M):
        if arr[i][j] == 1:
            makeLand(i, j, landNum)
            landNum += 1

D = [0] * (landNum)
for i in range(2, len(D)):
    D[i] = i


def find(idx):
    if idx == D[idx]:
        return idx
    else:
        D[idx] = find(D[idx])
        return D[idx]


for i in range(N):
    for j in range(M):
        if arr[i][j] != 0:
            for end in range(j - 1, -1, -1):
                if arr[i][end] == arr[i][j]:
                    break
                if arr[i][end] != 0:
                    if j-end-1 >= 2:
                        queue.put((j-end-1, arr[i][j], arr[i][end]))
                    break
            for end in range(j+1, M):
                if arr[i][end] == arr[i][j]:
                    break
                if arr[i][end] != 0:
                    if end-j-1 >= 2:
                        queue.put((end-j-1, arr[i][j], arr[i][end]))
                    break
            for end in range(i-1, -1, -1):
                if arr[end][j] == arr[i][j]:
                    break
                if arr[end][j] != 0:
                    if i-end-1 >= 2:
                        queue.put((i-end-1, arr[i][j], arr[end][j]))
                    break
            for end in range(i+1, N):
                if arr[end][j] == arr[i][j]:
                    break
                if arr[end][j] != 0:
                    if end-i-1 >= 2:
                        queue.put((end-i-1, arr[i][j], arr[end][j]))
                    break

success = True
total = 0

while edgeNum < landNum - 2 - 1:
    if queue.empty():
        success = False
        break
    w, s, e = queue.get()
    if find(s) != find(e):
        edgeNum += 1
        total += w
        D[find(s)] = D[find(e)]


if not success:
    print(-1)
else:
    print(total)

