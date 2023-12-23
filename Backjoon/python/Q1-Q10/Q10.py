# 최솟값 찾기1

from collections import deque
import sys
input = sys.stdin.readline

N,L = map(int, input().split())
D = list(map(int, input().split()))
deq = deque()

for i in range(N):
  while len(deq) > 0 and deq[-1][0] > D[i]:
    deq.pop()    
  deq.append((D[i], i))

  while i - deq[0][1] >= L:
    deq.popleft()

  print(deq[0][0], end=' ')
