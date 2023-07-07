# 미로 탐색

from collections import deque
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[0 for col in range(M + 2)] for row in range(N + 2)]
visit = [[False for col in range(M + 2)] for row in range(N + 2)]
Result = 0
success = False
deq = deque()

for i in range(1, N + 1):
    values = input()
    for j in range(1, M + 1):
        arr[i][j] = values[j-1]

deq.append((1, 1))

while True:
    testDeq = deque()
    check = False
    Result += 1
    while deq:
        x, y = deq.popleft()
        visit[x][y] = True
        if x == N and y == M:
            success = True
            break
        if arr[x][y-1] == '1' and not visit[x][y-1]:
            visit[x][y-1] = True
            testDeq.append((x, y-1))
            check = True
        if arr[x-1][y] == '1' and not visit[x-1][y]:
            visit[x-1][y] = True
            testDeq.append((x-1, y))
            check = True
        if arr[x][y+1] == '1' and not visit[x][y+1]:
            visit[x][y+1] = True
            testDeq.append((x, y+1))
            check = True
        if arr[x+1][y] == '1' and not visit[x+1][y]:
            visit[x+1][y] = True
            testDeq.append((x+1, y))
            check = True
    if success:
        print(Result)
        break
    if not check:
        break
    else:
        while testDeq:
            X, Y = testDeq.popleft()
            deq.append((X, Y))
