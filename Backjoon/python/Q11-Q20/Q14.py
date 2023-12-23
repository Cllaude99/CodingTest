# 절댓값 힙 (11286)

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N = int(input())
queue = PriorityQueue()
result = []

for _ in range(N):
  x = int(input())
  if x == 0:
    if queue.empty():
      result.append(0)
    else:
      result.append(queue.get()[1])
  else:
    queue.put((abs(x), x))

print(result)