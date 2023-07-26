# 임계경로

from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
arr = [[] for _ in range(N + 1)]
reverseArr = [[] for _ in range(N + 1)]
getPointed = [0 for _ in range(N + 1)]
maxMinute = [0 for _ in range(N + 1)]
visited = [False for _ in range(N + 1)]
queue = deque()
roadCnt = 0

for _ in range(M):
  start, end, minute = map(int, input().split())    
  arr[start].append((end, minute))
  reverseArr[end].append((start, minute))
  getPointed[end] += 1

startCity, endCity = map(int, input().split())

queue.append(startCity)

while queue:
  now = queue.popleft()
  for v in arr[now]:
    getPointed[v[0]] -= 1
    maxMinute[v[0]] = max(maxMinute[v[0]], maxMinute[now] + v[1])

    if getPointed[v[0]] == 0:
      queue.append(v[0])

queue.clear()
queue.append(endCity)
visited[endCity] = True

while queue:
  now = queue.popleft()
  for v in reverseArr[now]:
    if maxMinute[now] == maxMinute[v[0]] + v[1]:
        roadCnt += 1
        if not visited[v[0]]:
          visited[v[0]] = True
          queue.append(v[0])      

print(maxMinute[endCity])
print(roadCnt)
  
