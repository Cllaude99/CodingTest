# 특정 거리의 도시 찾기
from collections import deque
import sys
input = sys.stdin.readline

N, M, K, X = map(int, input().split())
arr = [[] for _ in range(N + 1)]
visited = [False for _ in range(N + 1)]
Result = []
que = deque()

for _ in range(M):
    start, end = map(int, input().split())
    arr[start].append(end)

que.append((X, 0))

while len(que) > 0:
    node, distance = que.popleft()
    visited[node] = True

    if distance == K:
        Result.append(node)
        continue
    else:
        for i in arr[node]:
            if not visited[i]:
                visited[i] = True
                que.append((i, distance + 1))

if Result:
    Result.sort()
    for v in Result:
        print(v)
else:
    print(-1)
