# 2164번 카드2

from collections import deque

queue = deque()
N = int(input())

for num in range(1, N + 1):
  queue.append(num)

while len(queue) > 1:
  queue.popleft()
  queue.append(queue.popleft())
  
print(queue.popleft())