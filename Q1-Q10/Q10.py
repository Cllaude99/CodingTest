# 최솟값 찾기
from collections import deque
import sys
input = sys.stdin.readline

N, L = map(int, input().split())
numList = list(map(int, input().split()))
deq = deque()

for i in range(N):
    while len(deq) != 0 and deq[-1][1] > numList[i]:
        deq.pop()
    deq.append((i+1, numList[i]))

    while (i+1) - deq[0][0] >= L:
        deq.popleft()
    print(deq[0][1], end=' ')
